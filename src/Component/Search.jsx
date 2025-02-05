import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Common/Navbar";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlacedStudent } from "../Redux/functionsSlics";
import { ittrainingDataSerivice } from "../Services/dataService";
import ReactPaginate from "react-paginate";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Formik } from "formik";

const Search = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const searchValue = useParams()?.searchvalue;

    const dispatch = useDispatch();
    const webCard = useSelector((state) => state.backendFunction.webCard);

    const navigate = useNavigate();

    function handleCourseDetails(course) {
      //  console.log("card", course);
        navigate("/course/" + course.courseName?.replace(/\s|\/+/g,'-'), { state: course });
    }

    useEffect(() => {
        dispatch(getPlacedStudent());
    }, [dispatch])

    const courseFind = useMemo(() => webCard?.filter((course) =>
        course?.category.toLowerCase().includes(searchValue.toLowerCase()) || course?.courseName.toLowerCase().includes(searchValue.toLocaleLowerCase())
    ), [webCard, searchValue])
    const itemsPerPage = 10;

    const totalPages = Math.ceil(courseFind.length / 10);

    const currentItems = courseFind?.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

    function handlePageChange(page) {
        setCurrentPage(page.selected); // Only update currentPage
    }

    const handleSearch = (search) => {
        if (search?.query)
            navigate("/search/" + search?.query);
        else
            navigate("/search/" + search);
    }

    return (
        <div>

            <Navbar />
            {/* Search Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%]" src={`/2c68f8235b8b46e1b9266a86b93db66b599a92cb.webp`} />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">Search</h1>
                        </div>

                    </div>
                </div>
            </section>

            {/* main search section start */}
            <section className="pt-[85px] pb-[80px] ">
                <div className="wrapper">
                    <div className="mt-0 mb-[50px] mx-auto">

                        <div>
                            <header className=" text-[#000] text-center">
                                <div className="mt-[29px]">
                                    <h1 className="text-[54px] leading-[60px] font-[800] text-[#1AAEF4] "> Search : <span className="text-[#000] ">“{searchValue}”</span></h1>
                                    <div className="mt-[29px] ">
                                        {
                                            courseFind?.length > 0 ? <p>We found {courseFind?.length} results for your search.</p>
                                                : <div>
                                                    <p className="mb-[40px]">We could not find any results for your search. You can give it another try through the search form below.
                                                    </p>

                                                    <Formik
                                                        initialValues={{ query: "" }}
                                                        validate={value => {
                                                            const error = {};
                                                            if (!value.query) error.query = "Please Enter a Course Name"
                                                            return error;
                                                        }
                                                        }
                                                        onSubmit={(values, { setSubmitting }) => {
                                                            setTimeout(() => {
                                                                handleSearch(values);
                                                                setSubmitting(false);
                                                            }, 400);
                                                        }}
                                                    >
                                                        {({ handleSubmit, handleChange, values, errors }) => (
                                                            <form className="w-[98%]" onSubmit={handleSubmit}>
                                                                <div className="flex w-[95%] ml-auto">
                                                                    <input type="text" value={values?.query} onChange={handleChange} name="query" placeholder="Search Course" className={` ${errors?.query ? "border-b-[1px] border-solid border-red-500" : ""} bg-[#ffffff] py-[15px]  px-[30px] w-[92%] rounded-tl-[27px] rounded-r-[0px] rounded-b-[0px] rounded-l-[27px] search-shadow focus:outline-none placeholder:text-[#000] placeholder:text-opacity-30 font-[400]  focus:placeholder:text-transparent`} />
                                                                    <button type="submit" className="  bg-[#1aaef4] hover:bg-[#000]    w-[8%] rounded-r-full items-center cursor-pointer transition-all duration-150 ease-linear ">
                                                                        <BsSearch style={{ color: "white", fontSize: "20px", marginLeft: "25px" }} />
                                                                    </button>
                                                                </div>
                                                                {errors.query && <span className="text-red-600 inline-block">{errors.query}</span>}
                                                            </form>

                                                        )}
                                                    </Formik>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </header>
                            {
                                currentItems?.map((course, index) => (
                                    <article className="w-[1200px] mx-auto my-0" key={index}>
                                        <div>
                                            <div className=" mt-[30px] pt-[10px] pb-[25px] border-b-[1px] border-[#cecece]">
                                                <header>
                                                    <div className="mt-[29px] ">

                                                        <button onClick={() => handleCourseDetails(course)} className="text-[#1AAEF4] font-bold text-[24px] leading-[30px] ">{course?.courseName}
                                                        </button>

                                                    </div>
                                                </header>
                                                <div className="flex items-center">
                                                    <figure className="w-[27%]  mb-0 ml-0 mr-[30px] mt-[35px]  ">

                                                        <img src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} />
                                                    </figure>
                                                    <div className="w-[70%] ">
                                                        <div className="">
                                                            <p>{course.overview?.slice(0, 400)}...</p>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>)
                                )
                            }
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-[40px]  w-[200px]  mx-auto ">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={<FaArrowRightLong />}
                                    onPageChange={handlePageChange}
                                    pageCount={totalPages}
                                    previousLabel={<FaArrowLeftLong />}
                                    renderOnZeroPageCount={null}
                                    containerClassName="pagination" // Main container
                                    pageClassName="page-item" // Each page item (li)
                                    pageLinkClassName="page-link" // Each page link (a)
                                    activeClassName="active" // Active page item
                                    previousClassName="page-item prev border-[0px]  border-white shadow-none " // Previous button
                                    nextClassName="page-item next" // Next button
                                    breakClassName="page-item break" // Break "..." item
                                    disabledClassName="disabled" // Disabled state  
                                />
                            </div>

                        </div>


                    </div>

                </div>

            </section>
            <CounterPage />
            <Footer />
        </div>
    )

}

export default Search;



