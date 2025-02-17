import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import { Link, NavLink } from "react-router-dom";
import { useContactDetails } from "../../Redux/rTKFunction";
import BurgerMenu from "./BurgerMenu";


function Navbar() {
    const [dashboardOpen, setDashboradOpen] = useState(false);

    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data
    console.log("contact data ", contactUsData);
    return (
        <header className="w-[100%] border-b-[1px] border-[white]  max-800:static fixed  bg-[#fff] z-[111]  box-border  shadow-navShadow     ">
            <div className="pt-[17px] pb-[17px]">
                <section className="wrapper  flex justify-between items-center  ">

                    <div className="mt-[6px] w-[24%] max-979:w-[25%]  ">
                        <figure className="w-[100%] h-[83px]">
                            <Link to="/" >
                                <img src="/Navbar/It_training_logo.svg" alt="navbar-image" loading="lazy" className=" hidden min-800:block" />
                                <img src="/c6b98ac1147715cfa6a8f7d49993a1f1653f95a4.webp" alt="navbar-image" className=" h-[65px] w-[65px] object-cover hidden max-800:block" />
                            </Link>
                        </figure>
                    </div>

                    <div className=" hidden min-800:block w-[76%]  mt-[14px]    ">
                        <div className="w-[100%]  p-0 m-0 ">
                            <div className=" w-[100%] flex justify-end items-center text-right mb-[15px] ">
                                <div className="  flex  items-center gap-[5px]   z-10 ">
                                    <a href="https://www.facebook.com/ittrainingindore?ref=hl" target="_blank" className="  text-[18px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[17px]   leading-[40px] rounded-full   relative overflow-hidden hover:text-[#000] text-[#1877F2] flex justify-center items-center socialIcon">
                                        <FontAwesomeIcon icon={faFacebookF} style={{ fontWeight: 400, }} />

                                    </a>
                                    <a href="https://www.linkedin.com/company/it-training-indore" target="_blank" className=" text-[18px] leading-[40px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[17px]   rounded-full relative overflow-hidden hover:text-[#000] text-[#0077B5] flex justify-center items-center socialIcon">
                                        <FontAwesomeIcon icon={faLinkedinIn} style={{ fontWeight: 400, }} />
                                    </a>
                                    <a href="https://www.instagram.com/ittrainingindore/" target="_blank" className=" text-[18px] leading-[40px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[17px]   rounded-full relative overflow-hidden hover:text-[#000] text-[#E1306C] flex justify-center items-center socialIcon">
                                        <FontAwesomeIcon icon={faInstagram} style={{ fontWeight: 400 }} />
                                    </a>
                                    <a href="https://twitter.com/ITIndore" target="_blank" className=" text-[18px] leading-[40px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[17px]   rounded-full relative overflow-hidden  hover:text-[#000] text-[#1DA1F2] flex justify-center items-center socialIcon">
                                        <FontAwesomeIcon icon={faTwitter} style={{ fontWeight: 400 }} />
                                    </a>
                                    <a href="https://www.pinterest.com/ittrainingindor/" target="_blank" className="text-[18px] leading-[40px] h-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] max-1200:leading-[35px] max-1200:text-[17px]  rounded-full relative overflow-hidden hover:text-[#000] text-[#E60023] flex justify-center items-center mr-[6px] socialIcon">
                                        <FontAwesomeIcon icon={faPinterest} style={{ fontWeight: 400 }} />
                                    </a>
                                </div>
                                <div className="flex ">
                                    <div className="flex  text-[14px] leading-[19px] font-[500] header-icon gap-1  mr-[2px]  ">
                                        <span className="mr-[3px]">
                                            <a href={`tel:+91 ${contactUsData?.data?.contactUsNumber}`}  >
                                                <img src="/Navbar/phone-icon.svg" alt="phone-icon" loading="lazy" className="h-[20px] w-[20px] max-1024:h-[30px]  " />
                                            </a>
                                        </span>
                                        <span className="header-call-us">Call Us Now</span>
                                        <a className=" text-[14px] font-[500] leading-[19px] hidden lg:inline-block hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">+91 {contactUsData?.data?.contactUsNumber}</a>
                                    </div>


                                    <div className="flex gap-[9px]  items-center text-[14px] leading-[19px] font-[500] header-icon">
                                        <span className="">
                                            <a href={` mailto: ${contactUsData?.data?.contactUsEmail}`}>
                                                <img src="/Navbar/email-icon.svg" alt="email-icon" loading="lazy" className="h-[20px] w-[20px]  " />
                                            </a>
                                        </span>
                                        <a href={` mailto: ${contactUsData?.data?.contactUsEmail}`} className="text-[14px] font-[500] leading-[19px] hidden lg:inline-block hover:text-[#1aaef4] transition-all delay-75 duration-200 ease-linear">{contactUsData?.data?.contactUsEmail}</a>
                                    </div>

                                </div>
                            </div>

                            <nav className="w-[100%] mt-[7px] max-1200:mt-[5px] flex justify-end ">

                                <ul className="flex w-[100%] justify-end  ">
                                    <li className="   cursor-pointer relative pt-[1px] ml-[67px] max-1200:ml-[37px] max-979:ml-[18px]  ">
                                        <NavLink to="/" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] overflow-hidden navNavigation pt-[1px] pb-0 px-0" style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="  cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[37px]  max-979:ml-[18px]  overflow-hidden "  >
                                        <NavLink to="/courses" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] pt-[1px] pb-0 px-0 " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            Courses
                                        </NavLink>
                                    </li>
                                    <li className="  cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[37px] max-979:ml-[18px]   overflow-hidden" >
                                        <NavLink to="/about-us" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] pt-[1px] pb-0 px-0 " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className=" cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[37px] max-979:ml-[18px]   overflow-hidden " >
                                        <NavLink to="/blogs" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] pt-[1px] pb-0 px-0 " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className="cursor-pointer  pt-[1px]  ml-[67px]  max-1200:ml-[37px] max-979:ml-[18px]   overflow-hidden " >
                                        <NavLink to="/testimonials" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] pt-[1px] pb-0 px-0 " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            Testimonial
                                        </NavLink>
                                    </li>
                                    <li className="  cursor-pointer  pt-[1px]  ml-[67px] max-1200:ml-[37px] max-979:ml-[18px]  overflow-hidden " >
                                        <NavLink to="/contact-us" className="lg:text-[16px] max-979:text-[15px] max-979:leading-[19px]    leading-[21px]  font-[700] pt-[1px] pb-0 px-0 " style={({ isActive }) => isActive ? { color: "#1AAEF4" } : { color: "#000" }}>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/*  for the 800px  */}

                    <div className="hidden max-800:block" >
                        {
                            dashboardOpen ?
                                <div className="relative mr-[13px]">
                                    <button onClick={() => setDashboradOpen(false)} className="text-center pt-[5px] pb-[9px] px-[10px] rounded-[10px] max-590:rounded-[8px] max-649:pt-[4px] max-649:pb-[8px] max-649:px-[8px]  bg-[linear-gradient(283deg,#1AAEF4_0%,#1AAEF4_0.01%,#0096EB_100%)] ">
                                        <span>
                                            <span className="block w-[30px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                            <span className="block w-[20px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                            <span className="block w-[15px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                        </span>
                                    </button>
                                    <ul className=" w-[300px] mt-[27px]  absolute left-[-250px]  z-[111] ">
                                        <li>
                                            <NavLink to="/" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px]  " style={({ isActive }) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" }} >Home</NavLink>

                                        </li>
                                        <li className="border-t-[2px] border-solid border-[#d8effa] ">
                                            <NavLink to="/courses" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px] " style={({ isActive }) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" }}>Courses</NavLink>

                                        </li>
                                        <li className="border-t-[2px] border-solid border-[#d8effa]">
                                            <NavLink to="/about-us" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px] " style={({ isActive }) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" }}>About Us</NavLink>

                                        </li>
                                        <li className="border-t-[2px] border-solid border-[#d8effa]">
                                            <NavLink to="/blogs" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px] " style={({ isActive }) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" }}>Blogs</NavLink>

                                        </li>
                                        <li className="border-t-[2px] border-solid border-[#d8effa]">
                                            <NavLink  to="/testimonials" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px] " style={({ isActive }) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" }}>Testimonials</NavLink>

                                        </li>
                                        <li className="border-t-[2px] border-solid border-[#d8effa]">
                                            <NavLink  to="/contact-us" className="block w-[100%] text-[16px] leading-[20px] bg-[#fff] px-[30px] py-[12px] max-413:py-[9px] max-413:text-[15px] max-413:leading-[20px] " style={({isActive}) => isActive ? { color: "#fff", backgroundColor:"#1AAEF4" } : { color: "#000" } }>Contact Us</NavLink>

                                        </li>

                                    </ul>
                                </div>


                                :

                                <button onClick={() => setDashboradOpen(true)} className="text-center pt-[5px] pb-[9px] px-[10px] rounded-[10px] bg-[linear-gradient(283deg,#1AAEF4_0%,#1AAEF4_0.01%,#0096EB_100%)] ">
                                    <span>
                                        <span className="block w-[15px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                        <span className="block w-[20px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                        <span className="block w-[30px] h-[2px] rounded-[10px] bg-[#fff] mt-[7px] mb-[3px] mr-[0px] ml-auto   " ></span>
                                    </span>
                                </button>


                        }


                    </div>




                </section>
            </div>
        </header>
    )
}

export default Navbar;
