import React from "react";
import Navbar from "./Common/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { FaRegClock } from "react-icons/fa6";

const Blog = () =>{
    const { ref: mainPageHead, inView: isMainPageHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });


return (
    <div>
        <Navbar/>

           {/* page banner start */}
           <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" w-[100%] z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src="/Top_IT_Training_Indore_Blogs_2.jpg" />
                    </figure>

                    <div >
                        <div className="wrapper">
                            <div className="absolute top-[50%] transform translate-y-[-50%]">
                                <h1 
                                ref={mainPageHead}
                                className={` ${isMainPageHead && "animate__fadeIn"} text-[54px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] `}
                                style={{
                                    animationDuration: "3s",
                                }}
                                >Blogs</h1>
                                <div className="mt-[5px] block">
                                    <NavLink to="/" className="hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                    <span className="ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">Blogs</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            {/* Page banner End */}

            {/* Page Blog Section start */}
            <section className="pt-[80px] pb-[62px] ">
                <div className="wrapper">
                    <div className="flex justify-between">
                    <div className="w-[66%] "> 
                        <div className="w-[47.7%] mt-0 mb-[38px] ml-0 mr-[4.4%] hover:translate-y-[-10px] duration-300 ease-out ">
                            <div className="min-h-[282px] ">
                                <figure>
                                    <img src="/IT-Courses-after-12th.jpg" className="w-[100%] rounded-t-[23px] rounded-b-none " alt="IT Courses after 12th"/>
                                </figure>

                            </div>
                            <div className="shadow-blogCardShado bg-[#fff] pt-[23px] pb-[30px] px-[23px] rounded-b-[23px] rounded-t-none">
                                <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500] flex items-center">
                                    <span><FaRegClock style={{fontSize:'17px'}}/></span> <span className="ml-[7px]"> August, 2024</span> 
                                  
                                </h4>
                                <div className="mt-[14px]">
                                    <h6 className="leading-[28px] min-h-[48px] ">
                                        <Link to="" className="hover:text-[#009ce5] transition-all duration-200 ease-out">Top IT Courses after 12th for Successful Career in 2025</Link>

                                    </h6>

                                </div>
                                <div className="mt-[12px] flex items-center ">
                                    <div>
                                        <figure>
                                            <img className="w-[54px] rounded-[50%] border-[5px] border-solid border-[#fff] shadow-blogCarditShado " src="/Favicon-150x150.png"/>
                                        </figure>
                                    </div>
                                    <div className="ml-[15px]">
                                        <h4 className="text-[16px] leading-[21px] text-[#b0b0b0] font-[600] hover:text-[#009ce5] cursor-pointer transition-all duration-200 ease-out">IT Training Indore</h4>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="w-[33%]">

                    </div>
                    </div>
                    
                </div>


            </section>

            




    </div>
)

}

export default Blog;