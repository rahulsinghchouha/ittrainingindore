import React, { useEffect, useState } from "react"
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, getExploreCards } from "../Redux/functionsSlics";
import { ittrainingDataSerivice } from "../Services/dataService";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";



const Sitemap = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);
    const webCard = useSelector((state) => state.backendFunction.webCard);

    const [blog, setBlog] = useState([]);

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


    useEffect(() => {
        dispatch(fetchCards());
        dispatch(getExploreCards());
    }, [dispatch])

    useEffect(() => {
        fetchBlog();
    }, [])

    function blogDetails(blogDetail) {

        navigate("/" + blogDetail.heading?.replace(/\s|\/+/g,'-'), { state: blogDetail });

    }
    function categoryDetails(categoryDetails) {

        navigate("/course-category/" + categoryDetails.heading?.replace(/\s|\/+/g,'-'), { state: categoryDetails })
    }

    function handleCourseDetails(course) {

        navigate("/course/" + course.courseName?.replace(/\s|\/+/g,'-'), { state: course });
    }


    return (
        <div>
            <Navbar />
            <PageBanner heading={"Sitemap"} img={"/Best-IT-Courses-Coaching-Class-Institute.jpg"} />

            {/* Sitemap section start */}

            <section className="py-[100px] max-1200:py-[80px] max-800:py-[65px] max-480:py-[50px] px-0 ">
                <div className="wrapper">
                    {/* menu categories and courses section */}
                    <div className="flex listBgImage flex-wrap">
                        <div >
                            <h4 className="text-[20px] leading-[30px] mb-[23px] ">Our Menu</h4>
                            <ul>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/">Home</Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/courses">Courses</Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/about-us">About Us</Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className="ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/blogs">Blogs</Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/testimonials">Testimonials
                                    </Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" to="/contact-us">Contact Us</Link>
                                </li>
                                <li className="mt-[20px]">
                                    <Link className=" ml-[30px] text-[16px] leading-[28px] font-[400]  inline-block " to="/sitemap">Sitemap</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="max-413:mt-[30px] max max-413:pl-0 max-413:border-l-0 max-413:ml-0 max-413:w-[100%] max-413:pt-[30px] max-413:border-t-[1px] max-413:border-solid max-413:border-[#7a7a7a33] ml-[50px] pl-[50px] pb-[50px] pt-0 pr-0 border-l-[1px] border-solid border-[#70707033]">
                            <h4 className="text-[20px] leading-[30px] mb-[23px] ">Courses Categories</h4>
                            <ul>
                                {
                                    exploreCat?.map((category, index) => (
                                        <li key={index} className="mt-[24px]">
                                            <button onClick={() => categoryDetails(category)} className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" >{category?.heading}</button>
                                        </li>))
                                }

                            </ul>





                        </div>
                        <div className="max-800:pl-0 max-800:border-l-0 max-800:ml-0 max-800:w-[100%] max-800:pt-[30px] max-800:border-t-[1px] max-800:border-solid max-800:border-[#7a7a7a33] ml-[50px] pl-[50px] pb-[50px] pt-0 pr-0 border-l-[1px] border-solid border-[#70707033]">
                            <h4 className="text-[20px] leading-[30px] mb-[23px] ">All Courses</h4>
                            <ul>
                                {
                                    webCard?.map((course, index) => (
                                        <li key={index} className="mt-[24px]">
                                            <button onClick={() => handleCourseDetails(course)} className=" ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" >{course?.courseName}</button>
                                        </li>))
                                }

                            </ul>
                        </div>

                    </div>
                    <div className="pt-[40px] border-t-[1px] border-solid border-[#7a7a7a33] listBgImage">
                        <h4 className="mb-[23px] text-[20px] leading-[30px] font-[700] text-[#000] ">Blogs</h4>

                        <ul>
                            {
                                blog?.map((blog, index) => (
                                    <li key={index} className="mt-[24px]">
                                        <button onClick={() => blogDetails(blog)} className=" text-start ml-[30px] text-[16px] leading-[28px] font-[400] inline-block" >{blog?.heading}</button>
                                    </li>))
                            }

                        </ul>
                    </div>

                    {/* side image button */}

                    <div className="pt-[40px] border-t-[1px] border-solid border-[#7a7a7a33] mt-[50px] ">
                        <button  className="max-413:ml-0 max-649:py-[8px] max-649:px-[20px] cursor-pointer ml-[22px] pt-[13px] pb-[13px] pl-[40px] pr-[40px]
                                                             text-[16px] leading-[21px] inputGradient hover:bg-[#1aeef4] font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none  transition duration-500 ease-linear hover:bg-[linear-gradient(180deg,_#1AAEF4_100%,_#1AAEF4_0%,_#0096EB_0.1%)]">

                            Sitemap

                        </button>
                        <span  className=" sitemapBtn font-bold ml-[20px] pl-[30px]  ">You are Here</span>
                    </div>

                </div>



            </section>
            <CounterPage/>
            <Footer/>



        </div>
    )

}


export default Sitemap;

