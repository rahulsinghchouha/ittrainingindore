import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContactDetails } from "../../Redux/rTKFunction";


function Navbar() {

    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data
    console.log("contact data ",contactUsData);
    return (
        <header className="w-[100%] border-b-[1px] border-[white] fixed  bg-[#fff] z-[111]  box-border  shadow-navShadow overflow-hidden">
            <section className="wrapper  flex justify-between items-center  pt-[10px] pb-[19px]">

                <div className="mt-[6px] w-[24%] float-left">
                    <figure className="w-[307px] h-[83px]">
                        <img src="/Navbar/It_training_logo.svg" alt="navbar-image" loading="lazy" />
                    </figure>


                </div>
               
                <div className="  mt-[14px] flex flex-col gap-3 text-right float-right ">
                    <div className=" w-[100%] flex justify-end items-center text-right  ">
                        <div className="  flex  items-center gap-[3px] z-10 ">
                            <a href="https://www.facebook.com/ittrainingindore?ref=hl" target="_blank"  className="h-[40px] w-[40px] rounded-full  z-0 relative overflow-hidden hover:text-[#000] text-[#1877F2] flex justify-center items-center socialIcon">
                            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "19px", fontWeight:400,  }} />

                            </a>
                            <a href="https://www.linkedin.com/company/it-training-indore" target="_blank" className="h-[40px] w-[40px] rounded-full relative overflow-hidden hover:text-[#000] text-[#0077B5] flex justify-center items-center socialIcon">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "19px", fontWeight:400  }} />
                            </a>
                            <a  href="https://www.instagram.com/ittrainingindore/" target="_blank" className="h-[40px] w-[40px] rounded-full relative overflow-hidden hover:text-[#000] text-[#E1306C] flex justify-center items-center socialIcon">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "19px", fontWeight:400  }} />
                            </a>
                            <a href="https://twitter.com/ITIndore" target="_blank" className="h-[40px] w-[40px] rounded-full relative overflow-hidden  hover:text-[#000] text-[#1DA1F2] flex justify-center items-center socialIcon">
                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "19px",  fontWeight:400  }} />

                            </a>
                            <a href="https://www.pinterest.com/ittrainingindor/" target="_blank" className="h-[40px] w-[40px] rounded-full relative overflow-hidden hover:text-[#000] text-[#E60023] flex justify-center items-center mr-[6px] socialIcon">
                            <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "19px", fontWeight:400  }} />
                            </a></div>
                        <div className="flex ">
                          
                           
                            <div className="flex  text-[14px] leading-[19px] font-[500] header-icon gap-1 mr-1">
                                <span className="mr-[6px]"> 
                                    <img src="/Navbar/phone-icon.svg" alt="phone-icon" loading="lazy" className="h-[20px] w-[20px] " />
                                </span>
                                <span className="header-call-us">Call Us Now</span>
                                <a href={`tel:+91 ${contactUsData?.data?.contactUsNumber}`} className="text-[14px] hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">+91 {contactUsData?.data?.contactUsNumber}</a>
                            </div>
                           
                           
                            <div className="flex gap-[9px] items-center text-[14px] leading-[19px] font-[500] header-icon">
                                <span className="">
                                    <img src="/Navbar/email-icon.svg" alt="email-icon" loading="lazy" />
                                </span>
                                <a href={` mailto:${contactUsData?.data?.contactUsEmail}`} className="text-[14px] hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">{contactUsData?.data?.contactUsEmail}</a>

                            </div>

                        </div>
                    </div>

                    <nav className="mt-[7px]">
                       
                            <ul className="flex  ">
                                <li className=" text-[16px]   leading-[21px] relative font-[700] pt-[1px] ml-[67px] ">
                                    <NavLink to="/" className=" cursor-pointer overflow-hidden navNavigation" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }> 
                                        Home
                                    </NavLink>
                                </li>
                                <li className=" text-[16px] cursor-pointer leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden "  > 
                                    <NavLink to="/course" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }>
                                        Courses
                                    </NavLink>
                                </li>
                                <li className=" text-[16px] cursor-pointer leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden" >
                                    <NavLink to="/about-us" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className=" text-[16px] cursor-pointer leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden " >
                                    <NavLink to="/blog" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }>
                                        Blog
                                    </NavLink>
                                </li>
                                <li className=" text-[16px] cursor-pointer leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden " >
                                    <NavLink to="/testimonials" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }>
                                        Testimonial
                                    </NavLink>
                                </li>
                                <li className=" text-[16px]  cursor-pointer leading-[21px] font-[700] pt-[1px]  ml-[67px] overflow-hidden " >
                                    <NavLink to="/contact-us" style={({isActive})=>isActive ? {color:"#1AAEF4"} :{ color:"#000"} }>
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>                  
                    </nav>
                </div>
            </section>

        </header>
    )



}

export default Navbar;
