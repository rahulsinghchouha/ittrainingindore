import { Field, Formik, Form } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Collapse, Select } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CountUp from "react-countup";
import { ittrainingDataSerivice } from "../../Services/dataService";
import { Blocks } from 'react-loader-spinner';
import { useInView } from 'react-intersection-observer';
import { useSelector, useDispatch } from "react-redux";

import { fetchCards } from "../../Redux/functionsSlics";
import { getPlacedStudent, getExploreCards, studentForm } from "../../Redux/functionsSlics";

import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import CourseCard from "../Common/CourseCard";
import { Link, useNavigate } from "react-router-dom";
import ConvertAnchorToLink from "../Common/ConvertAnchorToLink";
import { useContactDetails } from "../../Redux/rTKFunction";
import { BsSearch } from "react-icons/bs";
const { Panel } = Collapse;




function Banner() {

    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data

    const navigate = useNavigate();

    const [activeKey,setActiveKey] = useState('0');

    const handleToggle = (key) => {      
        setActiveKey((prev) => (  key.length === 0 ? prev : key));
      };
    

    const [homeData, setHomeData] = useState();
    const [partnerImage, setOurPartners] = useState([]);
    const [blog, setBlog] = useState([]);

    const [ourStats, setOurStats] = useState();

    const dispatch = useDispatch();
    const webCard = useSelector((state) => state.backendFunction.webCard);
    const stuPlaced = useSelector((state) => state.backendFunction.stuPlaced);
    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);

    async function getHome() {
        try {
            const response = await ittrainingDataSerivice.getHome();
            if (response.status === 200) {
                console.log("home data ", response.data.data);
                setHomeData(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    async function getOurPartners() {
        try {
            const response = await ittrainingDataSerivice.getOurPartners();
            if (response.status === 200) setOurPartners(response.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getOurStats() {
        try {
            const response = await ittrainingDataSerivice.getOurStats();

            if (response.status === 200) {
                setOurStats(response.data.data);

            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async function fetchBlog() {
        try {
            const response = await ittrainingDataSerivice.getBlogs();

            if (response.status === 200) {
                setBlog(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getHome();
        getOurPartners();
        getOurStats();
        fetchBlog();
    }, []);

    useEffect(() => {
        dispatch(fetchCards());
        dispatch(getPlacedStudent());
        dispatch(getExploreCards());
    }, [dispatch])


    function categoryDetail(categoryDetail) {
        console.log("categoryDetail", categoryDetail);
        navigate("/course-category/" + categoryDetail?.heading.replace(/\s|\/+/g,'-'), { state: categoryDetail });
    }

    


    //  $$$$$$$$$$$$$$     ANIMATION      $$$$$$$$$$$$$$$$

    const { ref: keyStoreRef, inView: iskeyStore } = useInView({
        threshold: 0.01, // Trigger when the 20% of the element is visible 
        triggerOnce: true,
    });
    const { ref: mainHeading, inView: isMainHeading } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref: mainImage, inView: isMainImage } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref: chooseCourse, inView: isChooseCourse } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref: courseCard, inView: isCourseCard } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: upliftHead, inView: isUpliftHead } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ourPartners, inView: isOurPartners } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: exploreCategory, inView: isExploreCategory } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const { ref: maximizeCareer, inView: isMaximizeCareer } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: maxiSideImg, inView: isMaxiSideImg } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: countRef, inView: isCountRef } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: latestBimag, inView: isLatestBimg } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: latestBhead, inView: isLatestBhead } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: jobRedyRef, inView: isJobReady } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: jobRedyCardRef, inView: isJobReadyCard } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });



    const swiperRef = useRef(null);
    const partnerSwipRef = useRef(null);
    const exploreCatRef = useRef(null);

    const handleSearch = (search) => {
        if (search?.query)
            navigate("/search/" + search?.query);
        else
            navigate("/search/" + search);
    }

    async function traineeDetailsForm(values) {
        dispatch(studentForm(values));
    }

  
    function blogDetails(blogDetail) {
        navigate("/" + blogDetail.heading?.replace(/\s|\/+/g,'-'), { state: blogDetail });

    }

    return (
        <div>
            <Navbar />
            <div className="pt-[125px] ">
                {/* Home page banner start */}
                <div className="home-banner-wr overflow-hidden">
                    <section className="wrapper">
                        <div className="box-border flex max-1024:flex-col-reverse justify-between ">
                            <div className="w-[48.5%] max-1024:w-[100%] max-1024:text-center  max-1024:pt-[50px] max-1024:pb-[90px] max-1024:px-0    pt-[16px] pl-0 pr-0 pb-0 ">
                                <div className="banner-sub-heading">
                                    <h4 className="get-course-now text-[14px] leading-[20px] text-[#1aaef4] font-[400] pr-[70px] overflow-hidden">GET COURSE NOW</h4>
                                </div>
                                <div
                                    ref={mainHeading}
                                    className={`homeBannerHeader w-[120%] max-1024:w-[100%]  mt-[28px]  ${isMainHeading && "animate__fadeIn"} `} style={{
                                        animationDuration: "3s",
                                    }}
                                >
                                    {ConvertAnchorToLink(String(homeData?.bannerHeading))}

                                </div>
                                {/* banner search form */}
                                <div className="w-[100%] mt-[16px] ">
                                    <Formik
                                        initialValues={{ query: "" }}
                                        validate={value => {
                                            const error = {};
                                            if (!value.query) error.query = "Please Enter a Course Name";
                                            return error;
                                        }
                                        }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                handleSearch(values);
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ handleSubmit, handleChange, values, errors }) => (
                                            <form className="w-[98%]" onSubmit={handleSubmit}>
                                                <div className="flex w-[100%]">
                                                    <input type="text" value={values?.query} onChange={handleChange} name="query" placeholder="Search Course" className={` ${errors?.query ? "border-b-[1px] border-solid border-red-500" : ""} bg-[#ffffff] py-[15px]  px-[30px] w-[83%] rounded-tl-[27px] rounded-r-[0px] rounded-b-[0px] rounded-l-[27px] search-shadow focus:outline-none placeholder:text-[#000] placeholder:text-opacity-30 font-[400]  focus:placeholder:text-transparent`} />
                                                    <button type="submit" className="  bg-[#1aaef4] hover:bg-[#000]    w-[15%] rounded-r-full items-center cursor-pointer transition-all duration-150 ease-linear ">
                                                        <BsSearch style={{ color: "white", fontSize: "20px", marginLeft: "25px" }} className="search-icon" />
                                                    </button>
                                                </div>
                                                {errors.query && <span className="text-red-600 inline-block">{errors.query}</span>}
                                            </form>

                                        )}
                                    </Formik>

                                </div>
                                {/* popular searches course link */}
                                <div className="mt-[25px]">
                                    <div className="inline-block">
                                        <span className="text-[16px] leading-[21px] text-[#000000] font-[600] ">Popular Searches</span>

                                    </div>
                                    <div className="ml-[10px] max-1380:ml-[-5px] popularSearchBtn  inline-block cursor-pointer ">
                                        {
                                            exploreCat.slice(exploreCat.length - 3, exploreCat.length).reverse().map((category, index) => (
                                                <button onClick={() => handleSearch(category?.heading)} key={index} className={` ${index != 0 ? "ml-[15px]" : ""} inline-block text-[14px] py-[9px] px-[15px] ml-[5px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all delay-75 duration-300 ease hover:bg-[#1aaef4] hover:text-[white] `}>{category?.heading}</button>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* banner course link */}
                                <div className="mt-[60px] w-[110%] max-1321:mt-[42px] box-border flex">
                                    {/* Dynamic category Pending */}
                                    <div className="w-[34%]  border-r-[1px] border-solid border-[#e0e0e0]">
                                        <img src="/Home/web_development_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                        <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] max-1200:ml-[5px] focus:outline-none hover:text-[#1aa3f4] transition-all ease-linear delay-75">Development</a>
                                    </div>
                                    <div className="w-[32%] pl-[13px] border-r-[1px] border-solid border-[#e0e0e0]">
                                        <img src="/Home/graphic_design_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                        <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] max-1200:ml-[5px] focus:outline-none hover:text-[#1aa3f4] transition-all ease-linear delay-75">Designing</a>
                                    </div>
                                    <div className="w-[44%] pl-[13px]  border-solid border-[#e0e0e0] pr-0 box-border">
                                        <img src="/Home/digital_marketing_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                        <a href="/" className="text-[16px] leading-[20px] font-[500] text-[#000000] w-[70%] ml-[10px] max-1200:ml-[5px] whitespace-nowrap focus:outline-none hover:text-[#1aa3f4] transition-all ease-linear delay-75">Digital Marketing</a>
                                    </div>
                                </div>

                            </div>

                            {/* second div */}
                            <div ref={mainImage}


                                style={{ animationDuration: "3s", backgroundImage: `url(${ittrainingDataSerivice?.backendUrl}/${homeData?.bannerBgImg})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '84%', backgroundPositionY: '25%' }}
                                 className={` w-[39%] max-1200:w-[42%] max-1024:w-[52%] max-1024:mx-auto max-1024:mt-[60px] max-1024:mb-0 max-1024:max-h-[100%]  ${isMainImage && "animate__fadeIn"}  mt-[-52px] max-1200:mt-[15px] max-h-[687px] relative float-right box-border`}>
                                <figure

                                >
                                    <img src={`${ittrainingDataSerivice?.backendUrl}/${homeData?.bannerImage}`} alt="best software training institute in indore " />
                                    <figcaption className="absolute top-[32.5%] pt-[12px] pr-[25px] pb-[10px] pl-[25px] bg-[#ffffff] rounded-[12px] figShadow left-[-17%]  ">
                                        <div className="mt-[-32px]">
                                            <img src="/Home/banner-call-icon.png" className="m-auto max-w-[100%] block" />
                                        </div>
                                        <div className="mt-[5px] visible text-[14px] leading-[20px] font-[600] text-[#1aaef4]">
                                            <a href={`tel:+91 ${contactUsData?.data?.contactUsNumber}`} className="hover:text-[#000000] transition-all delay-75">+91 {contactUsData?.data?.contactUsNumber}</a>

                                        </div>
                                    </figcaption>
                                </figure>


                            </div>


                        </div>
                    </section>
                </div>

                {/* Home banner end */}

                {/* key store form section starts */}

                <section ref={keyStoreRef} className={`mt-[-110px] max-1200:mt-[-90px] max-1024:mt-[64px] z-100 bgKeyStore ${iskeyStore ? "animate__fadeInDown" : ""} `} style={{
                    animationDuration: "2s", // Custom animation duration
                }}>
                    <div className="wrapper">
                        <div className="overflow-hidden flex max-1024:flex-col justify-between pt-[20px] pl-[52px] pr-[52px] pb-[8px] max-1024:pt-[13px] max-1024:pb-[22px] max-1024:px-[52px] w-[83%] max-1200:w-[90%] max-1680:w-[100%] mt-0 mb-0 ml-auto mr-auto box-border relative rounded-[31px] keyStore ">
                            <figure className="absolute top-0 left-0 max-1024:h-[365px] z-[2]">
                                <img src="/Home/keystroke-from-bg.svg" className="h-[100%] w-[100%] max-w-[100%]" />
                            </figure>
                            <div className="w-[25%] max-1024:w-[100%] max-1024:text-center">
                            
                                <h2 className="text-[28px]  leading-[46px]  text-[#000000] ">Get a free
                                    <span className="font-[700]"> keystroke quote</span>
                                </h2>
                            </div>
                            <div className="w-[76%]  max-1024:w-[100%] max-1024:mt-[25px] relative leading-0  bg-transparent">


                                <div>
                                    <Formik
                                        initialValues={{ name: '', email: '', phone: '', course: '', joiningTime: '', message: '' }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.name) errors.name = "Please Enter your Name";
                                            if (!values.email) errors.email = "Please Enter your Email";
                                            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Please Enter Valid Email";
                                            if (!values.phone) errors.phone = "Please Enter your Number";
                                            if (!values.course) errors.course = "Select At least  One Course";
                                            return errors;

                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                traineeDetailsForm(values);
                                                setSubmitting(false);
                                            }, 400);
                                        }}

                                    >
                                        {({ isSubmitting, values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched }) => (
                                            <form className="flex flex-col m-0 p-0 " onSubmit={handleSubmit}>

                                                <div className="flex">
                                                    <div className="w-[29%]   relative mb-[27px] ml-0 mr-0 mt-0" >
                                                        <div className=" border-b-[1px]  border-solid  border-[#cecece] ">
                                                            <p className="leading-[21px] text-[#000000] text-[16px] spacing-normal font-[400]">
                                                                <span className="formUserIcon pl-[25px] block  ">
                                                                    <input type="text" name="name" onBlur={handleBlur} aria-required="true" aria-invalid={errors?.name && touched?.name ? "true" : "false"} onChange={handleChange} value={values.name} placeholder="Name" className="  pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[100%] inline-block homeInputForm focus:outline-none focus:bg-transparent focus:placeholder:text-transparent " />
                                                                </span>
                                                            </p>
                                                        </div>
                                                        {errors?.name && touched?.name && <span className=" text-[13px] absolute left-0 bottom-[-16px]  text-[#ff0000] ">*{errors.name}</span>}
                                                    </div>
                                                    <div className="w-[29%] mb-[27px]  ml-[33px] relative ">
                                                        <div className=" border-b-[1px]  border-solid border-[#cecece]   ">
                                                            <p className="leading-[21px] text-[#000000] text-[16px] font-[400] ">
                                                                <span className="formEmailIcon pl-[25px] block" >
                                                                    <input size={40} type="email" name="email" onBlur={handleBlur} onChange={handleChange} values={values.email} placeholder="Email" className=" pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[100%] inline-block focus:outline-none focus:placeholder:text-transparent" />
                                                                </span>
                                                            </p>
                                                        </div>
                                                        {errors?.email && touched?.email && <span className=" text-[13px] absolute left-0 bottom-[-16px]  text-[#ff0000] ">*{errors.email}</span>}
                                                    </div>
                                                    <div className="w-[29%] mb-[27px] relative ml-[33px] ">
                                                        <div className=" border-b-[1px]  border-solid border-[#cecece]  box-border inline-block">
                                                            <p className="leading-[21px] text-[#000000] text-[16px] font-[400] ">
                                                                <span className="formPhoneIcon pl-[25px] block">
                                                                    <input size={40} maxLength={10} minLength={10} name="phone" type="number"
                                                                        pattern="[0-9]{10}" placeholder="Phone" onChange={handleChange} values={values.phone} className=" pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[100%] inline-block focus:outline-none focus:placeholder:text-transparent " onBlur={handleBlur} />

                                                                </span>
                                                            </p>
                                                        </div>
                                                        {errors?.phone && touched?.phone && <span className=" text-[13px] absolute left-0 bottom-[-15px]  text-[#ff0000] ">*{errors.phone}</span>}

                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="mt-0 w-[46%] mb-[27px] relative ">
                                                        <div className=" inline-block  w-[100%] border-b-[1px] border-solid border-[#cecece]">
                                                            <p className="leading-[21px] text-[#000000] font-[400] text-[16px] "   >

                                                                <span className=" formSelectCourse pl-[25px] block"   >
                                                                    <Select
                                                                         className=" selectBorder antSelector cursor-pointer bg-transparent  "
                                                                        showSearch
                                                                        defaultValue="Select Course"
                                                                       
                                                                        style={{ width: "100%", border: "0px", cursor: "pointer",backgroundColor:"transparent",zIndex:"0" }}
                                                                        onChange={(value) => setFieldValue("course", value)}
                                                                        values={values.course}
                                                                       
                                                                        onBlur={() => setFieldTouched("course", true)} // Manually set touched

                                                                        options={[

                                                                            { label: <span>Advanced PHP Training</span>, value: 'Advanced PHP Training' },
                                                                            { label: <span>Angular Js</span>, value: 'Angular Js' },
                                                                            { label: <span>Basic PHP Training Course</span>, value: 'Basic PHP Training Course' },
                                                                            { label: <span>Basic Web Designing</span>, value: 'Basic Web Designing' },
                                                                            { label: <span>C, C++ Training</span>, value: 'C, C++ Training' },
                                                                            { label: <span>C, C++ with Data Structure</span>, value: 'C, C++ with Data Structure' },
                                                                            { label: <span>Cake PHP</span>, value: 'Cake PHP' },
                                                                            { label: <span>Codeigniter</span>, value: 'Codeigniter' },
                                                                            { label: <span>WordPress with Woo-commerce</span>, value: 'WordPress with Woo-commerce' },
                                                                            { label: <span>Graphic Design with UI/UX</span>, value: 'Graphic Design with UI/UX' },
                                                                            { label: <span>Laravel Framework</span>, value: 'Laravel Framework' },
                                                                            { label: <span>Magento</span>, value: 'Magento' },
                                                                            { label: <span>React with Node Js</span>, value: 'React with Node Js' },
                                                                            { label: <span>Shopify</span>, value: 'Shopify' },
                                                                            { label: <span>UI/UX</span>, value: 'UI/UX' },
                                                                            { label: <span>Web API Development</span>, value: 'Web API Development' },
                                                                            { label: <span>Web Design with UI/UX</span>, value: 'Web Design with UI/UX' },
                                                                            { label: <span>Web Designing with React</span>, value: 'Web Designing with React' },



                                                                        ]}
                                                                    />
                                                                </span>
                                                            </p>

                                                        </div>
                                                        {errors?.course && touched?.course && <span className=" text-[13px]  absolute left-0 bottom-[-15px] text-[#ff0000] ">*{errors.course}</span>}

                                                    </div>


                                                    <div className="mt-0 w-[46%] ml-[33px] relative inline-block mb-[27px] border-b-[1px] border-solid border-[#cecece]">
                                                        <p className="leading-[21px] text-[#000000] font-[400] text-[16px] ">

                                                            <span className=" formSelectCalender pl-[25px] block">
                                                                <Select
                                                                    showSearch
                                                                    defaultValue="How soon you want to join IT Training?"
                                                                    style={{ width: "100%", border: "0px", cursor: "pointer", }}
                                                                    onChange={(value) => setFieldValue("joiningTime", value)}
                                                                    values={values.joiningTime}
                                                                    className="selectBorder antSelector cursor-pointer"


                                                                    options={[

                                                                        { label: <span>This Week</span>, value: 'This Week' },
                                                                        { label: <span>Upcoming Week</span>, value: 'Upcoming Week' },
                                                                        { label: <span>In a month</span>, value: 'In a month' },
                                                                    ]}
                                                                />
                                                            </span>
                                                        </p>

                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <div className="mt-0 w-[61%] relative inline-block mb-[27px] border-b-[1px] border-solid border-[#cecece]">
                                                        <p className="leading-[21px] text-[#000000] font-[400] text-[16px] ">

                                                            <span className=" formMessage pl-[25px] block">
                                                                <textarea cols={40} rows={10} aria-invalid="false" name="message" onChange={handleChange} value={values.message} placeholder="Type your message" className="h-[44px] b-0 w-[100%] font-[500] text-[14px] 
                                                                 resize-none leading-[19px]  pt-[10px] pb-[10px] pl-[5px] pr-[5px] bg-transparent text-[#000]  focus:outline-none focus:placeholder:text-transparent "></textarea>

                                                            </span>
                                                        </p>

                                                    </div>

                                                    <div className="m-0 p-0 box-border">
                                                        <p className="leading-[21px] font-[400] text-[16px] ">
                                                            <button type="submit" disabled={isSubmitting} className="cursor-pointer ml-[22px] pt-[13px] pb-[13px] pl-[105px] pr-[105px]
                                                             text-[16px] leading-[21px] inputGradient hover:bg-[#1aeef4] font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none  transition duration-500 ease-linear hover:bg-[linear-gradient(180deg,_#1AAEF4_100%,_#1AAEF4_0%,_#0096EB_0.1%)]">
                                                                {isSubmitting ?
                                                                    (
                                                                        <Blocks
                                                                            height={24}
                                                                            width={30}
                                                                            color="#4fa94d"
                                                                            ariaLabel="blocks-loading"
                                                                            wrapperStyle={{}}
                                                                            wrapperClass="blocks-wrapper"
                                                                            visible={true}

                                                                        />
                                                                    ) : 'Send'
                                                                }
                                                            </button>

                                                        </p>

                                                    </div>

                                                </div>

                                            </form>
                                        )

                                        }

                                    </Formik>
                                </div>


                            </div>
                        </div>

                    </div>

                </section>

                {/* key-store form section end */}

                {/* Greet course section   */}

                <section className="pt-[116px] text-center overflow-hidden">
                    <div className="wrapper">

                        <div style={{ visibility: "visible", animationDuration: '3s' }}
                            ref={chooseCourse}
                            className={` hoverBlue listBgImage w-[82%] mx-auto ${isChooseCourse && "animate__fadeInDown"}`}
                        >
                            {ConvertAnchorToLink(String(homeData?.chooseCourseHead))}
                        </div>

                        <div className={`text-center relative mt-[47px] ${isCourseCard && "animate__fadeIn"}  `}
                            ref={courseCard}

                            style={{ animationDuration: '3s' }}
                        >


                            <CourseCard cardLimit={6} square={true} horizontal={false} webCard={webCard} />




                        </div>

                        {/* view all course btn  */}
                        <div className="mt-[21px] ">
                            <Link to="/courses" className="btnAfter">
                                View all Courses
                            </Link>
                        </div>


                    </div>

                </section>

                {/* great course section end */}

                {/* student placed section starts */}

                <section className={` pt-[0px] pr-0 pl-0 pb-[72px] ${isUpliftHead && "animate__fadeIn"} overflow-hidden `}
                    ref={upliftHead}
                    style={{ animationDuration: '4s' }}>
                    <div className="wrapper">
                        <div className=" hoverBlue listBgImage pt-[30px] pb-[43px] visible text-center w-[75%] mx-auto">
                            {ConvertAnchorToLink(String(homeData?.upliftYourCareerHead))}
                        </div>
                        <div className="flex justify-between">
                            {/* start from scratch  */}
                            <div className="float-left w-[45.7%] mt-[30px] ">
                                <div className="mt-0">
                                    <Collapse bordered={false} activeKey={activeKey} onChange={handleToggle} accordion style={{ backgroundColor: "#fff" }} className="howToStartCollapse">
                                        {
                                            homeData?.howToStart?.map((keyArea, index) =>
                                                <Panel header={keyArea.heading} key={index} >
                                                    <p>{keyArea.details}</p>

                                                </Panel>
                                            )
                                        }
                                    </Collapse>
                                </div>

                            </div>

                            <div className="w-[48.5%] relative text-center float-right stuPlacShad">
                                <div className="w-[100%]  relative h-[696px]">
                                    <button onClick={() => swiperRef.current.slidePrev()} className="w-[35px] h-[35px]  text-white absolute transition-all z-10 bg-[#1AAEF4] flex items-center justify-center top-[50%] left-0 "><img src="/swiperLefticon.png" alt="swiper left" /></button>
                                    <button onClick={() => swiperRef.current.slideNext()} className="w-[35px] h-[35px]  text-white absolute transition-all z-10 bg-[#1AAEF4] flex justify-center items-center top-[50%] right-0"><img src="/swiperRighticon.png" alt="swiper right" /></button>
                                    <Swiper
                                        modules={[Autoplay, Pagination, Navigation]}
                                        spaceBetween={0}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true, //for stop slide on mouse enter
                                        }}
                                        slidesPerView={1}
                                        navigation={false}
                                        speed={500}

                                        loop={true}
                                        onSwiper={(swiper) => swiperRef.current = swiper}

                                    >
                                        {
                                            stuPlaced?.map((student, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="w-[641.156px] ">
                                                        <div className="relative">
                                                            <figure className="relative text-center m-0 ">
                                                                <img className="rounded-[50%] mt-[50px] mr-auto mb-auto ml-auto border-[5px] solid border-[#1AAEF4] shadow-imgShadow w-[215px] h-[215px] " src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} alt="sheetal Rana" />
                                                                <figcaption className="bg-[unset] absolute top-0 left-0 right-0 mt-0 mb-0 ml-auto mr-auto h-[100%] w-[100%]"></figcaption>
                                                            </figure>

                                                        </div>
                                                        <div className="pt-[60px] pr-[54px] pb-[94px] pl-[54px] bg-[#fff] " >
                                                            <p className="text-[#000000] text-[16px] leading-[34px] font-[400] tracking-normal"
                                                                style={{
                                                                    backgroundImage: `url('/Home/testimonials-quote_icon.svg') `, backgroundRepeat: 'no-repeat',
                                                                    backgroundPosition: 'center',
                                                                    backgroundSize: 'contain'
                                                                }}>
                                                                {student.experience}
                                                            </p>
                                                            <div className="mt-[30px] ">
                                                                <span className="text-[#1AAEF4] text-[18px] leading-[23px] font-[700] ">{student.name}</span>
                                                                <h4 className="text-[14px] leading-[20px] font-[500] text-[#000000]">{student.profile}</h4>

                                                            </div>

                                                        </div>


                                                    </div>

                                                </SwiperSlide>

                                            ))
                                        }

                                    </Swiper>
                                </div>


                            </div>

                        </div>

                    </div>

                </section>

                {/* our partners */}
                <section className={` pb-[59px] m-0 `}

                >
                    <div className="wrapper ">
                        <div className={`text-center mb-[30px] ${isOurPartners && "animate__fadeInDown"}`}
                            ref={ourPartners}
                            style={{ animationDuration: "2s" }}>
                            <h3 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000000] font-[800] "> Our Partners </h3>
                        </div>
                        <div className="bg-[#ffffff] shadow-partnerShadow relative rounded-[22px] p-[30px] ">
                            <button onClick={() => { partnerSwipRef.current.slidePrev() }} className="w-[54px] h-[54px] bg-[#ececec] rounded-[50%] absolute top-[30%] left-[-30px] border-[1px] solid border-[#0000001a] flex justify-center items-center"><img src="/exolore-slider-prev (1).svg" /></button>
                            <button onClick={() => { partnerSwipRef.current.slideNext() }} className="w-[54px] h-[54px] bg-[#ececec] rounded-[50%] absolute top-[30%] right-[-30px] border-[1px] solid border-[#0000001a] flex justify-center items-center"><img src="/exolore-slider-next.svg" /></button>


                            <div className="w-[100%] relative   h-[74px] rounded-[22px]   ">
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation]}
                                    autoplay={{ delay: 3000, }}
                                    slidesPerView={4}
                                    navigation={false}
                                    speed={500}
                                    // pagination={{ clickable: true }}
                                    loop={true}
                                    onSwiper={(swiper) => partnerSwipRef.current = swiper}
                                >
                                    {partnerImage?.map((partner, index) => (
                                        <SwiperSlide key={index} className="border-l-[1px] solid border-[#0000001a] ">
                                            <figure className="w-[315.3px] h-[74px] flex justify-center items-center}">
                                                <img className=" mt-auto  mb-auto max-w-[100%] max-h-[100%] object-cover" src={`${ittrainingDataSerivice.backendUrl}/${partner.img}`} alt="Top Successful Partners of Best IT Training Indore Institute | Best Digital Marketing Services In Indore" />
                                            </figure>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>



                            </div>


                        </div>

                    </div>

                </section>

                {/* our partners end */}
                {/* Explore categories section starts */}
                <section className={`pt-[50px] pb-[50px] pr-0 pl-0 m-0  `}

                >
                    <div className="wrapper"

                    >
                        <div className={`relative ${isExploreCategory && "animate__fadeIn"}`}
                            ref={exploreCategory}
                            style={{ animationDuration: "3s" }}
                        >
                            <div className="flex justify-between">

                                <h3 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000000] font-[800] ">Explore the Categories</h3>
                                <div className="flex gap-2">
                                    <button onClick={() => { exploreCatRef.current.slidePrev() }} className="w-[54px] h-[54px] hover:bg-[#ececec] rounded-[50%]  hover:border-[1px] solid border-[#0000001a] flex justify-center items-center transform transition-all ease-linear duration-75 delay-100"><img src="/exolore-slider-prev (1).svg" /></button>
                                    <button onClick={() => { exploreCatRef.current.slideNext() }} className="w-[54px] h-[54px] hover:bg-[#ececec] rounded-[50%]   hover:border-[1px] solid border-[#0000001a] flex justify-center items-center"><img src="/exolore-slider-next.svg" /></button>
                                </div>
                            </div>
                            <div className="mt-[35px] ">
                                <div>
                                    <div className="w-[100%] relative h-[392px] pt-[30px]   pr-[20px] pb-[20px] pl-[20px]">



                                        {/* in this we will add the cart */}
                                        <Swiper
                                            modules={[Navigation]}
                                            autoplay={{ delay: 3000 }}
                                            slidesPerView={3}
                                            navigation={false}
                                            speed={500}
                                            loop={true}
                                            onSwiper={(swiper) => { exploreCatRef.current = swiper }}
                                        >
                                            {
                                                exploreCat?.map((card, index) => (
                                                    <SwiperSlide key={index}>

                                                        <div className={`w-[403.333px]  relative z-50  mr-[36px] ${(index) % 2 === 0 && (`mt-[65px]`)}`}>
                                                            <div className={`absolute border-t-[2px] border-l-[2px] rounded-[2px] solid w-[80px] h-[80px] top-0 left-0 transform   origin-top-left duration-[0.5s]  ${(index % 4 === 0 && (`border-[#ddac00]`)) || (index % 4 === 1 && (`border-[#0089ca]`)) || (index % 4 === 2 && (`border-[#109304]`)) || (index % 4 === 3 && (`border-[#7b57c6]`))}`}></div>
                                                            <div className=" pr-[35px] pt-[19px]  pb-[33px] pl-[35px] rounded-[22px] shadow-exploreCardShad flex flex-col justify-center items-center transition-all duration-[0.3s] ease-linear delay-0">
                                                                <figure className="w-[105px] h-[105px] m-0 " style={{ backgroundImage: `url(${ittrainingDataSerivice.backendUrl}/${card.bgImage})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'center', backgroundPositionX: '50%' }}>
                                                                    <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Animation" className="w-[78%] mt-0 mb-0 ml-auto mr-auto" />
                                                                </figure>
                                                                <div className="mt-[16px] ">
                                                                    <h4 className="text-[20px] leading-[25px] text-[#000000] font-[700] ">{card.heading}</h4>
                                                                </div>
                                                                <div className="mt-[13px] text-center ">
                                                                    <p className="text-[16px] leading-[34px] text-[#000] font-[400] tracking-normal">
                                                                        {card.para} </p>
                                                                </div>
                                                                <div className="mt-[18px] ">
                                                                    <h5 className="text-[18px] leading-[23px] text-[#000] font-[700]  ">
                                                                        <button onClick={() => categoryDetail(card)} className={` ${(index % 4 === 0 && (`text-[#ddac00]`)) || (index % 4 === 1 && (`text-[#0089ca]`)) || (index % 4 === 2 && (`text-[#109304]`)) || (index % 4 === 3 && (`text-[#7b57c6]`))} `} href="/">Explore</button>
                                                                    </h5>
                                                                </div>
                                                                <div className={`absolute border-b-[2px] border-r-[2px] rounded-[2px] solid w-[80px] h-[80px] bottom-0 right-0 transform   origin-top-left duration-[0.5s] ${(index) % 2 === 1 && (`mt-[-65px]`)} ${(index % 4 === 0 && (`border-[#ddac00]`)) || (index % 4 === 1 && (`border-[#0089ca]`)) || (index % 4 === 2 && (`border-[#109304]`)) || (index % 4 === 3 && (`border-[#7b57c6]`))}`}></div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </section>

                {/* Best Educators section start */}
                <section className="pt-[62px] mt-[80px] pb-[92px] pl-0 pr-0 overflow-hidden " >
                    <div className="wrapper">
                        <div className="">
                            <div className="w-[55%] float-left mb-[25px] ">
                                <div className={` hoverBlue listBgImage maximizeYourCareerHead ${isMaximizeCareer && "animate__fadeInDown"}  `}
                                    ref={maximizeCareer}
                                    style={{ animationDuration: "3s" }}
                                >
                                    {ConvertAnchorToLink(String(homeData?.maximizeCareerHead))}
                                </div>

                                <div className="mt-[48px] ">
                                    <a className="pt-[13px] font-[700] border-none rounded-[24px] relative z-[11]  pb-[13px] pl-[34px] pr-[34px] text-[16px] leading-[21px] text-[#fff] bg-[linear-gradient(180deg,_#1AAEF4_0%,_#1AAEF4_0.01%,_#0096EB_100%)] h-[64px] w-full">
                                        Read More
                                    </a>

                                </div>


                            </div>

                            <div className={`mt-[-58px] w-[38%]  float-right ${isMaxiSideImg ? "transform translate-x-[-15px] transition-all ease-linear delay-[100ms] duration-[1s]" : "translate-x-6"} `}
                                ref={maxiSideImg}
                                style={{ animationDuration: "5s" }}

                            >
                                <figure className="m-0">
                                    <img className="max-w-[100%] block " src={`${ittrainingDataSerivice?.backendUrl}/${homeData?.maximizeCareerImg}`} />
                                </figure>
                            </div>
                        </div>

                    </div>

                </section>
                {/* Best Educators Section end */}

                {/* our achievements section starts */}

                <section className=" pb-[44px] pt-[10px] m-0 ">

                    <div className="wrapper">

                        <div className="w-[41%] bg-[#009ce5]  pb-[52px] relative wraSuccesfull">
                            <figure className="absolute top-[-49%] left-[-33%]">
                                <img src="/our-achievements.svg" />

                            </figure>
                            <div className="w-[100%] ml-0 pl-12  pt-[48px]  " >

                                <h4 className="text-[24px] leading-[30px] text-[#fff] font-[700]">What makes us SUCCESSFUL?</h4>
                                <div className="mt-[12px] pr-[20px] ">
                                    <p className="text-[#fff] leading-[34px] font-[400] tracking-normal">
                                        These are not only numbers, but the outcome of our hard work, success, and accomplishments over the years.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div ref={countRef} className="w-[100%] pt-[190px] pb-[55px]  border-b-[13px] border-solid border-[#009ce5] -mt-[114px]  text-center"
                            style={{ background: `url('/paperplane.svg')`, backgroundPositionX: '70%', backgroundPositionY: '45%', backgroundRepeat: 'no-repeat', backgroundColor: '#f3fbff' }}>
                            <div className="flex w-[82%] ml-auto mr-auto  ">
                                <div className="w-[25%] relative mentorBorder  ">
                                    <h1 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                                        {isCountRef &&
                                            <CountUp
                                                start={0}
                                                end={ourStats?.mentors}
                                                duration={4}

                                            />}</h1>
                                    <p className="mt-[8px]">Mentors</p>
                                </div>
                                <div className="w-[25%] relative mentorBorder  ">
                                    <h1 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                                        {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.experience}
                                            duration={4}

                                        />}</h1>
                                    <p className="mt-[8px]">Years Of Experience</p>
                                </div>
                                <div className="w-[25%] relative mentorBorder  ">
                                    <h1 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                                        {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.placedStudent}
                                            duration={5}

                                        />}<span className="ml-[2px]">+</span></h1>
                                    <p className="mt-[8px]">Placed</p>
                                </div>
                                <div className="w-[25%] relative   ">
                                    <h1 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">0
                                        {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.yearsOfJourney}
                                            duration={4}

                                        />}</h1>
                                    <p className="mt-[8px]">Years of Journey</p>
                                </div>


                            </div>

                        </div>
                    </div>

                </section>

                {/* our achievements section end */}

                {/* latest blog section starts */}

                <section className="pt-[144px] relative pl-0 pr-0 pb-[100px] overflow-hidden flex ">

                    <div className={`w-[50%]  `}

                    >
                        <figure className={`m-0   ${isLatestBimg ? "transform duration-[2s] " : " translate-x-[-25px] translate-y-[-25px] "}`}
                            ref={latestBimag}
                            style={{ animationDuration: "3s" }}>
                            <img className="w-[100%]" src={`${ittrainingDataSerivice?.backendUrl}/${homeData?.blogImg}`} />
                        </figure>
                    </div>


                    <div className=" w-[686px] ml-10 mt-auto mb-auto">
                        <div className="">
                            <div className=" ">
                                <div className={` hoverBlue listBgImage w-[90%] ${isLatestBhead ? "transform translate-y-0 duration-[2s]" : "translate-y-[-70px]"} `}
                                    ref={latestBhead}
                                    style={{ animationDuration: "3s" }}
                                ></div>
                                {ConvertAnchorToLink(String(homeData?.blogHead))}
                                <div className="mt-[52px] w-[95%] ">
                                    {
                                        
                                        blog?.slice(blog.length - 3, blog.length).reverse().map((latestBlog, index) => {

                                            const dateObj = new Date(latestBlog?.updatedAt); // Create a Date object
                                            const day = dateObj.getDate(); // Get the day of the month (1-31)
                                            const month = dateObj.toLocaleString('en-US', { month: 'short' }); // Get the month 
                                            return (
                                                <div className=" flex justify-between mb-[45px]" key={index}>
                                                    <div className=" flex">
                                                        <div className="text-center w-[64px] h-[64px] bg-[#ffffff] shadow-blogShadow ">
                                                            <div className="mt-[8px] flex flex-col justify-center items-center">
                                                                <h2 className={`text-[18px] leading-[23px] font-[700] ${index === 0 ? "text-[#4800E2]" : "" || index === 1 ? "text-[#11B400]" : "" || index === 2 ? "text-[#1AAEF4]" : ""} `}>
                                                                    {day}{`${day === 1 ? "st" : "" || day === 2 ? "nd" : "" || day === 3 ? "rd" : "th"}`}
                                                                </h2>
                                                                <h5 className={`text-[12px] font-[500] leading-[25px] ${index == 0 ? "text-[#4800E2]" : "" || index == 1 ? "text-[#11B400]" : "" || index === 2 ? "text-[#1AAEF4]" : ""}  `}>
                                                                    {month}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="ml-[8px] ">
                                                            <button onClick={() => blogDetails(latestBlog)} className={` ${index == 0 ? "hover:text-[#4800E2]" : "" || index == 1 ? "hover:text-[#11B400]" : "" || index === 2 ? "hover:text-[#1AAEF4]" : ""} transition-all delay-[0.1s] ease-out text-[24px] leading-[27px] text-[#000] font-[700]`}>{latestBlog?.heading.slice(0, 25)}...</button>
                                                            <p className={`${index == 0 ? "text-[#4800E2]" : "" || index == 1 ? "text-[#11B400]" : "" || index === 2 ? "text-[#1AAEF4]" : ""}  text-[16px] leading-[34px] font-[400] `}>{latestBlog?.blogCategory}</p>
                                                        </div>

                                                    </div>
                                                    <div className=" flex justify-center items-center " >
                                                        <h6 className="text-[#000] text-[18px] leading-[23px] font-[700]">
                                                            <button onClick={() => blogDetails(latestBlog)} className={`blogBtn itCardBtn  pr-[45px] mt-[33px] ${index == 0 ? "hover:text-[#4800E2]" : "" || index == 1 ? "hover:text-[#11B400]" : "" || index === 2 ? "hover:text-[#1AAEF4]" : ""} transition-all delay-[0.1s] ease-out `}> Read More   </button> </h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* latest blog section end  */}

                {/* job program sectin start  */}

                <section className="pt-[50px] pb-[180px]">
                    <div className="wrapper">
                        <div className="text-center ">
                            <div className={` hoverBlue listBgImage w-[80%] mx-auto ${isJobReady ? "transform duration-[2s]" : "transform translate-y-[-35px]"}`}
                                ref={jobRedyRef}
                                style={{ animationDuration: "3s" }}
                            >
                                {ConvertAnchorToLink(String(homeData?.jobReadyHead))}
                            </div>
                        </div>
                        <div className={`mt-[95px] flex w-[100%] ${isJobReadyCard && "animate__fadeIn"}`}
                            ref={jobRedyCardRef}
                            style={{ animationDuration: "2s" }}

                        >
                            <div className="w-[31.5%] ml-[2.7%] pt-[66px] pr-[38.3px] pb-[31px] pl-[36.7px] shadow-jobCardShadow bg-[#ffffff] ">
                                <figure className="w-[92px] h-[92px] leading-[120px] bg-[#fff7db] rounded-[50%] mt-[-110px] flex justify-center items-center">
                                    <img src="/best-job-training-program-1.svg" alt="best-job-training-program-1.svg" className="" />

                                </figure>
                                <div className=" hoverBlue listBgImage mt-[17px] " >
                                    {ConvertAnchorToLink(String(homeData?.interviewPrepHead))}
                                </div>


                            </div>
                            <div className="w-[31.5%] ml-[2.7%] pt-[66px] pr-[38.3px] pb-[31px] pl-[36.7px] shadow-jobCardShadow bg-[#ffffff] ">
                                <figure className="w-[92px] h-[92px] leading-[120px] bg-[#e3ffe0] rounded-[50%] mt-[-110px] flex justify-center items-center">
                                    <img src="/IT-Training-Indore-job-program.svg" alt="best-job-training-program-1.svg" className="" />

                                </figure>
                                <div className=" hoverBlue listBgImage mt-[17px] " >
                                    {ConvertAnchorToLink(String(homeData?.mentorsHead))}
                                </div>


                            </div>
                            <div className="w-[31.5%] ml-[2.7%] pt-[66px] pr-[38.3px] pb-[31px] pl-[36.7px] shadow-jobCardShadow bg-[#ffffff] ">
                                <figure className="w-[92px] h-[92px] leading-[120px] bg-[#ece3ff] rounded-[50%] mt-[-110px] flex justify-center items-center">
                                    <img src="/Best-placement-job-program.svg" alt="best-job-training-program-1.svg" className="" />

                                </figure>
                                <div className=" hoverBlue listBgImage mt-[17px] ">
                                    {ConvertAnchorToLink(String(homeData?.careerCounsilHead))}
                                </div>


                            </div>

                        </div>

                        <div className="mt-[40px] text-center ">
                            <a href="/" className="btnAfter">
                                Contact us now
                            </a>

                        </div>

                    </div>



                </section>
                {/* job program section complete */}

                {/*college life section starts  */}

                <section className="pb-[97px] m-0 relative clearfix comCollegeBg  z-[1]" >
                    <div className="wrapper ">
                        <div className=" hoverBlue listBgImage mt-[40px] w-[60%] float-left">
                            {ConvertAnchorToLink(String(homeData?.beforeCollegeHead))}
                        </div>

                        <div className="w-[35%] float-right cle">
                            <figure className="m-0 ">
                                <img src={`${ittrainingDataSerivice?.backendUrl}/${homeData?.beforeCollegeImg}`} alt="College ,placement coaching class institute" />

                            </figure>

                        </div>
                    </div>

                </section>
                {/* completion of college life */}

                {/* footer section start */}
                <Footer className="pt-[300px] "></Footer>

                {/* back to top align */}
                {/* <div className="fixed right-[5%] bottom-[5%] cursor-pointer z-[51] text-center backtotop  ">
                    <Link to="/" className=" backtotopchild text-[25px] text-[#ffffff]  text-center w-[62px] h-[62px] bg-[#050505] inline-block align-middle  rounded-[50%] leading-[62px] ">
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                            <path d="M1.6665 12.2923L11.9998 1.95898L22.3332 12.2923" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1.6665 20.0423L11.9998 9.70898L22.3332 20.0423" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>

                    </Link>
                    <span className="block text-[14px] leading-[19px] font-[500] mt-[12px]  ">Back To Top</span>
                </div> */}
                {/* back to top end */}

                {/* get inquiry */}
                {/* <div className="getInquiryimg fixed top-[50%] right-0 py-[10px] pr-[13px] pl-[11px] shadow-geiinquiryShad bg-[#000] w-[56px] text-center cursor-pointer rounded-[5px] z-[51] flex gap-2 items-center" style={{ writingMode: 'vertical-rl' }}>
                    <figure className="w-[27px] h-[26px] pt-[4px] pb-[3px] pl-[2px] pr-[6px] rounded-[3px] bg-[#1aaef4] mt-[10px] transform rotate-180 ">
                        <img src="/get-enquiry-icon.svg" alt="It Training Indore Enquiry" className="" />
                    </figure>
                    <div className="transform rotate-180 ">
                        <h4 className="text-[#fff] font-[700] text-[16px] leading-[21px] ">Get Enquiry</h4>
                    </div>

                </div> */}

                {/* whatsapp button */}

                <div className=" box-border w-[50px] h-[50px] fixed left-[10px] bottom-[10px] rounded-[50px] z-[99] bg-[#1aaef4] shadow-whatsappButtonShad   ">
                    <a className="w-[100%] h-[100%] flex justify-center items-center" aria-label="Chat on WhatsApp" href="https://api.whatsapp.com/send/?phone=8269600400&text&type=phone_number&app_absent=0" target="_blank">
                        <img className="w-[20px] h-[20px] " src="/whatsapp.svg" />
                    </a>
                </div>



            </div>
        </div>
    )
}
export default Banner;
