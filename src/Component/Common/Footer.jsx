import React, { useEffect } from "react"
import { Field, Formik, Form } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Blocks } from 'react-loader-spinner';
import { useInView } from 'react-intersection-observer';
import { ittrainingDataSerivice } from "../../Services/dataService";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, getExploreCards, studentForm } from "../../Redux/functionsSlics";
import { Select } from "antd";
import { useContactDetails } from "../../Redux/rTKFunction";
import { Link, useNavigate } from "react-router-dom";

const Footer = ({homePage = false}) => {
    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const webCard = useSelector((state) => state.backendFunction.webCard);
    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);

    function categoryDetails(categoryDetails) {

        navigate("/course-category/" + categoryDetails.heading?.replace(/\s|\/+/g,'-'), { state: categoryDetails })
    }


    useEffect(() => {
        dispatch(fetchCards());
        dispatch(getExploreCards());
    }, [dispatch])

    async function traineeDetailsForm(values) {
        dispatch(studentForm(values));
    }

    const { ref: footerKeyFormRef, inView: isFooterKeyForm } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: footerMailFormRef, inView: isFooterMailForm } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: footerContentRef, inView: isFooterContent } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    function sendEmail(values) {
        console.log("trainee details", values)

    }
    function handleCourseDetails(course) {
       
        navigate("/course/" + course.courseName?.replace(/\s|\/+/g,'-'), { state: course });
    }

    return (
        <footer className={`${homePage ?  "  max-1200:pt-[15px] max-1023:pt-[17px]  " : "pt-[393px] max-649:pt-[230px]" }  `}>
            <div className="wrapper">
                <div className={` ${isFooterKeyForm && "animate__pulse"} `}
                    ref={footerKeyFormRef}
                    style={{ animationDuration: "2s" }}
                >
                    <div className="w-[40.2%] max-413:pt-[25px] max-413:pb-[35px] max-413:px-[12px] max-480:pt-[25px] max-480:pb-[44px] max-480:px-[25px] max-590:w-[95%] max-649:mt-[150px]  max-767:w-[77%] max-979:w-[80%]  max-1024:w-[51%] max-1024:pt-[25px] max-1024:pb-[44px] max-1024:px-[45px] max-1024:mt-0 max-1024:mb-[80px] max-1024:mx-auto  pt-[37px] pr-[69px] pb-[49px] pl-[52px] max-1200:w-[46%]  max-1200:pt-[35px] max-1200:pb-[49px] max-1200:pr-[50px] max-1200:pl-[35px]  relative  max-1400:pt-[37px] max-1400:pb-[48px] max-1400:px-[30px]  rounded-[31px] z-[10] shadow-footFormSahd" style={{ background: `url('/footer-form-bg.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '101%', backgroundPositionY: '0', backgroundColor: '#ffffff' }}>
                        <div className="w-[100%] max-1024:text-center ">
                            <h4 className="w-[100%] font-normal text-[28px] leading-[46px] ">
                                Get a free
                                <span className="font-[700] block">keystroke quote</span>
                            </h4>

                        </div>
                        <div className="mt-[20px] ">
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
                                {
                                    ({ isSubmitting, values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched }) =>
                                    (
                                        <form className="" onSubmit={handleSubmit}>
                                            <div className="relative   w-[100%] ">
                                                <div className="border-b-[1px] relative border-solid pb-1 border-[#cecece] ">
                                                    <img src="/Home/form-user-icon.svg" className="inline" />
                                                    <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} className="pl-[5px] text-[15px] max-1200:text-[13px] max-1200:leading-[19px]  font-[500] focus:outline-none focus:bg-[transparent] focus:placeholder:text-transparent w-[90%]" />

                                                </div>
                                                {errors?.name && touched?.name && <span className="text-[13px] absolute text-[#ff0000] ">*{errors.name}</span>}
                                            </div>
                                            <div className="relative  mt-5">
                                                <div className=" border-b-[1px]  border-solid border-[#cecece] pb-1">
                                                    <img src="/Home/form-email-icon.svg" className="inline" />
                                                    <input type="text" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px]  max-1200:text-[13px] max-1200:leading-[19px] font-[500] focus:outline-none focus:placeholder:text-transparent w-[90%]" />
                                                </div>
                                                {errors?.email && touched?.email && <span className=" text-[13px] absolute  text-[#ff0000] ">*{errors.email}</span>}
                                            </div>
                                            <div className="mt-5 w-[100%] relative">
                                                <div className=" border-b-[1px]  border-solid border-[#cecece] pb-1  ">
                                                    <img src="/Home/form-call-icon.svg" className="inline" />
                                                    <input type="number" name="phone" placeholder="Phone" onChange={handleChange} onBlur={handleBlur} minLength={10} maxLength={10} pattern="/d{10}" className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px] max-1200:text-[13px] max-1200:leading-[19px] font-[500] focus:outline-none  focus:placeholder:text-transparent  w-[90%]" />

                                                </div>
                                                {errors?.phone && touched?.phone && <span className=" text-[13px] absolute text-[#ff0000] ">*{errors.phone}</span>}
                                            </div>
                                            <div className="relative">
                                                <div className=" border-b-[1px] border-solid border-[#cecece] pb-1 mt-5">
                                                    <img src="/Home/form-course-icon.svg" className="inline" />
                                                    <Select
                                                        showSearch
                                                        defaultValue="Select Course"
                                                        style={{ width: "90%", border: "0px", cursor: "pointer" }}
                                                        onChange={(value) => setFieldValue("course", value)}
                                                        onBlur={() => { setFieldTouched('course', true) }}
                                                        className="selectBorder antSelector cursor-pointer pl-2 footer-form"

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
                                                </div>
                                                {errors?.course && touched?.course && <span className=" text-[13px] absolute  text-[#ff0000] ">*{errors.course}</span>}
                                            </div>

                                            <div className=" border-b-[1px] border-solid border-[#cecece] pb-1 mt-5">
                                                <img src="/Home/join-calendar.svg" className="inline" />
                                                <Select
                                                    showSearch
                                                    defaultValue="How soon you want to join IT Training?"
                                                    style={{ width: "90%", border: "0px", cursor: "pointer" }}
                                                    onChange={(value) => setFieldValue("joiningTime", value)}
                                                    onBlur={() => setFieldTouched("joiningTime", true)} // Manually set touched
                                                    className="selectBorder antSelector cursor-pointer pl-2 max-1200:text-[13px] max-1200:leading-[19px] footer-join-form"

                                                    options={[

                                                        { label: <span>This Week</span>, value: 'This Week' },
                                                        { label: <span>Upcoming Week</span>, value: 'Upcoming Week' },
                                                        { label: <span>In a month</span>, value: 'In a month' },

                                                    ]}
                                                />
                                            </div>
                                            <div className=" border-b-[1px] border-solid border-[#cecece] pb-1 mt-5">
                                                <img src="/Home/join-Message.svg" className="inline" />
                                                <input type="text" name="message" onChange={handleChange} placeholder="Type your message" className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px] max-1200:text-[13px] max-1200:leading-[19px] font-[500] focus:outline-none focus:placeholder:text-transparent w-[90%]" />

                                            </div>
                                            <div className="mt-5 p-0 box-border">
                                                <p className="leading-[21px] font-[400] text-[16px] ">
                                                    <button type="submit" disabled={isSubmitting} className="cursor-pointer  pt-[13px] pb-[13px] pl-[75px] pr-[75px] max-979:px-[88px] max-979:py-[10px] max-649:py-[10px] max-649:px-[65px] max-413:px-[58px] max-413:py-[9px]
                                           text-[16px] leading-[21px] inputGradient font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none ">
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
                                                    {/* <span className="w-[24px] h-[24px] absolute right-[-72px] bottom-[9px] mt-0 mb-0 ml-[24px] mr-[24px] "> </span> */}
                                                </p>

                                            </div>


                                        </form>

                                    )
                                }


                            </Formik>

                        </div>
                    </div>

                </div>
            </div>
           
            <div className="mt-[-405px] max-1024:mt-0">
                <div style={{ background: `url('/footer-newsletter-bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="pt-[42px] pb-[40px] pl-0 pr-0 bg-[#1aaef4e6]">
                        <div className="wrapper">
                            <div className={`w-[35%] max-480:w-[95%] max-413:w-[99%] max-590:w-[85%] max-649:w-[75%] max-1400:w-[37.2%]  max-1200:w-[45%] max-979:w-[65%]   max-1024:text-center max-1024:mx-auto  mr-[184px] max-1200:mr-[10px] ml-auto mt-0 mb-0 ${isFooterMailForm ? "transform duration-[2s]" : "transform translate-x-[30px] max-567:translate-x-[0px]"}`}
                                ref={footerMailFormRef}
                                style={{ animationDuration: "3s" }}
                            >
                                <div>
                                    <h4 className="text-[#ffffff] text-[24px] leading-[30px] font-[800]">Subscribe to our Newsletter</h4>
                                </div>
                                <div className="mt-[18px] ">
                                    <Formik
                                        initialValues={{ email: '' }}
                                        validate={(values) => {
                                            const errors = {};
                                            if (!values.email) errors.email = "Please Enter your Email"
                                            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Please Enter Valid Email";
                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                sendEmail(values);
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ isSubmitting, values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="relative">
                                                    <div className=" clearfix">
                                                        <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Email" className=" max-480:w-[68%] inline float-left pt-[10px] pb-[10px] pl-[23px] pr-[23px] max-1200:text-[13px] max-1200:leading-[19px] rounded-tl-[9px] rounded-bl-[9px] w-[78.9%] leading-[20px] font-[400] bg-[#ffffff] focus:outline-none focus:placeholder:text-transparent " />

                                                        <button type="submit" disabled={isSubmitting} className="  float-right absolute pt-[10.3px] w-[21.1%] max-1380:w-[23%] max-480:w-[32%] max-1024:w-[25%] right-0  text-[white] pr-[20px] pb-[11px] pl-[35.1px] text-[16px] rounded-tr-[9px] max-1200:text-[13px] max-1200:leading-[19px] rounded-br-[9px] leading-[19px] font-[600] " style={{ background: `url('/footer-newsletter-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '12%', backgroundPositionY: 'center', backgroundColor: "#111111" }}>
                                                            {isSubmitting ?
                                                                (
                                                                    <Blocks
                                                                        height="19"
                                                                        width="20"
                                                                        color="#4fa94d"
                                                                        ariaLabel="blocks-loading"
                                                                        wrapperStyle={{}}
                                                                        wrapperClass="blocks-wrapper"
                                                                        visible={true}
                                                                    />
                                                                ) : 'Submit'
                                                            }
                                                        </button>
                                                    </div>

                                                    {errors?.email && touched?.email && <span className="text-[13px] absolute left-0 bottom-[39px] font-[500] pt-[47px] text-[#ff0000] ">*{errors.email}</span>}
                                                </div>
                                            </form>
                                        )}

                                    </Formik>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="bg-[#202020] pt-[62px] pb-[42px] ">
                    <div className={`wrapper ${isFooterContent && "animate__fadeIn"} `}
                        ref={footerContentRef}
                        style={{ animationDuration: "1s" }}
                    >
                        <div className="clearfix max-979:text-center">
                            <div className="max-979:flex max-979:flex-col max-979:justify-center max-979:items-center pt-[252px] max-1024:pt-0 w-[44%] max-1200:pt-[180] max-1200:pb-[30px] max-1200:px-0 max-1200:w-[100%] max-1400:w-[42%] max-1024:w-[100%] max-1024:mx-auto   float-left max-1024:float-none ">
                                <figure className="m-0 max-979:mx-auto ">
                                    <a className="text-[#000000] " href="/">
                                        <img src="/footer-logo.svg" alt="Top IT Training Indore Coaching Class Institute" />
                                    </a>

                                </figure>

                                <div className="mt-[22px] w-[75%]  ">
                                    <a href="https://goo.gl/maps/VUxpJgQX4daJNyLDA" target="_blank" className="max-480:pl-[15px] max-979:w-[65%] max-767:w-[75%] max-649:w-[85%] max-590:w-[100%] inline-block text-[14px] leading-[28px] cursor-pointer font-[400] text-[#ffffff] pl-[28px] max-590:pl-[10px] hover:text-[#9c9c9c] transition-all delay-150 ease-linear  " style={{ background: `url('/footer-location-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '15%' }}>

                                        {contactUsData?.data?.officeAddress}
                                    </a>

                                </div>
                                <div className="mt-[42px] flex max-480:flex-col max-480:mt-[20px] max-480:mb-[20px]  ">
                                    <div className="flex justify-center items-center ">
                                        <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Follow us on:</h6>

                                    </div>
                                    <div className="ml-[16px] flex gap-2 ">
                                        <a href="https://www.facebook.com/ittrainingindore?ref=hl" target="_blank" className="w-[54px] h-[54px] max-1200:w-[35px] max-1200:h-[35px] flex justify-center items-center  text-[18px] z-[1] relative  overflow-hidden text-center hover:text-[#009ce5] rounded-[50%] text-[#ffffff] socialIconFooter">

                                            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "19px", fontWeight: 400 }} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/it-training-indore" target="_blank" className="w-[54px] h-[54px] max-1200:w-[35px] max-1200:h-[35px]  flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "19px", fontWeight: 400 }} />
                                        </a>
                                        <a href="https://www.instagram.com/ittrainingindore/" target="_blank" className="w-[54px] h-[54px] max-1200:w-[35px] max-1200:h-[35px] flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative overflow-hidden text-[#ffffff] socialIconFooter">

                                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "19px", fontWeight: 400 }} />
                                        </a>
                                        <a href="https://twitter.com/ITIndore" target="_blank" className="w-[54px] h-[54px] max-1200:w-[35px] max-1200:h-[35px]  flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "19px", fontWeight: 400 }} />

                                        </a>
                                        <a href="https://www.pinterest.com/ittrainingindor/" target="_blank" className="w-[54px] h-[54px] max-1200:w-[35px] max-1200:h-[35px]  flex justify-center items-center  text-[18px] ml-[5px] text-center  hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                            <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "19px", fontWeight: 400 }} />
                                        </a>

                                    </div>

                                </div>


                            </div>

                            <div className="max-649:hidden w-[18%] max-979:w-[32%] max-979:text-center max-979:mt-[65px]  max-1200:w-[32%] pr-[24px] pl-[24px] max-1200:pl-0 max-1321:w-[19%] max-1321:py-0 max-1321:px-[14px] float-left">
                                <div className=" ">
                                    <h6 className="text-[18px] leading-[23px] font-[700] text-[#fff] ">Categories</h6>

                                </div>
                                <div>
                                    <div className="flex flex-col max-979:justify-center max-979:items-center">
                                        {
                                            exploreCat?.map((category, index) =>
                                                <button onClick={() => categoryDetails(category)} key={index}  className="text-[#9c9c9c] text-start max-979:text-center hover:text-[#ffffff] transition-all delay-75 ease-linear  mt-[30px]" >
                                                    {category?.heading}
                                                </button>
                                            
                                            )
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className="max-649:hidden w-[18%] max-979:w-[32%] max-979:text-center max-979:mt-[65px] max-1200:w-[32%] max-1321:w-[19%]  max-1321:py-0 max-1321:px-[14px] pt-0 pb-0 pl-[24px] pr-[24px] float-left">
                                <div className=" ">
                                    <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Popular Courses</h6>
                                </div>
                                <div>
                                    <div className="m-0 flex flex-col max-979:justify-center max-979:items-center ">

                                        {
                                            webCard?.slice(webCard.length - 8, webCard.length).reverse().map((course, index) => (
                                               
                                                    <button onClick={()=>handleCourseDetails(course)} key={index} className="mt-[30px] text-start max-979:text-center text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                        {course?.courseName}
                                                    </button>
                                               

                                            ))
                                        }                                                                       
                                    </div>
                                </div>
                            </div>
                            <div className="max-649:hidden w-[18%] max-979:w-[32%] max-979:text-center max-979:mt-[65px] pt-0 pb-0 pl-[24px] pr-[24px] max-1200:w-[32%] max-1321:w-[19%] max-1321:py-0 max-1321:px-[14px] float-left">
                                <div className="mb-[32px] ">
                                    <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Our Menu</h6>
                                </div>
                                <div>
                                    <ul className="m-0">
                                        <li className="mt-[30px] ">
                                            <Link to="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/courses" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Courses
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/about-us" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/blogs" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Blogs
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/testimonials" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/contact-us" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="mt-[30px] ">
                                            <Link to="/sitemap" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                                Sitemap
                                            </Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-[#2e2e2e] pt-[23px] pb-[23px] mt-[-10px] border-t-[1px] border-[#fff] border-opacity-25">
                    <div className="wrapper text-center">
                        <p className="text-[14px] leading-[19px] font-[400] text-[#ffffff] ">
                            © {new Date().getFullYear()} <Link to="/" className="hover:text-[#c4c4c4] transition-all ease-linear delay-75">IT Training Indore</Link> Center for Excellence. All Rights Reserved.

                        </p>

                    </div>

                </div>

            </div>
        </footer>
    )


}
export default Footer;