import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import { Link, NavLink } from "react-router-dom";
import { useContactDetails } from "../../Redux/rTKFunction";


function Navbar() {

    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data
    console.log("contact data ", contactUsData);
    return (
        <header className="w-[100%] border-b-[1px] border-[white] fixed  bg-[#fff] z-[111]  box-border  shadow-navShadow overflow-hidden">
            <div className="pt-[17px] pb-[17px]">
                <section className="wrapper  flex justify-between items-center  ">

                    <div className="mt-[6px] w-[24%]  ">
                        <figure className="w-[100%] h-[83px]">
                            <Link to="/" >
                                <img src="/Navbar/It_training_logo.svg" alt="navbar-image" loading="lazy" className=" hidden min-800:block" />
                                <img src="/c6b98ac1147715cfa6a8f7d49993a1f1653f95a4.webp" alt="navbar-image" className=" h-[65px] w-[65px] object-cover hidden max-800:block"  />
                            </Link>

                        </figure>


                    </div>
                    
                    <div className="w-[76%]  mt-[14px] flex flex-col gap-3 ">
                        <div className="w-[100%] p-0 m-0 hidden min-800:block">
                        <div className=" w-[100%] flex justify-end items-center text-right  ">
                            <div className="  flex  items-center gap-[10px]  z-10 ">
                                <a href="https://www.facebook.com/ittrainingindore?ref=hl" target="_blank" className="text-[22px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[22px] rounded-full  z-0 relative overflow-hidden hover:text-[#000] text-[#1877F2] flex justify-center items-center socialIcon">
                                    <FontAwesomeIcon icon={faFacebookF} style={{ fontWeight: 400,  }} />

                                </a>
                                <a href="https://www.linkedin.com/company/it-training-indore" target="_blank" className=" text-[22px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[22px]  rounded-full relative overflow-hidden hover:text-[#000] text-[#0077B5] flex justify-center items-center socialIcon">
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{ fontWeight: 400, }} />
                                </a>
                                <a href="https://www.instagram.com/ittrainingindore/" target="_blank" className=" text-[22px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[22px]  rounded-full relative overflow-hidden hover:text-[#000] text-[#E1306C] flex justify-center items-center socialIcon">
                                    <FontAwesomeIcon icon={faInstagram} style={{ fontWeight: 400 }} />
                                </a>
                                <a href="https://twitter.com/ITIndore" target="_blank" className=" text-[22px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[22px]  rounded-full relative overflow-hidden  hover:text-[#000] text-[#1DA1F2] flex justify-center items-center socialIcon">
                                    <FontAwesomeIcon icon={faTwitter} style={{ fontWeight: 400 }} />
                                </a>
                                <a href="https://www.pinterest.com/ittrainingindor/" target="_blank" className="text-[22px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[22px] rounded-full relative overflow-hidden hover:text-[#000] text-[#E60023] flex justify-center items-center mr-[6px] socialIcon">
                                    <FontAwesomeIcon icon={faPinterest} style={{ fontWeight: 400 }} />
                                </a></div>
                            <div className="flex ">
                                <div className="flex  text-[14px] leading-[19px] font-[500] header-icon gap-1  mr-1  ">
                                    <span className="mr-[6px]">
                                        <img src="/Navbar/phone-icon.svg" alt="phone-icon" loading="lazy" className="h-[24px] w-[24px] " />
                                    </span>
                                    <span className="header-call-us">Call Us Now</span>
                                    <a href={`tel:+91 ${contactUsData?.data?.contactUsNumber}`} className="text-[15px] leading-[24px] hidden lg:inline-block hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">+91 {contactUsData?.data?.contactUsNumber}</a>
                                </div>


                                <div className="flex gap-[9px]  items-center text-[14px] leading-[19px] font-[500] header-icon">
                                    <span className="">
                                        <img src="/Navbar/email-icon.svg" alt="email-icon" loading="lazy" className="h-[24px] w-[24px] "/>
                                    </span>
                                    <a href={` mailto:${contactUsData?.data?.contactUsEmail}`} className="text-[15px] leading-[24px] hidden lg:inline-block hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">{contactUsData?.data?.contactUsEmail}</a>

                                </div>

                            </div>
                        </div>

                        <nav className="w-[100%] mt-[7px] max-1200:mt-[5px] flex justify-end ">

                            <ul className="flex w-[100%] justify-end  ">
                                <li className="   cursor-pointer relative pt-[1px] ml-[67px] max-1200:ml-[0px] ">
                                    <NavLink to="/" className="text-[18px]   leading-[21px]  font-[700] overflow-hidden navNavigation" style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="  cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[50px] overflow-hidden "  >
                                    <NavLink to="/courses" className="text-[18px]   leading-[21px]  font-[700] " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        Courses
                                    </NavLink>
                                </li>
                                <li className="  cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[50px] overflow-hidden" >
                                    <NavLink to="/about-us"  className="text-[18px]   leading-[21px]  font-[700] " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className=" cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[50px] overflow-hidden " >
                                    <NavLink to="/blogs"  className="text-[18px]   leading-[21px]  font-[700] " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[50px] overflow-hidden " >
                                    <NavLink to="/testimonials"  className="text-[18px]   leading-[21px]  font-[700] " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        Testimonial
                                    </NavLink>
                                </li>
                                <li className="  cursor-pointer  pt-[1px]  ml-[67px] max-1200:ml-[50px] overflow-hidden " >
                                    <NavLink to="/contact-us"  className="text-[18px]   leading-[21px]  font-[700] " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        </div>
                        <div className="hidden max-800:block " >
                            <ul id="menu" className="pt-[5px] pb-[9px] px-[10px] rounded-[10px] bg-[#1AAEF4] " >


                            </ul>
                        </div>
                    </div>
                    

                </section>
            </div>
        </header>
    )
}

export default Navbar;
