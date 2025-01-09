import React, { useEffect } from "react";
import Navbar from "./Common/Navbar";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlacedStudent } from "../Redux/functionsSlics";
import { ittrainingDataSerivice } from "../Services/dataService";



const Search = () => {

    
    const searchValue = useParams()?.searchvalue;


    const dispatch = useDispatch();
    const webCard = useSelector((state) => state.backendFunction.webCard);


    useEffect(() => {
        dispatch(getPlacedStudent());
    }, [dispatch])

    const courseFind = webCard?.filter((course) => {
        // Check if courseName and category are valid strings before calling includes
        return (
          (typeof course?.courseName === 'string' && course?.courseName.includes(searchValue)) ||
          (typeof course?.category === 'string' && course?.category.includes(searchValue))
        );
      });
      
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
                            <header className="mb-[50px] text-[#000] text-center">
                                <div className="mt-[29px]">
                                    <h1 className="text-[54px] leading-[60px] font-[800] text-[#1AAEF4] "> Search : <span className="text-[#000] ">“{searchValue}”</span></h1>
                                    <div className="mt-[29px] ">
                                        {
                                            courseFind?.length > 0 ? <p>We found {courseFind?.length} results for your search.</p> 
                                            : <p>We could not find any results for your search. You can give it another try through the search form below.</p> 
                                        }
                                        
                                        
                                    </div>

                                </div>
                            </header>
                            {
                                courseFind?.map((course, index) => (
                                    <article className="w-[1200px] mx-auto my-0" key={index}>
                                        <div>
                                            <div className=" mt-[30px] pt-[20px] border-t-[1px] border-[#cecece]">
                                                <header>
                                                    <div className="mt-[29px] ">

                                                        <button className="text-[#1AAEF4] font-bold text-[24px] leading-[30px] ">{course?.courseName}
                                                        </button>

                                                    </div>
                                                </header>
                                                <div className="flex items-center">
                                                    <figure className="w-[27%]  mb-0 ml-0 mr-[30px] mt-[35px]  ">

                                                        <img src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} />
                                                    </figure>
                                                    <div className="w-[70%] ">
                                                        <div className="">
                                                            <p>{course.details?.slice(0,400)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>


                                )
                                )
                            }
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



