import React from "react";
import Navbar from "./Common/Navbar";

import { MdOutlineFormatQuote } from "react-icons/md";

import PageBanner from "./Common/PageBanner";

const Testimonial = () => {
    

    return (
        <div>
            <Navbar />
         
            <PageBanner heading={"Testimonials"} img={"/Testimonials (1).jpg"}/>
          

            <section className="px-0 pt-[124px] pb-[48px] bg-[#f3fbff]">
                <div className="wrapper">
                    <div className="relative h-[2269px] ">
                        <div className="rounded-[21px] shadow-testimonialCardShad w-[31.5%] mb-[70px] bg-[#fff] relative special-card">
                            <figure className="w-[86px] h-[86px] rounded-[50%] bg-[#fff7db] absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 ">
                                <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">

                                    <MdOutlineFormatQuote style={{ height: "70px", width: "36px", color: '#F9C40A' }} />
                                </span>
                            </figure>

                            <div className=" overflow-hidden pt-[65px] pb-[38px] px-0 rounded-[21px] relative">
                                <div className="pt-[13px] pb-[16px] text-center">
                                    <h6>Mohit Singh</h6>
                                    <div className="w-[22%] h-[1px] bg-[#f9c40a] mx-auto mt-[16px] hover:opacity-0"></div>
                                </div>

                                <div className=" text-center hover:translate-y-[-60px] hover:z-[-10] hover:opacity-0  transition-all delay-0 ease-linear duration-800">
                                    <div className="py-[10px] pl-[32px] pr-[30.6px] bg-[#fff7db] inline-block mt-[5px] mx-auto ">
                                        <p className="text-[14px] leading-[20px] font-[500] text-[#daaa00] ">
                                            Web Developer
                                        </p>
                                    </div>
                                    <div className="mt-[35px] ">
                                        <figure className="bg-[#fff7db] w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                            <img className="rounded-[50%]" src="/Home/Mohit.jpg" />
                                        </figure>
                                    </div>
                                </div>

                                <div className="opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px] hover:z-[10]  hover:opacity-[1] text-center ">
                                    <div>
                                        <p>
                                            IT Training Indore is an excellent place to become trained and professional in your career life. The placement process is also very good. I highly recommend this institute for a good career in the IT field. One area for improvement could be more personalised attention from mentors, particularly during the more challenging portions of the course.
                                        </p>
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

export default Testimonial;



