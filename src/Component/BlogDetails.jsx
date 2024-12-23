import React, { useEffect, useMemo } from "react";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { ittrainingDataSerivice } from "../Services/dataService";
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import { useSelector,useDispatch } from "react-redux";
import { getExploreCards } from "../Redux/functionsSlics";


function BlogDetails (){

    const dispatch = useDispatch();

    const [blogDetails,setBlogDetails] = useState();

    const blog = useLocation().state;

    useEffect(()=>{
        dispatch(getExploreCards());
    },[dispatch])

    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);

    useMemo(()=>setBlogDetails(blog),[blog])
    console.log(blog);

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
    return (
        <div>
            <Navbar/>
            <PageBanner heading={"Blog"} img={"/default-banner.jpg"}/>

            {/* Blog Section start */}

            <section className="pt-[80px] px-0 pb-[62px]">
                <div className="wrapper flex">
                    <div className="w-[66%] ">
                        <div className="mb-[50px]">
                            <h2 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">Top IT Courses after 12th for Successful Career in 2025</h2>

                        </div>
                        <div className="mb-[40px] ">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${blogDetails?.img}`} className="w-[100%]"/>

                        </div>


                        {/* Pending blog Details  */}

                    </div>
                    <div className="w-[31.5%] ml-auto">
                            <div className="w-[99%] ml-auto pt-[10px]">
                                <div className={`${isLatestCourse && "animate__fadeIn"}`}
                                    ref={latestCourse}
                                    style={{ animationDuration: '5s' }}
                                >
                                    <div className="w-[90%]  ">
                                        <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Latest Courses</h6>

                                    </div>
                                    <div className="mt-[25px] ">
                                        <div className="flex">
                                            <div className=" w-[77px]   rounded-[10px] overflow-hidden ">
                                                <figure className="m-0">
                                                    <Link className="w-[100%] h-[77px] block">
                                                        <img className="w-[100%] h-[100%] object-cover" src="/best-web-api-development-coaching-class-indore-1.jpg" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <div className="ml-[10px] w-[68%] ">
                                                <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500]">April 28, 2023</h4>
                                                <div className="mt-[10px]">
                                                    <h4 className="leading-[24px] text-[16px] font-[600] ">
                                                        <Link to="courses" className="hover:text-[#009ce5] transition-all duration-300 ease-out">Web API Development
                                                        </Link>

                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex mt-[25px]">
                                            <div className=" w-[77px]   rounded-[10px] overflow-hidden ">
                                                <figure className="m-0">
                                                    <Link className="w-[100%] h-[77px] block">
                                                        <img className="w-[100%] h-[100%] object-cover" src="/best-cake-php-coaching-class-indore.jpg" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <div className="ml-[10px] w-[68%] ">
                                                <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500]">April 28, 2023</h4>
                                                <div className="mt-[10px]">
                                                    <h4 className="leading-[24px] text-[16px] font-[600] ">
                                                        <Link to="courses" className="hover:text-[#009ce5] transition-all duration-300 ease-out">Cake PHP Course
                                                        </Link>

                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex mt-[25px]">
                                            <div className=" w-[77px]   rounded-[10px] overflow-hidden ">
                                                <figure className="m-0">
                                                    <Link className="w-[100%] h-[77px] block">
                                                        <img className="w-[100%] h-[100%] object-cover" src="/best-vue-js-coaching-class-indore.jpg" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <div className="ml-[10px] w-[68%] ">
                                                <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500]">April 28, 2023</h4>
                                                <div className="mt-[10px]">
                                                    <h4 className="leading-[24px] text-[16px] font-[600] ">
                                                        <Link to="courses" className="hover:text-[#009ce5] transition-all duration-300 ease-out">Vue.js course
                                                        </Link>

                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`mt-[65px] ${isCourseCategories && "animate__fadeIn"}`}
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
                                                        <figure className={`w-[77px] h-[75px] ${index % 4 === 0 && "bg-[#FFF7DB]" || index % 4 === 1 && "bg-[#D9F3FF]" || index % 4 === 2 && "bg-[#E3FFE0]" || index % 4 === 3 && "bg-[#ECE3FF]"} text-center flex  justify-center items-center rounded-[10px] `}>
                                                            <Link to="/" className="block">
                                                                <img className="w-[35px] " src={`${ittrainingDataSerivice.backendUrl}/${item.img}`} />
                                                            </Link>

                                                        </figure>

                                                    </div>
                                                    <div className="w-[68%] ml-[24px]">
                                                        <h4 className="text-[16px] font-[600] leading-[24px]">
                                                            <Link to="/course" className="hover:text-[#009ce5] transition-all duration-300 ease-out">{item.heading}</Link>
                                                        </h4>

                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>

                                <div className={`mt-[65px] ${isTags && "animate__fadeIn"}`}
                                    style={{ animationDuration: '5s' }}
                                    ref={tags}
                                >
                                    <div className="w-[90%] ">
                                        <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Tags</h6>
                                    </div>
                                    <div className="mt-[24px]">
                                        <div className="h-[200px]  overflow-y-scroll">
                                            <div className="mr-[3%] mt-0 ml-0 mb-5  inline-block  ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out ">
                                                        It Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block  ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Software Development
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        .NET
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        .ASP
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        MYSQL
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Android Development
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Search Engines
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Graphic Designing Training
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best IT Training  Indore Institute
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best IT Training
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Training
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        XML
                                                    </Link>

                                                </h4>

                                            </div>

                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Cms
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Content Writing
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Cms Course
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Designing
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Graphic
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        PHP Training
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Web Design
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Digital Marketing Course
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Top IT Course
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Graphic Design Course
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        IT Degrees After 12th Class
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Computer Diploma Course After 12th
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        IT Courses After 12th For Students
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        IT Diploma Courses After 12th
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Digital Marketing Course
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        IT Training Classes In Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Project Based IT Courses
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Career
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Growth
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Skills
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Internship Opportunity
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        IT Courses After 12th
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Industrial Training In Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        UI UX
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Interview Preparation
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Graphic Designing
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Digital Presence
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        PHP
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        JAVA
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Industrial Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Best Digital Marketing
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        SEO Training In Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Web Development
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Web Designing
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        CSS
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Web Development Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Live Project Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        SEO
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Smm
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        Web Design Training Indore
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        HTML
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        C
                                                    </Link>

                                                </h4>

                                            </div>
                                            <div className="mr-[3%]  mt-0 ml-0 mb-5 inline-block ">
                                                <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                    <Link to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block  hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out">
                                                        C++
                                                    </Link>

                                                </h4>

                                            </div>









                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                </div>

            </section>


        </div>
    )


}

export default BlogDetails;

