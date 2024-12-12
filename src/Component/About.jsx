import React from "react";
import Navbar from "./Common/Navbar";
import { Link, NavLink } from "react-router-dom";


const About = () => {


    return (
        <div>
            <Navbar />
            {/* page banner start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src="/About-Us-Coaching-Class-Institute.jpg" />
                    </figure>

                    <div >
                        <div className="wrapper">
                            <div className="absolute top-[50%] transform translate-y-[-50%]">
                                <h1 className="text-[54px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] ">About Us</h1>
                                <div className="mt-[5px] block">
                                    <NavLink to="/" className="hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                    <span className="ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">About Us</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            {/* Page banner End */}

            <section className="pt-[99px] pb-[80px] px-0">
                <div className="wrapper">
                    <div className="flex justify-between">

                        <div className="w-[46%] ">
                            <figure className="">
                                <img className="max-w-[100%] ml-auto" src="/Top-IT-Training-indore-coaching-class.jpg" alt="Top-IT-Training" />
                            </figure>
                            <div className="flex">
                                <div className="py-[25px] px-[25px] rounded-[16px] shadow-aboutEnrollShadow w-[45.3%] mt-[-254px] bg-[#fff] relative">
                                    <figure>
                                        <img className="mx-auto my-0" alt="about-us UI-UX master" src="/about-best-ui-ux-course-in-indore.svg" />
                                    </figure>

                                    <div className="mt-[20px] text-center">
                                        <h6 className="text-[18px] leading-[23px] font-[700] text-[#000] ">UX Master Course</h6>
                                    </div>

                                    <div className="mt-[10px] text-center ">
                                        <h4 className="text-[#b2b2b2] text-[14px] leading-[20px] font-[500] ">Batch starting from</h4>
                                    </div>
                                    <div className="w-[81.2px] h-[66.5px] rounded-tl-[16px] rounded-tr-0 rounded-br-[72px] rounded-bl-0 shadow-aboutEnrollnow bg-[#000] absolute top-0 left-0 text-center flex justify-center pt-[14px] pr-[23.8px] pb-[18.5px] pl-[14.4px] ">
                                        <Link to="/course" className="text-[white] text-[14px] leading-[20px] font-[700] hover:text-[#009ce5] transition-all duration-[0.3s] ease-linear  " >Enroll now</Link>

                                    </div>

                                </div>
                                <div className="w-[54%] pt-[22px] pr-0 pb-0 pl-0 inline-block align-middle">
                                <div className="flex">
                                    <div className="w-[40%] ml-[30px] flex ">
                                        <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%]  transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out">
                                            <Link to="/about-us">
                                                <img src="/It_training_user_profile_3.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                            </Link>

                                        </figure>
                                        <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%] ml-[-21px] transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                            <Link to="/about-us">
                                                <img src="/It_training_user_profile_2.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                            </Link>

                                        </figure>
                                        <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px]  rounded-[50%] ml-[-21px] transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                            <Link to="/about-us">
                                                <img src="/It_training_user_profile_1.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                            </Link>

                                        </figure>
                                        <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%] ml-[-21px]  transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                            <Link to="/about-us">
                                                <img className="" src="/It_training_user_profile_4.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                            </Link>

                                        </figure>
                                    </div>
                                    <div className="w-[42%] ml-[15px] ">
                                        <div>
                                            <h4 className="leading-[24px] text-[14px] font-[500] text-[#000] ">
                                                Over <span className="text-[#1aaef4]">750+ </span>
                                                Students Joined

                                            </h4>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            </div>

                           
                        </div>
                        <div className="w-[48.7%]">

                        </div>


                    </div>

                </div>


            </section>

        </div>
    )

}

export default About;





