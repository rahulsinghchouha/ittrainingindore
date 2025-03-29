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


    let { courseName } = useParams();
    courseName = courseName?.split("-").join(" ");


    const courseDetails = location?.state;

    useEffect(() => {
         if (courseDetails)
             setCourse(courseDetails)
     }, [courseDetails]);

    const allCourse = useSelector((state) => state.backendFunction.webCard);

    const courseQueryParam = useMemo(() => {
        if (courseName && !courseDetails) {
            setCourse(null);
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
        allCourse?.filter(related => related.category === courseName),
        [allCourse, courseName]
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
                    <section className="m-0 pt-[125px] max-800:pt-0">
                        <div className="relative">
                            <figure className=" z-[-1]  relative mainImageAfter">
                                <img className="h-[100%] w-[100%] max-649:h-[160px] max-649:object-cover" src={`${ittrainingDataSerivice?.backendUrl}/${bannerImg?.img}`} />
                            </figure>

                            <div >
                                <div className="wrapper">
                                    <div className="absolute top-[50%] transform translate-y-[-50%]">
                                        <h1 className={`  ${isMainPageHead && "animate__fadeIn"}  text-[54px] max-1321:text-[48px] max-1321:leading-[54px] max-1200:text-[44px] max-1200:leading-[56px] max-1024:text-[40px] max-1024:leading-[51px] max-979:text-[45px] max-979:leading-[55px] max-767:text-[38px] max-767:leading-[48px] max-567:text-[30px] max-567:leading-[40px] max-413:text-[25px] max-413:leading-[35px] max-374:text-[22px] max-374:leading-[28px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] `}
                                            ref={mainPageHead}
                                            style={{
                                                animationDuration: "3s",
                                            }}
                                        >Course</h1>
                                        <div className="mt-[5px] block">
                                            <NavLink to="/" className=" max-413:text-[15px] max-413:leading-[20px]  hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                            <NavLink to="/courses" className="max-413:text-[15px] max-413:leading-[20px] ml-[15px] pl-[17px] hover:text-[#009ce5]  text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">Courses</NavLink>
                                            <span className="max-413:text-[15px] max-413:leading-[20px] ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">{course?.courseName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* course details section start */}
                    <section className="max-767:pt-[50px]  pt-[83px] pb-[36px] px-0 " >
                        <div className=" wrapper flex max-979:flex-col">
                            <div className="w-[66%] max-979:w-[90%] max-979:mx-auto">
                                <div>
                                    <Link to={`/course-category/${course?.category?.replace(/\s|\/+/g, '-')}`} className="text-[14px] leading-[19px] font-[700] text-[#fff] py-[7px] px-[22px] rounded-[5px] shadow-courseDetailsCatShad bg-[#1AAEF4] ">{course?.category}</Link>
                                </div>
                                <div className="mt-[29px] ">
                                    <h2 className="max-413:text-[22px] max-413:leading-[32px] max-649:leading-[46px] max-649:text-[28px] max-567:text-[26px] max-567:leading-[36px] max-1200:leading-[48px] max-1200:text-[30px]  max-1321:text-[32px] max-1321:leading-[49px]   text-[36px] leading-[52px] tracking-[0.72px] font-[800] text-[#000]">{course?.courseName}</h2>

                                </div>
                                <div className="mt-[68px] max-767:mt-[25px] ">
                                    <figure className="m-0 " >
                                        <img src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} alt="Best Web API Development Training Course indore" className="w-[100%] h-[100%] object-cover block" />

                                    </figure>

                                </div>
                                <div className="mt-[40px] flex flex-wrap">
                                    <a href="#description" style={{ backgroundImage: `url('/course-description.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '15%', backgroundPositionY: 'center' }} className="max-374:pr-[10px] max-374:pl-[40px] max-374:py-[8px] max-649:py-[11px] max-649:pr-[20px]  text-[14px]  text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Description</a>
                                    <a href="#faqs" style={{ backgroundImage: `url('/course-faq.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '20%', backgroundPositionY: 'center' }} className="max-374:pr-[16px] max-374:pl-[40px] max-567:mr-[15px] max-374:py-[8px] text-[14px] max-649:py-[11px] max-649:pr-[27px] max-649:pl-[40px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">FAQ's</a>
                                    <a href="#related-courses" style={{ backgroundImage: `url('/related-course.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '10%', backgroundPositionY: 'center' }} className="max-567:ml-0 text-[14px] max-567:mt-[10px] max-374:py-[8px] max-649:pr-[20px] max-649:pl-[48px]  max-649:py-[11px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Related Courses</a>
                                </div>
                                <div className="mt-[80px] max-767:mt-[45px] ">
                                    <h3 className="" id="description">Overview</h3>
                                    <div className="mt-[26px] listBgImage hoverBlue courseOverViewPara ">
                                        <p>
                                            {
                                                ConvertAnchorToLink(String(course?.overview))
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-[50px]">
                                    <div>
                                        <h4 className="max-1321:text-[22px]  max-1321:leading-[31px] " >Key Areas We Are Covering in the {course?.courseName} Course in Indore</h4>
                                    </div>

                                    <div className="keyAreaWeAreRes max-567:px-0 mt-[42px] max-979:px-[20px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
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

                                <div className="mt-[55px] max-767:pb-[50px] max-767:mt-[20px]  pt-[25px] pb-[89px] px-0">
                                    <div>
                                        <h3 className="mb-[16px]">Tools to hands-on</h3>
                                        <ul className="flex flex-wrap gap-[23px] max-1321:gap-[20px] toolsresponsive">
                                            {
                                                course?.toolsInHand?.map((tools, index) => <li key={index} className=" max-567:w-[100%]  max-767:w-[47%] max-1321:mt-[5px] max-1200:mt-[0px] toolsInHand font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {tools}
                                                </li>)
                                            }
                                        </ul>
                                    </div>

                                </div>
                                {/* Course Benefits section */}
                                <div className=" max-374:pb-[25px]  max-800:pb-[50px] max-767:pt-0   benefitsSection mt-[10px]  pt-[25px] listBgImage hoverBlue pb-[89px] px-0" >
                                    {
                                        ConvertAnchorToLink(String(course?.benefits))
                                    }
                                </div>
                                <div>
                                    <h3>Course Curriculum</h3>
                                </div>
                                {/* course curricullum pending */}
                                <div className="mt-[42px] keyAreaWeAreRes max-567:px-0 max-979:px-[20px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                                    <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas responsiveCurriculum">
                                        {
                                            course?.courseCurriculum?.map((curriculumn, index) =>
                                                <Panel header={curriculumn.heading} key={index} className="" >

                                                    {curriculumn?.details?.map((detail, index) => <p key={index} className=" leading-[34px] pl-[20px] relative mb-[9px] curriculumDetails ">{detail}</p>)}

                                                </Panel>
                                            )
                                        }
                                    </Collapse>

                                </div>
                                <div className="mt-[55px] max-800:mt-[25px] pt-[25px] pb-[89px] border-b-[2px] border-solid border-[#0003]">
                                    <div>
                                        <h3 className="mb-[16px] ">Key Highlights</h3>
                                        <ul className="flex flex-wrap gap-[23px] max-1321:gap-[20px] toolsresponsive ">
                                            {
                                                course?.keyHighLights?.map((key, index) => <li key={index} className=" max-567:w-[100%]   max-767:w-[47%] max-1024:py-[15px] max-1024:px-[10px]   max-1200:py-[17px] max-1200:px-[14px]  max-1380:p-[18px] max-1321:p-[16px] max-1321:text-[15px] max-1321:leading-[25px] max-1321:mt-[5px] max-1200:mt-[0px] keyHighlight font-[700] w-[30.8%] p-[20px]  text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {key}
                                                </li>)
                                            }
                                        </ul>


                                        <div className="listBgImage hoverBlue mt-[50px] ">
                                            {ConvertAnchorToLink(String(course?.certificate))}
                                        </div>

                                        <h3 className="max-800:mt-[30px] mt-[50px] mb-[25px] text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">What Job Roles Offer With {course?.courseName} Training in Indore
                                        </h3>
                                        <ul className="flex flex-wrap gap-[23px] max-1321:gap-[20px] toolsresponsive ">
                                            {
                                                course?.jobRoles?.map((key, index) => <li key={index} className=" max-567:w-[100%]   max-767:w-[47%]  max-1024:py-[15px] max-1024:px-[10px]   max-1200:py-[17px] max-1200:px-[14px]  max-1380:p-[18px] max-1321:p-[16px] max-1321:text-[15px] max-1321:leading-[25px] max-1321:mt-[5px] max-1200:mt-[0px] keyHighlight font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                                    {key}
                                                </li>)
                                            }
                                        </ul>
                                    </div>

                                </div>


                                <div className="pt-[84px] max-800:pt-[50px] " id="faqs">
                                    <div>
                                        <h3 className="font-[800] " >FAQ’s</h3>
                                    </div>
                                    <div className="keyAreaWeAreRes max-567:px-0 mt-[42px] max-979:px-[20px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
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
                            <div className="w-[34%] max-979:w-[100%] max-979:mx-auto max-979:mt-[60px] max-979:mb-[40px]  ">
                                <div className=" max-413:w-[95%]  max-567:w-[85%] mx-auto max-767:w-[70%] max-979:w-[60%] max-979:mx-auto max-1200:w-[88%] max-1200:px-[22px] px-[30px] pt-[30px] pb-[36px] rounded-[30px] w-[76%] ml-auto bg-[#fff] shadow-courseDetailsRightFormShad">
                                    <div>
                                        <figure className="m-0 ">
                                            <img className="max-w-[100%] max-979:mx-auto" src="/designers-using-gadgets.jpg" />
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
                                        <h4 className="max-1321:text-[22px] max-1321:leading-[31px]">Get Course Enquiry</h4>

                                        <div className="w-[100%] mt-[25px] ">
                                            <form >
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-user-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input required className="w-[100%] py-[10px] px-[5px] max-1200:text-[13px] max-1200:leading-[19px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Name" type="text" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-email-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input required className=" w-[100%] py-[10px] px-[5px] max-1200:text-[13px] max-1200:leading-[19px]  text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Email" type="email" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-call-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input required className=" w-[100%] py-[10px] px-[5px] max-1200:text-[13px] max-1200:leading-[19px]  text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Phone" type="tel:" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                    <p>
                                                        <span className="pl-[25px] block" style={{ backgroundImage: `url('/form-course-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0px', backgroundPositionY: '50%' }}>
                                                            <input className=" w-[100%] py-[10px] px-[5px] max-1200:text-[13px] max-1200:leading-[19px]  text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Message" type="text" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="mt-[27px]  flex justify-center items-center">
                                                    <p className="max-1200:leading-[32px] font-[400] text-[16px] leading-[34px] ">
                                                        <button type="submit" className="max-374:px-[57px] max-413:px-[80px] max-480:px-[90px] max-649:px-[100px] max-1200:py-[8px] max-979:px-[120px] max-1200:px-[72px] w-[100%] cursor-pointer pt-[9px] pb-[9px] pl-[90px] pr-[90px]
                                                        max-1200:text-[14px] text-[16px] leading-[21px] inputGradient hover:bg-[#1aeef4] font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none  transition duration-500 ease-linear hover:bg-[linear-gradient(180deg,_#1AAEF4_100%,_#1AAEF4_0%,_#0096EB_0.1%)]">

                                                            Send Form
                                                        </button>

                                                    </p>
                                                </div>
                                            </form>


                                        </div>

                                    </div>
                                    <div className="mt-[30px] ">
                                        <div className="mb-[15px] flex justify-center items-center gap-5 ">
                                            <div className="flex max-979:gap-4 max-649:gap-3 max-480:gap-2 max-413:gap-1">
                                                <a href="/" className="h-[40px]  text-[18px] max-1200:text-[17px] max-1200:leading-[35px] leading-[40px] w-[40px] max-1200:h-[35px] max-1200:w-[35px] rounded-full  z-0 relative overflow-hidden hover:text-[#000] text-[#1877F2] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faFacebookF} style={{ fontWeight: 400, }} />

                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] text-[18px] max-1200:text-[17px] max-1200:leading-[35px] leading-[40px] max-1200:h-[35px] max-1200:w-[35px] rounded-full  z-0  relative overflow-hidden hover:text-[#000] text-[#0077B5] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faLinkedinIn} style={{ fontWeight: 400 }} />
                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] text-[18px] max-1200:text-[17px] max-1200:leading-[35px] leading-[40px] max-1200:h-[35px] max-1200:w-[35px] rounded-full  z-0  relative overflow-hidden hover:text-[#000] text-[#E1306C] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faInstagram} style={{ fontWeight: 400 }} />
                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] text-[18px] max-1200:text-[17px] max-1200:leading-[35px] leading-[40px] max-1200:h-[35px] max-1200:w-[35px] rounded-full relative  z-0  overflow-hidden  hover:text-[#000] text-[#1DA1F2] flex justify-center items-center socialIcon">
                                                    <FontAwesomeIcon icon={faTwitter} style={{ fontWeight: 400 }} />

                                                </a>
                                                <a href="/" className="h-[40px] w-[40px] text-[18px] max-1200:text-[17px] max-1200:leading-[35px] leading-[40px] max-1200:h-[35px] max-1200:w-[35px] rounded-full relative  z-0  overflow-hidden hover:text-[#000] text-[#E60023] flex justify-center items-center mr-[6px] socialIcon">
                                                    <FontAwesomeIcon icon={faPinterest} style={{ fontWeight: 400 }} />
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
                    {relatedCourses.length > 0 &&
                        <section className="py-[50px] px-0" id="related-courses">
                            <div className="wrapper">
                                <div>
                                    <div>
                                        <h3 >Related Courses</h3>
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
                    }
                    <CounterPage />
                    <Footer />
                </div>) : (<NotFoundResponse />)
            }
        </div>
    )
}
export default CourseDetails;




