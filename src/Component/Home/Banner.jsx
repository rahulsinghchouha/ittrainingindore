import Search from "antd/es/transfer/search";
import { Field, Formik,Form } from "formik";
import React from "react";
import { CiSearch } from "react-icons/ci";


function Banner() {
    const handleSearch = () => {

    }


    return (
        <section className="home-banner-wr">
            <div className="wrapper">
                <div className="box-border flex justify-between ">
                    <div className="w-[47.5%] pt-[16px] pl-0 pr-0 pb-0">
                        <div>
                            <h4 className="get-course-now text-[14px] leading-[20px] text-[#1aaef4] font-[400] pr-[70px] inline-block">GET COURSE NOW</h4>
                        </div>
                        <div className="mt-[28px] ">
                            <h1 className=" text-[2.6em] leading-[1.3em] block font-[800] text-[#000000] ">
                                Unlock
                                <span className="text-[#1aaef4]"> Your Potential </span>
                                Choose the Best
                                <span className="text-[#1aaef4]"> Software Training </span>
                                Institute in Indore

                            </h1>


                        </div>
                        <div className="mt-[32px] box-border">
                            <p className="text-[16px] leading-[34px] font-[400] tracking-normal">
                                Welcome to IT Training Indore, your premier destination for comprehensive IT training and placements in Indore.
                            </p>
                        </div>
                        {/* banner search form */}
                        <div className="w-[100%] mt-[16px] ">
                            <Formik
                                initialValues={{ query: "" }}
                                onSubmit={(values) => handleSearch(values)}

                            >
                                {() => (
                                    <form className="w-[98%] flex ">
                                        <input type="text" name="query" placeholder="Search Course" className="bg-[#ffffff] py-[17px]  px-[30px] w-[83%] rounded-tl-[27px] rounded-r-[0px] rounded-b-[0px] rounded-l-[27px] search-shadow focus:outline-none" />
                                        <button className="  bg-[#1aaef4] w-[17%] rounded-r-full items-center cursor-pointer "> 
                                                   <input  className="search-submit ml-8 focus:outline-none cursor-pointer " />
                                        </button>

                                    </form>

                                )}
                            </Formik>

                        </div>
                        {/* popular searches course link */}
                        <div className="mt-[25px]">
                            <div className="inline-block">
                                <span className="text-[16px] leading-[21px] text-[#000000] font-[600] ">Popular Searches</span>

                            </div>
                            <div className="ml-[10px] inline-block cursor-pointer">
                                <a href="" className="py-[9px] px-[15px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Web Development</a>
                                <a href="" className="py-[9px] px-[15px] ml-[5px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Graphic Design</a>
                                <a href="" className="py-[9px] px-[15px] ml-[5px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Animation</a>
                            </div>
                        </div>

                        {/* banner course link */}
                            <div className="mt-[60px] box-border flex">
                                <div className="w-[32.8%] pl-[20px] border-r-[1px] border-solid border-[#e0e0e0]">
                                    <img  src="/Home/web_development_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] "/>
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] focus:outline-none">Development</a>


                                </div>
                                <div className="w-[32.8%] pl-[20px] border-r-[1px] border-solid border-[#e0e0e0]">
                                    <img  src="/Home/graphic_design_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] "/>
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] focus:outline-none">Designing</a>


                                </div>
                                <div className="w-[32.8%] pl-[20px]  border-solid border-[#e0e0e0] pr-0 box-border">
                                    <img  src="/Home/digital_marketing_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] "/>
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] whitespace-nowrap focus:outline-none">Digital Marketi</a>


                                </div>

                            </div>




                    </div>







                    {/* second div */}
                    <div className="banner-images w-[39%] mt-[-52px] max-h-[687px] relative float-right box-border">
                        <figure className="relative">
                            <img src="/Home/Best_IT_Training_Indore_Student.png" alt="best software training institute in indore "/>
                        </figure>


                    </div>


                </div>


            </div>



        </section>
    )


}

export default Banner;


