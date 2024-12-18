import React from "react";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Select } from "antd";
import { Blocks } from "react-loader-spinner";
import Footer from "./Common/Footer";
import CounterPage from "./Common/CounterPage";
import { useSelector, useDispatch } from "react-redux";
import { studentForm } from "../Redux/functionsSlics";

const Contact = () => {

    const dispatch = useDispatch();
    async function traineeDetailsForm(values) {
        dispatch(studentForm(values));
    }
    //const messageBackend = useSelector((state) => state.backendFunction.studentFormMessage);

    return (
        <div>
            <Navbar />
            <PageBanner heading={"Contact Us"} img={"/Contact_IT_Training_Indore.jpg"} />

            <section className="py-[80px] ">
                <div className="wrapper">
                    <div className="text-center">
                        <h3>Your One Click</h3>
                        <h4 className="text-[#1AAEF4] text-[24px] leading-[30px] my-[20px] ">Will connect your career to the bright FUTURE!</h4>

                    </div>
                    <div className="w-[92%] my-[10px] mx-auto text-center">
                        <p>
                            <strong><Link to='/' className="hover:text-[#1AAEF4] transition-all duration-300 ease-out">IT Training Indore</Link></strong> trainers and experts have many years of real-time work experience in their domain. Our trainer will teach in such an easy way that anyone can learn easily. The emphasis is placed on learning core techniques and principles to create a solid foundation. We concentrate on live projects with real examples. All these
                            <strong> <Link to='/courses' className="hover:text-[#1AAEF4] transition-all duration-300 ease-out"> online courses </Link></strong> are accompanied with live project implementation.
                        </p>
                    </div>

                    <div className="mt-[92px] flex ">
                        <div className="pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">
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
                                        Office No. 217-218, 3rd Floor, Onam Plaza, Besides Industry house, Infront of iBus Stop, New Palasia, Indore (M.P.), 452001, India
                                    </a>
                                </p>


                            </div>

                        </div>
                        <div className="pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">

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
                                    <li className="my-[13px] ">Call On: <a href="tel: +91 8269600400" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out">+91 8269600400</a></li><li className="my-[13px] ">Email Us: <a href="mailto: info@ittrainingindore.in" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out">info@ittrainingindore.in</a></li>
                                </ul>


                            </div>

                        </div>
                        <div className="pt-[100px] pb-[23px] pr-[19px] pl-[20px] rounded-[21px] shadow-contactUsCardShad w-[31.3%] my-0 ml-0 mr-[2%]  ">

                            <div>
                                <figure className="h-[92px] w-[92px] leading-[120px] bg-[#ece3ff] rounded-[50%] mt-[-140px] mx-auto flex justify-center items-center">
                                    <img src="/contact-us-timing.svg" />
                                </figure>
                            </div>
                            <div className="text-center mt-[40px] ">
                                <h6>Office Timing</h6>
                            </div>
                            <div className="mt-[15px] text-center ">
                                <p>
                                    Morning 10:00 am to 07:00 pm <br /> Saturday and Sunday Off
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f3fbff]  mb-0 mx-0 pb-[40px]  flex   ">
                <div className="w-[50%] h-[740px]">
               
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.991830249862!2d75.88581821547166!3d22.728545035102695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a855d2cb1f%3A0x1c7f9782f7ab421c!2sIT%20Training%20Indore!5e0!3m2!1sen!2sin!4v1648556231289!5m2!1sen!2sin" width="600" height="450" style={{ border: "0px", width: "100%", height: "795.75px", }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-origwidth="600" data-origheight="450"></iframe>
               
                </div>
                <div className="w-[43%]">
                     <div className=" pt-[62px] pb-[68px] px-0 ml-[60px]">
                    <div className="w-[75%]">
                        <div>
                            <h3>Get in Touch</h3>
                        </div>
                        <div className="mt-[14px] ">
                            <p className="font-[500]">We read each e-mail and reply within a maximum of 2 business days. Please enter correct e-mail address so that we can back to you.</p>
                        </div>
                        <div className="mt-[42px] ">
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
                                        <div className="flex justify-between mb-[16px] ">
                                            <div className="w-[48%] relative " >
                                                <input type="text" placeholder="Name" name="name" onBlur={handleBlur} onChange={handleChange} value={values.name} className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none" />
                                                {errors?.name && touched?.name && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.name}</span>}
                                            </div>
                                            <div className="w-[48%] relative">
                                                <input type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email} placeholder="Email" className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none " />
                                                {errors?.email && touched?.email && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.email}</span>}

                                            </div>
                                        </div>
                                        <div className="flex justify-between mb-[16px] ">
                                            <div className="w-[48%] relative " >
                                                <input placeholder="Phone" maxLength={10} minLength={10} name="phone" type="number" onBlur={handleBlur} onChange={handleChange} className="py-[13px] px-[15px] w-[100%] rounded-[8px] shadow-contactUsForminput text-[14px] leading-[20px] font-[500] bg-[#fff] focus:outline-none " />
                                                {errors?.phone && touched?.phone && <span className=" text-[13px] absolute left-0 top-[-15px]  text-[#ff0000] ">*{errors.phone}</span>}

                                            </div>
                                            <div className="w-[48%] relative">
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

