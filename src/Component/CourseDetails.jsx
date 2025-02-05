import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Common/Navbar";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ittrainingDataSerivice } from "../Services/dataService";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { fetchCards } from "../Redux/functionsSlics";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CounterPage from "../Component/Common/CounterPage";
import Footer from "./Common/Footer";
import ConvertAnchorToLink from "./Common/ConvertAnchorToLink";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import NotFoundResponse from "./Common/NotFoundResponse";
const { Panel } = Collapse;


const CourseDetails = () => {

    const [course, setCourse] = useState(null);
    const [bannerImg, setBannerImg] = useState(null);

    const dispatch = useDispatch();

    const location = useLocation();


    let {courseName} = useParams();
    courseName = courseName?.split("-").join(" ");
   
    const courseDetails = location?.state;
    useMemo(() => { if (courseDetails) setCourse(courseDetails) }, [courseDetails]);

    const allCourse = useSelector((state) => state.backendFunction.webCard);

    const courseQueryParam = useMemo(() => {
        if (courseName && !courseDetails) {
            return allCourse?.find(course => course?.courseName?.toLowerCase().includes(courseName?.toLowerCase()));
        }
    }, [allCourse, courseName])

    useMemo(() => { if (courseQueryParam) setCourse(courseQueryParam) }, [courseQueryParam]);


    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    async function banner() {
        try {
            const response = await ittrainingDataSerivice.getCourseDetailsBanner();
            if (response.status === 200)
                setBannerImg(response.data.data);

        }
        catch (error) {
            console.log("error to get course details banner", error);
        }
    }
    useEffect(() => {
        banner();
    }, []);

    const relatedCourses = useMemo(() =>
        allCourse?.filter(related => related.category === course?.category),
        [allCourse, course?.category]
    );
    const { ref: mainPageHead, inView: isMainPageHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (

        <div>
            {
                course ? (<div>
                    <Navbar />
                    <section className="m-0 pt-[125px]">
                        <div className="relative">
                            <figure className=" z-[-1] h-[372.66px]  relative mainImageAfter">
                                <img className="w-[100%] h-[100%] object-cover" src={`${ittrainingDataSerivice?.backendUrl}/${bannerImg?.img}`} />
                            </figure>

                            <div >
                                <div className="wrapper">
                                    <div className="absolute top-[50%] transform translate-y-[-50%]">
                                        <h1 className={`  ${isMainPageHead && "animate__fadeIn"} text-[54px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] `}
                                            ref={mainPageHead}
                                            style={{
                                                animationDuration: "3s",
                                            }}
                                        >Course</h1>
                                        <div className="mt-[5px] block">
                                            <NavLink to="/" className="hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                            <NavLink to="/courses" className="ml-[15px] pl-[17px] hover:text-[#009ce5]  text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">Courses</NavLink>
                                            <span className="ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">{course?.courseName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* course details section start */}
                    <section className="pt-[83px] pb-[36px] px-0 " >
                        <div className="wrapper flex">
                            <div className="w-[66%]">
                                <div>
                                    <Link className="text-[16px] leading-[19px] font-[700] text-[#fff] py-[7px] px-[22px] rounded-[5px] shadow-courseDetailsCatShad bg-[#1AAEF4] ">{course?.category}</Link>
                                </div>
                                <div className="mt-[29px] ">
                                    <h2 className="text-[36px] leading-[52px] tracking-[0.72px] font-[800] text-[#000]">{course?.courseName}</h2>

                                </div>
                                <div className="mt-[68px] ">
                                    <figure className="m-0  w-[868px] h-[451px]" >
                                        <img src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} alt="Best Web API Development Training Course indore" className="w-[100%] h-[100%] object-cover block" />

                                    </figure>

                                </div>
                                <div className="mt-[40px]">
                                    <a href="#description" style={{ backgroundImage: `url('/course-description.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '15%', backgroundPositionY: 'center' }} className="text-[14px]  text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Description</a>
                                    <a href="#faqs" style={{ backgroundImage: `url('/course-faq.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '20%', backgroundPositionY: 'center' }} className="text-[14px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">FAQ's</a>
                                    <a href="#related-courses" style={{ backgroundImage: `url('/related-course.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '10%', backgroundPositionY: 'center' }} className="text-[14px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Related Courses</a>

                                </div>
                                <div className="mt-[80px] ">
                                    <h3>Overview</h3> 
                                    <div className="mt-[26px] listBgImage hoverBlue ">
                                        <p id="description">

                                            {
                                                ConvertAnchorToLink(String(course?.overview))
                                            }

                                        </p>

                                    </div>

                                </div>
                                <div className="mt-[50px]">
                                    <div>
                                        <h4>Key Areas We Are Covering in the {course?.courseName} Course in Indore</h4>
                                    </div>

                                    <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                                        <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
                                            {
                                                course?.keyAreas?.map((keyArea, index) =>
                                                    <Panel header={keyArea.heading} key={index} >
                                                        <p>{keyArea.details}</p>

                                                    </Panel>
                                                )
                                            }
                                        </Collapse>
                                    </div>

                                </div>

                                <div className="mt-[55px]   pt-[25px] pb-[89px] px-0">
                                    <div>
                                        <h3 className="mb-[16px]">Tools to hands-on</h3>
                                        <ul className="flex flex-wrap gap-[23px]">
                                            {
                                                course?.toolsInHand?.map((tools, index) => <li key={index} className=" toolsInHand font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {tools}
                                                </li>)
                                            }
                                        </ul>
                                    </div>

                                </div>
                                <div className="mt-[10px]  pt-[25px] listBgImage hoverBlue pb-[89px] px-0" >

                                    {
                                        ConvertAnchorToLink(String(course?.benefits))
                                    }
                                </div>
                                <div>
                                    <h3>Course Curriculum</h3>
                                </div>
                                {/* course curricullum pending */}
                                <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                                    <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
                                        {
                                            course?.courseCurriculum?.map((curriculumn, index) =>
                                                <Panel header={curriculumn.heading} key={index} className="" >

                                                    {curriculumn?.details?.map((detail, index) => <p key={index} className=" leading-[34px] pl-[20px] relative mb-[9px] curriculumDetails">{detail}</p>)}

                                                </Panel>
                                            )
                                        }
                                    </Collapse>

                                </div>
                                <div className="mt-[55px] pt-[25px] pb-[89px] border-b-[2px] border-solid border-[#0003]">
                                    <div>
                                        <h3 className="mb-[16px] ">Key Highlights</h3>
                                        <ul className="flex flex-wrap gap-[23px]">
                                            {
                                                course?.keyHighLights?.map((key, index) => <li key={index} className=" keyHighlight font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {key}
                                                </li>)
                                            }
                                        </ul>


                                        <div className="listBgImage hoverBlue">
                                            {ConvertAnchorToLink(String(course?.benefits))}
                                        </div>

                                        <h3 className="mt-[50px] mb-[25px] text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">What Job Roles Offer With {course?.courseName} Training in Indore
                                        </h3>
                                        <ul className="flex flex-wrap gap-[23px]">
                                            {
                                                course?.jobRoles?.map((key, index) => <li key={index} className=" keyHighlight font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {key}
                                                </li>)
                                            }
                                        </ul>
                                    </div>

                                </div>


                                <div className="pt-[84px] ">
                                    <div>
                                        <h3 className="font-[800] " id="faqs">FAQ’s</h3>
                                    </div>
                                    <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                                        <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
                                            {
                                                course?.fAQ?.map((faqs, index) =>
                                                    <Panel header={faqs.heading} key={index} >
                                                        <p>{faqs.details}</p>

                                                    </Panel>
                                                )
                                            }
                                        </Collapse>

                                    </div>
                                </div>

                            </div>
                            <div className="w-[34%]  ">
                                <div className=" px-[30px] pt-[30px] pb-[36px] rounded-[30px] w-[76%] ml-auto bg-[#fff] shadow-courseDetailsRightFormShad">
                                    <div>
                                        <figure className="m-0">
                                            <img className="max-w-[100%]" src="/designers-using-gadgets.jpg" />
                                        </figure>
                                    </div>
                                    <div>
                                        <div className="mt-[20px] mb-[15px] w-[100%] flex justify-center items-center">
                                            <a href="tel:+91 8269600400" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out text-[16px] leading-[19px] font-[500] text-center" >+91 8269600400</a>
                                        </div>
                                        <div className="mb-[15px] flex justify-center items-center ">
                                            <a href="mailto:info@ittrainingindore.in" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out text-[16px] leading-[19px] font-[500] text-center" >info@ittrainingindore.in	</a>

                                        </div>
                                    </div>
                                    <div className="mt-[27px]">
                                        <h4>Get Course Enquiry</h4>

                                        <div className="w-[100%] mt-[25px] ">
                                            <form>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-user-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input className="py-[10px] px-[5px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Name" type="text" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-email-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input className="py-[10px] px-[5px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Email" type="email" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-call-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input className="py-[10px] px-[5px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Phone" type="tel:" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-course-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input className="py-[10px] px-[5px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Message" type="text" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="mt-[27px] flex justify-center items-center">
                                                    <p className="leading-[21px] font-[400] text-[16px] ">
                                                        <button type="submit" className=" w-[100%] cursor-pointer pt-[9px] pb-[9px] pl-[90px] pr-[90px]
                                                         text-[16px] leading-[21px] inputGradient hover:bg-[#1aeef4] font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none  transition duration-500 ease-linear hover:bg-[linear-gradient(180deg,_#1AAEF4_100%,_#1AAEF4_0%,_#0096EB_0.1%)]">

                                                            Send Form
                                                        </button>

                                                    </p>
                                                </div>
                                            </form>


                                        </div>

                                    </div>
                                    <div className="mt-[30px] ">
                                        <div className="mb-[15px] flex justify-center items-center gap-5">
                                            <div className="flex">
                                                <a href="/" className="h-[40px] w-[40px] rounded-full  z-0 relative overflow-hidden hover:text-[#000] text-[#1877F2] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "19px", fontWeight: 400, }} />

                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] rounded-full  z-0  relative overflow-hidden hover:text-[#000] text-[#0077B5] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "19px", fontWeight: 400 }} />
                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] rounded-full  z-0  relative overflow-hidden hover:text-[#000] text-[#E1306C] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "19px", fontWeight: 400 }} />
                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] rounded-full relative  z-0  overflow-hidden  hover:text-[#000] text-[#1DA1F2] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "19px", fontWeight: 400 }} />

                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] rounded-full relative  z-0  overflow-hidden hover:text-[#000] text-[#E60023] flex justify-center items-center mr-[6px] socialIcon">
                                                    <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "19px", fontWeight: 400 }} />
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>


                    </section>

                    {/* course details section end */}

                    {/* related course section start */}

                    <section className="py-[50px] px-0">
                        <div className="wrapper">
                            <div>
                                <div>
                                    <h3 id="related-courses">Related Courses</h3>
                                </div>
                                <div className="mt-[58px] flex flex-wrap w-[100%] pt-[10px] pb-[20px] bg-[#fff] justify-center items-center  ">
                                    <Swiper
                                        modules={[Autoplay]}
                                        loop={relatedCourses.length > 4}
                                        slidesPerView={Math.min(4, relatedCourses.length)} // Show up to 4 slides but adapt to fewer
                                        autoplay={
                                            {
                                                delay: 1000,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true
                                            }
                                        }
                                        speed={2000}
                                    >
                                        {
                                            relatedCourses.map((related, index) => (
                                                <SwiperSlide key={index} className="w-[100%] h-auto hover:translate-y-[-10px] z-[5] pt-[40px] transition-all duration-800 ease-linear">
                                                    <div className={`  rounded-[18px] mr-[10%]  shadow-reletedCardShad flex-shrink-0`}  >
                                                        <div className="w-[100%]">
                                                            <figure className="w-[100%] ">
                                                                <img src={`${ittrainingDataSerivice.backendUrl}/${related.img}`} className="w-[297px] h-[198px] object-cover rounded-tr-[18px] rounded-tl-[18px] block" />
                                                            </figure>
                                                        </div>
                                                        <div className="pt-0 pl-[25px] pr-[25px] pb-[25px] w-[100%] ">
                                                            <div className="mt-[20px] w-[100%]">
                                                                <h6>{related.courseName}</h6>
                                                            </div>
                                                            <div className="pt-[21px] w-[100%]">

                                                                <button className="transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </SwiperSlide>
                                            )
                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CounterPage />
                    <Footer />
                </div>) : (<NotFoundResponse/>)
            }
        </div>
    )
}
export default CourseDetails;




