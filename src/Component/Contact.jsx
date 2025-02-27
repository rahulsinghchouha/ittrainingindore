import React from "react";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { Formik } from "formik";
import { Select } from "antd";
import { Blocks } from "react-loader-spinner";
import Footer from "./Common/Footer";
import CounterPage from "./Common/CounterPage";
import { useSelector, useDispatch } from "react-redux";
import { studentForm } from "../Redux/functionsSlics";
import { useInView } from "react-intersection-observer";
import { ittrainingDataSerivice } from "../Services/dataService";
import { useEffect, useState } from "react";
//import DOMPurify from "dompurify";
import convertAnchorToLink from "./Common/ConvertAnchorToLink";


const Contact = () => {

    const dispatch = useDispatch();
    async function traineeDetailsForm(values) {
        dispatch(studentForm(values));
    }

    const [contactUs, setContactUs] = useState();

    async function getContactUs() {
        try {
            const response = await ittrainingDataSerivice.getContactUs();

            if (response.status === 200) {
                setContactUs(response.data.data);
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContactUs();
    }, [])


    const { ref: yourOneClick, inView: isYourOneClick } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    const { ref: contactCard, inView: isContactCard } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const { ref: getInTouchForm, inView: isGetInTouchForm } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    // Destructure the data object to extract the required properties


    return (
        <div>
            <Navbar />
            <PageBanner heading={"Contact Us"} img={`${ittrainingDataSerivice.backendUrl}/${contactUs?.bannerImg}`} />

            <section className="py-[80px] px-0 max-1024:pt-[80px] max-979:pt-[45px]  ">
                <div className="wrapper">
                    <div className={`contactUSRespons hoverBlue text-center ${isYourOneClick ? " transform translate-y-0 opacity-1 ease-in duration-500 " : "transform translate-y-[-15px] opacity-0"}`}
                        ref={yourOneClick}
                        style={{ animationDuration: "5s" }}
                    >
                        {convertAnchorToLink(String(contactUs?.contactUsHead))}

                  </div>

                    <div className={`contactUsCard  mt-[92px] flex max-1024:flex-wrap max-1024:justify-center  ${isContactCard ? "animate__fadeIn" : ""}`}
                        ref={contactCard}
                        style={{ animationDuration: "3s" }}
                    >
                        <div className="max-480:w-[88%] max-567:w-[82%] max-649:w-[70%] max-767:px-[12px] max-979:w-[60%] max-979:mr-0 max-1024:mr-[7%] max-1024:mb-[71px] max-1024:w-[42%] pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">
                            <div>
                                <figure className="h-[92px] w-[92px] leading-[120px] bg-[#fff7db] rounded-[50%] mt-[-140px] mx-auto flex justify-center items-center">
                                    <img src="/contact-us-office-address.svg" />
                                </figure>
                            </div>
                            <div className="text-center mt-[40px] ">
                                <h6>Office Address</h6>
                            </div>
                            <div className="mt-[15px] text-center ">
                                <p>
                                    <a className="hover:text-[#009ce5] transition-all duration-300 ease-out cursor-pointer">
                                        {contactUs?.officeAddress}
                                    </a>
                                </p>


                            </div>

                        </div>
                        <div className="max-480:w-[88%] max-567:w-[82%] max-649:w-[70%] max-767:px-[12px] max-979:w-[60%] max-979:mr-0 max-1024:mb-[71px] max-1024:w-[42%] pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">

                            <div>
                                <figure className="h-[92px] w-[92px] leading-[120px] bg-[#e3ffe0] rounded-[50%] mt-[-140px] mx-auto flex justify-center items-center">
                                    <img src="/contact-us-phone.svg" />
                                </figure>
                            </div>
                            <div className="text-center mt-[40px] ">
                                <h6>Contact Details</h6>
                            </div>
                            <div className="mt-[15px] text-center ">
                                <ul>
                                    <li className="my-[13px] ">Call On: <a href="tel: +91 8269600400" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out"

                                    >+91 {contactUs?.contactUsNumber}</a></li><li className="my-[13px] ">Email Us: <a href={`mailto: ${contactUs?.contactUsEmail}`} className="hover:text-[#1AAEF4] transition-all duration-300 ease-out">{contactUs?.contactUsEmail}</a></li>
                                </ul>


                            </div>

                        </div>
                        <div className="max-480:w-[88%] max-567:w-[82%] max-649:w-[70%] max-767:px-[12px] max-979:w-[60%] max-979:mr-0 max-1024:w-[42%] pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">

                            <div>
                                <figure className="h-[92px] w-[92px] leading-[120px] bg-[#ece3ff] rounded-[50%] mt-[-140px] mx-auto flex justify-center items-center">
                                    <img src="/contact-us-timing.svg" />
                                </figure>
                            </div>
                            <div className="text-center mt-[40px] ">
                                <h6>Office Timing</h6>
                            </div>
                            <div className="mt-[15px] text-center ">
                                <p className="w-[70%] max-374:w-[100%] max-480:w-[85%] max-800:w-[72%] max-979:w-[61%] max-1024:w-[85%] max-1321:w-[90%] max-1200:w-[95%] mx-auto">
                                    {contactUs?.officeTiming}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f3fbff]  mb-0 mx-0 pb-[40px] max-1024:pb-0  flex max-1024:flex-col  ">
                <div className="w-[50%] max-1024:w-[100%] max-1024:h-[500px] max-649:h-[450px] max-567:h-[400px] ">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.991830249862!2d75.88581821547166!3d22.728545035102695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a855d2cb1f%3A0x1c7f9782f7ab421c!2sIT%20Training%20Indore!5e0!3m2!1sen!2sin!4v1648556231289!5m2!1sen!2sin" width="600" height="450" style={{ border: "0px", width: "100%", height: "100%", }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-origwidth="600" data-origheight="450"></iframe>

                </div>
                <div className="w-[44%] max-567:w-[95%]  max-1024:w-[98%] max-1321:w-[46%] max-1200:w-[49%]">
                    <div className=" contactUsCard pt-[62px] pb-[68px] max-1024:pb-[40px] px-0 ml-[60px] max-1200:ml-[30px] max-1321:ml-[40px] max-1321:pt-[42px]">
                        <div className={`w-[80%] max-1680:w-[90%] max-1400:w-[100%] ${isGetInTouchForm ? "transform translate-x-0 opacity-[1] duration-1000" : "transform translate-x-5 opacity-0"}`}
                            ref={getInTouchForm}
                            style={{ animationDuration: "5s" }}
                        >
                            <div>
                                <h3>Get in Touch</h3>
                            </div>
                            <div className="mt-[14px] ">
                                <p className="font-[500]">We read each e-mail and reply within a maximum of 2 business days. Please enter correct e-mail address so that we can back to you.</p>
                            </div>
                            <div className={`mt-[42px]  `}

                            >
                                <Formik
                                    initialValues={{ name: '', email: '', phone: '', course: '', joiningTime: '', message: '' }}
                                    validate={(values) => {
                                        const errors = {};

                                        if (!values.name) errors.name = "Please Enter your name";
                                        if (!values.email) errors.email = "Please Enter your email";
                                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Please Enter Valid Email";
                                        if (!values.phone) errors.phone = "Please Enter your number";
                                        if (!values.course) errors.course = "Select At least One Course"

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {

                                        setTimeout(() => {
                                            traineeDetailsForm(values);
                                            setSubmitting(false);
                                        }, 400);

                                    }}

                                >
                                    {({ isSubmitting, errors, values, touched, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex max-567:flex-col justify-between mb-[16px] ">
                                                <div className="w-[48%] relative max-567:w-[100%] max-567:mb-[20px]  " >
                                                    <input type="text" placeholder="Name" name="name" onBlur={handleBlur} onChange={handleChange} value={values.name} className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none" />
                                                    {errors?.name && touched?.name && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.name}</span>}
                                                </div>
                                                <div className="w-[48%] relative max-567:w-[100%] ">
                                                    <input type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email} placeholder="Email" className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none " />
                                                    {errors?.email && touched?.email && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.email}</span>}

                                                </div>
                                            </div>
                                            <div className="flex max-567:flex-col justify-between mb-[20px] ">
                                                <div className="w-[48%] max-567:w-[100%] max-567:mb-[30px] relative " >
                                                    <input placeholder="Phone" maxLength={10} minLength={10} name="phone" type="number" onBlur={handleBlur} onChange={handleChange} className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none " />
                                                    {errors?.phone && touched?.phone && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.phone}</span>}

                                                </div>
                                                <div className="w-[48%] max-567:w-[100%] relative">
                                                    <Select
                                                        showSearch
                                                        defaultValue="Select Course"
                                                        style={{ width: "100%", border: "0px", cursor: "pointer", }}
                                                        onChange={(value) => setFieldValue("course", value)}
                                                        values={values.course}
                                                        className="selectBorder antSelector cursor-pointer contact-us"
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
                                                    {errors?.course && touched?.course && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.course}</span>}

                                                </div>
                                            </div>
                                            <div className="mb-[16px] ">
                                                <Select
                                                    showSearch
                                                    defaultValue="How soon you want to join IT Training?"
                                                    style={{ width: "100%", border: "0px", cursor: "pointer" }}
                                                    onChange={(value) => setFieldValue("joiningTime", value)}
                                                    values={values.joiningTime}
                                                    className="selectBorder antSelector cursor-pointer contact-us"
                                                    options={[

                                                        { label: <span>This Week</span>, value: 'This Week' },
                                                        { label: <span>Upcoming Week</span>, value: 'Upcoming Week' },
                                                        { label: <span>In a month</span>, value: 'In a month' },
                                                    ]}
                                                />
                                            </div>
                                            <div className="w-[100%] border-0 m-0 ">
                                                <p>
                                                    <textarea rows="10" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} placeholder="Type your message" className="py-[14px] px-[15px] shadow-contactUsForminput w-[100%] text-[14px] leading-[20px] font-[500] border-0 focus:outline-none">

                                                    </textarea>
                                                </p>
                                            </div>
                                            <div>
                                                <div className="mt-5 p-0 box-border">
                                                    <p className="leading-[21px] font-[400] text-[16px] ">
                                                        <button type="submit" className="cursor-pointer  pt-[13px] pb-[13px] pl-[75px] pr-[75px]
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

                                                    </p>
                                                </div>
                                            </div>
                                        </form>

                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <CounterPage />
            <Footer />
        </div>
    )









}

export default Contact;

