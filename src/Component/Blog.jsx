import React, { useEffect, useState } from "react";
import Navbar from "./Common/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ittrainingDataSerivice } from "../Services/dataService";
import ReactPaginate from 'react-paginate';
import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { getExploreCards, fetchCards } from "../Redux/functionsSlics";

import { FaArrowLeftLong } from "react-icons/fa6";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";
import PageBanner from "./Common/PageBanner";

const Blog = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);
    const courses = useSelector((state) => state.backendFunction.webCard)

    const [blog, setBlog] = useState([]);
    const [bannerImg, setBannerImg] = useState();
    const [tag, setTag] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 6;
    //total pages
    const totalPages = Math.ceil(blog.length / 6);

    const currentItems = blog.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page.selected); // Only update currentPage
    };

    async function fetchBlog() {
        try {
            const response = await ittrainingDataSerivice.getBlogs();

            if (response.status === 200) {
                setBlog(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getTag() {
        try {
            const response = await ittrainingDataSerivice.getTags();

            if (response.status === 200) {
                setTag(response.data?.data);
            }
        }
        catch (error) {
            console.log(error);
        }

    }
    async function banner() {
        try {
            const response = await ittrainingDataSerivice.getBlogBanner();
            if (response.status === 200)
                setBannerImg(response.data.data);

        }
        catch (error) {
            console.log("error to get course details banner", error);
        }
    }
    useEffect(() => {
        fetchBlog();
        getTag();
        banner();
    }, [])

    useEffect(() => {
        if (!exploreCat) {
            dispatch(getExploreCards());
        }
        if (!courses) {
            dispatch(fetchCards());
        }
    }, [dispatch, exploreCat, courses])

    function blogDetails(blogDetail) {

        navigate("/" + blogDetail.heading?.replace(/\s|\/+/g, '-'), { state: blogDetail });

    }


    const { ref: pagination, inView: isPagination } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: latestCourse, inView: isLatestCourse } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: courseCategories, inView: isCourseCategories } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: tags, inView: isTags } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    function categoryDetails(categoryDetails) {

        navigate("/course-category/" + categoryDetails?.heading?.replace(/\s|\/+/g, "-"), { state: categoryDetails })
    }

    function handleCourseDetails(course) {

        navigate("/course/" + course.courseName?.replace(/\s|\/+/g, "-"), { state: course });
    }

    function showTagsBlog(tag) {
        navigate("/tag/" + tag?.replace(/\s|\/+/g, '-'));
    }




    return (
        <div>
            <Navbar />
            {/* page banner start */}
            <PageBanner heading={"Blogs"} img={`${ittrainingDataSerivice?.backendUrl}/${bannerImg?.img}`} />
            {/* Page banner End */}

            {/* Page Blog Section start */}
            <section className="pt-[60px] pb-[62px] max-979:pt-[70px] max-979:pb-[28px] max-979:px-0 max-649:pt-[46px] ">
                <div className="wrapper">
                    <div className="flex  max-979:flex-col justify-between">
                        <div className={`w-[66%] max-979:w-[100%] flex flex-col flex-wrap ${isPagination && "animate__fadeIn"} `}
                            ref={pagination}
                            style={{ animationDuration: '5s' }}

                        >
                            <div className="flex flex-wrap">
                                {currentItems?.map((blog, index) => {
                                    const date = new Date(blog?.updatedAt)

                                    return <div key={index} className={` w-[47.7%] max-567:w-[80%] max-567:mx-auto max-480:w-[90%] max-649:mt-0 max-649:mx-0 max-649:w-[70%] pt-[10px]  mb-[38px] ml-0 z-[20] hover:translate-y-[-10px] duration-300 ease-linear ${index % 2 == 0 ? "mr-[4.4%]" : ""}`}>
                                        <div className=" ">
                                            <figure>
                                                <img src={`${ittrainingDataSerivice.backendUrl}/${blog.img}`} className="max-w-[100%] max-h-[100%]  rounded-t-[23px] rounded-b-none " alt="IT Courses after 12th" />
                                            </figure>

                                        </div>
                                        <div className="shadow-blogCardShado bg-[#fff] pt-[23px] pb-[30px] px-[23px] rounded-b-[23px] rounded-t-none">
                                            <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500] flex items-center">
                                                <span><FaRegClock style={{ fontSize: '17px' }} /></span> <span className="ml-[7px]">

                                                    {date.toLocaleString('en-US', { month: 'long' })}, {date.getFullYear()}</span>

                                            </h4>
                                            <div className="mt-[14px]">
                                                <h6 className="leading-[28px] max-374:text-[15px] max-374:leading-[20px] max-413:text-[16px] max-413:leading-[21px] max-649:min-h-[auto] min-h-[48px] max-1200:leading-[26px] max-1200:min-h-[107px] ">
                                                    <button onClick={() => blogDetails(blog)} className="text-start hover:text-[#009ce5] transition-all duration-200 ease-out">{blog.heading}</button>

                                                </h6>

                                            </div>
                                            <div className="mt-[12px] flex items-center ">
                                                <div>
                                                    <figure>
                                                        <img className="w-[54px] rounded-[50%] border-[5px] border-solid border-[#fff] shadow-blogCarditShado " src="/Favicon-150x150.png" />
                                                    </figure>
                                                </div>
                                                <div className="ml-[15px]">
                                                    <h4>
                                                        <Link to="/" className="text-[16px]  max-413:leading-[19px] max-767:text-[15px] max-767:leading-[20px]  leading-[21px] text-[#b0b0b0] font-[600] hover:text-[#009ce5] cursor-pointer transition-all duration-200 ease-out" > IT Training Indore</Link>
                                                    </h4>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                })
                                }
                            </div>
                            <div className="mt-[20px] ">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={currentPage + 1 === totalPages ? "" : <FaArrowRightLong />}
                                    onPageChange={handlePageChange}
                                    pageCount={totalPages}
                                    previousLabel={currentPage === 0 ? "" : <FaArrowLeftLong />}
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

                        <div className="w-[31.5%] max-979:w-[100%] max-979:mt-[50px] ">
                            <div className="w-[99%] ml-auto pt-[10px]">
                                <div className={`${isLatestCourse && "animate__fadeIn"}`}
                                    ref={latestCourse}
                                    style={{ animationDuration: '5s' }}
                                >
                                    <div className="w-[90%]  ">
                                        <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Latest Courses</h6>

                                    </div>
                                    <div className=" ">

                                        {
                                            courses?.slice(courses.length - 3, courses.length).map((course, index) => {
                                                const dateObj = new Date(course?.updatedAt); // Create a Date object
                                                const day = dateObj.getDate(); // Get the day of the month (1-31)
                                                const month = dateObj.toLocaleString('en-US', { month: 'long' }); // Get the month 
                                                const year = dateObj.getFullYear(); // Get the year (e.g., 2024)
                                                const formattedDate = `${month} ${day}, ${year}`; // Format the date as "19 Dec, 2024"

                                                return (<div className="mt-[25px] flex" key={index}>
                                                    <div className=" w-[77px]   rounded-[10px] overflow-hidden ">
                                                        <figure className="m-0">
                                                            <button className=" h-[77px] max-767:h-[65px] block" onClick={() => handleCourseDetails(course)}>
                                                                <img className="w-[auto] h-[100%] object-cover" src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} />
                                                            </button>
                                                        </figure>
                                                    </div>
                                                    <div className="ml-[10px] w-[68%] ">


                                                        <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500]">{formattedDate}</h4>


                                                        <div className="mt-[10px]">
                                                            <h4 className="text-start  leading-[24px] max-413:text-[15px] max-413:leading-[19px] text-[16px] max-1024:text-[15px] max-979:text-[16px] font-[600] ">
                                                                <button onClick={() => handleCourseDetails(course)} className="hover:text-[#009ce5] text-start transition-all duration-300 ease-out">{course?.courseName}
                                                                </button>

                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>)


                                            })
                                        }
                                    </div>
                                </div>
                                <div className={`mt-[65px] max-767:mt-[35px] ${isCourseCategories && "animate__fadeIn"}`}
                                    style={{ animationDuration: "5s" }}
                                    ref={courseCategories}
                                >
                                    <div className="w-[90%] ">
                                        <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">
                                            Our Courses Categories
                                        </h6>

                                    </div>

                                    <div className="mt-[25px] h-[400px] overflow-y-scroll ">
                                        {
                                            exploreCat?.map((item, index) => (
                                                <div className="mt-[29px] flex items-center" key={index}>
                                                    <div className="w-[77px] rounded-[10px]">
                                                        <figure className={`w-[77px] h-[75px] max-767:w-[65px] max-767:h-[65px] ${index % 4 === 0 && "bg-[#FFF7DB]" || index % 4 === 1 && "bg-[#D9F3FF]" || index % 4 === 2 && "bg-[#E3FFE0]" || index % 4 === 3 && "bg-[#ECE3FF]"} text-center flex  justify-center items-center rounded-[10px] `}>
                                                            <button onClick={() => categoryDetails(item)} className="block">
                                                                <img className="w-[35px] " src={`${ittrainingDataSerivice.backendUrl}/${item.img}`} />
                                                            </button>

                                                        </figure>

                                                    </div>
                                                    <div className="w-[68%] ml-[24px]">
                                                        <h4 className="text-[16px] max-1024:text-[15px] max-979:text-[16px] max-413:text-[15px] max-413:leading-[19px] font-[600] leading-[24px]">
                                                            <button onClick={() => categoryDetails(item)} className="text-start hover:text-[#009ce5] transition-all duration-300 ease-out">{item.heading}</button>
                                                        </h4>

                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>

                                <div className={`mt-[65px] max-767:mt-[35px] ${isTags && "animate__fadeIn"}`}
                                    style={{ animationDuration: '5s' }}
                                    ref={tags}
                                >
                                    <div className="w-[90%] ">
                                        <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Tags</h6>
                                    </div>
                                    <div className="mt-[24px]">
                                        <div className="h-[200px]  overflow-y-scroll">

                                            {
                                                tag?.map((item, index) => (
                                                    <div onClick={() => showTagsBlog(item?.tag)} key={index} className="mr-[3%] mt-0 ml-0 mb-5  inline-block  ">
                                                        <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                            <button to="/courses" className="py-[6px] px-[20px] max-1321:px-[15px] max-1200:px-[8px] max-979:px-[20px] max-567:px-[13px]  bg-[#f2f2f2] text-[#989898] inline-block hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out ">
                                                                {item?.tag}
                                                            </button>

                                                        </h4>

                                                    </div>
                                                ))
                                            }

                                        </div>

                                    </div>

                                </div>
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

export default Blog;