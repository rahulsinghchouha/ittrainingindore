import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";



function Navbar() {

    return (
        <div className="w-100vw h-[124px]   box-border ">
            <section className="wrapper  flex justify-between items-center  pt-[10px] pb-[14px]">

                <div className="mt-[6px] w-[24%] float-left">
                    <figure className="w-[307px] h-[83px]">
                        <img src="/Navbar/It_training_logo.svg" alt="navbar-image" loading="lazy" />
                    </figure>


                </div>
               
                <div className="  mt-[14px] flex flex-col gap-3 text-right float-right ">
                    <div className=" w-[100%] flex justify-end items-center text-right  ">
                        <div className="  flex  items-center gap-[3px] z-10 ">
                            <a href="" className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "19px", color: "#1877F2",fontWeight:400 }} />

                            </a>
                            <a href="" className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "19px", color: "#0077B5",fontWeight:400  }} />
                            </a>
                            <a className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "19px", color: "#E1306C",fontWeight:400  }} />
                            </a>
                            <a className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "19px", color: "#1DA1F2", fontWeight:400  }} />

                            </a>
                            <a className="h-[40px] w-[40px] rounded-full flex justify-center items-center mr-[6px]">
                            <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "19px", color: "#E60023",fontWeight:400  }} />
                            </a></div>
                        <div className="flex ">
                          
                           
                            <div className="flex  text-[14px] leading-[19px] font-[500] header-icon gap-1 mr-1">
                                <span className="mr-[6px]"> 
                                    <img src="/Navbar/phone-icon.svg" alt="phone-icon" loading="lazy" className="h-[20px] w-[20px] " />
                                </span>
                                <span className="header-call-us">Call Us Now</span>
                                <a href="tel:+91 8269600400" className="text-[14px]">+91 8269600400</a>
                            </div>
                           
                           
                            <div className="flex gap-[9px] items-center text-[14px] leading-[19px] font-[500] header-icon">
                                <span className="">
                                    <img src="/Navbar/email-icon.svg" alt="email-icon" loading="lazy" />
                                </span>
                                <a href="mailto:info@ittrainingindore.in">info@ittrainingindore.in</a>

                            </div>

                        </div>
                    </div>

                    <nav className="mt-[7px]">
                       
                            <ul className="flex  ">
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px] ml-[67px] overflow-hidden">
                                    <a>
                                        Home
                                    </a>
                                </li>
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden ">
                                    <a>
                                        Courses
                                    </a>
                                </li>
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden">
                                    <a>
                                        About Us
                                    </a>
                                </li>
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden ">
                                    <a>
                                        Blog
                                    </a>
                                </li>
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden ">
                                    <a>
                                        Testimonial
                                    </a>
                                </li>
                                <li className="text-[#000000] text-[16px] leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden ">
                                    <a>
                                        Contact Us
                                    </a>
                                </li>


                            </ul>
                     

                    </nav>

                </div>
                


            </section>

        </div>
    )



}

export default Navbar;
