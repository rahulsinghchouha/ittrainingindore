import React, { useEffect } from "react"
import { Field, Formik, Form } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Blocks } from 'react-loader-spinner';
import { useInView } from 'react-intersection-observer';
import { ittrainingDataSerivice } from "../../Services/dataService";
import { useDispatch,useSelector } from "react-redux";
import { fetchCards, getExploreCards, studentForm } from "../../Redux/functionsSlics";
import { Select } from "antd";
import { useContactDetails } from "../../Redux/rTKFunction";

const Footer = () =>{
    const { data: contactUsData, error, isLoading } = useContactDetails(); //using the hook to fetch the data

    const dispatch = useDispatch();


    
    const webCard = useSelector((state) => state.backendFunction.webCard);
    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);




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

return(
  <footer className="pt-[393px] ">
  <div className="wrapper">
      <div className={` ${isFooterKeyForm && "animate__pulse"} `}
          ref={footerKeyFormRef}
          style={{ animationDuration: "2s" }}
      >
          <div className="w-[40.2%] pt-[37px] pr-[69px] pb-[49px] relative pl-[52px]  rounded-[31px] z-[10] shadow-footFormSahd" style={{ background: `url('/footer-form-bg.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '101%', backgroundPositionY: '0', backgroundColor: '#ffffff' }}>
              <div className="w-[100%] ">
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
                                          <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} className="pl-[5px]  font-[500] focus:outline-none focus:bg-[transparent] focus:placeholder:text-transparent w-[90%]" />

                                      </div>
                                      {errors?.name && touched?.name && <span className="text-[13px] absolute text-[#ff0000] ">*{errors.name}</span>}
                                  </div>
                                  <div className="relative  mt-5">
                                      <div className=" border-b-[1px]  border-solid border-[#cecece] pb-1">
                                          <img src="/Home/form-email-icon.svg" className="inline" />
                                          <input type="text" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px] font-[500] focus:outline-none focus:placeholder:text-transparent w-[90%]" />
                                      </div>
                                      {errors?.email && touched?.email && <span className=" text-[13px] absolute  text-[#ff0000] ">*{errors.email}</span>}
                                  </div>
                                  <div className="mt-5 w-[100%] relative">
                                      <div className=" border-b-[1px]  border-solid border-[#cecece] pb-1  ">
                                          <img src="/Home/form-call-icon.svg" className="inline" />
                                          <input type="number" name="phone" placeholder="Phone" onChange={handleChange} onBlur={handleBlur} minLength={10} maxLength={10} pattern="/d{10}" className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px] font-[500] focus:outline-none  focus:placeholder:text-transparent  w-[90%]" />

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
                                              className="selectBorder antSelector cursor-pointer pl-2"

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
                                          className="selectBorder antSelector cursor-pointer pl-2"

                                          options={[

                                              { label: <span>This Week</span>, value: 'This Week' },
                                              { label: <span>Upcoming Week</span>, value: 'Upcoming Week' },
                                              { label: <span>In a month</span>, value: 'In a month' },

                                          ]}
                                      />
                                  </div>
                                  <div className=" border-b-[1px] border-solid border-[#cecece] pb-1 mt-5">
                                      <img src="/Home/join-Message.svg" className="inline" />
                                      <input type="text" name="message" onChange={handleChange} placeholder="Type your message" className="pl-[5px] pt-[10px] pb-[6px] pr-[10px] text-[15px] font-[500] focus:outline-none focus:placeholder:text-transparent w-[90%]" />

                                  </div>
                                  <div className="mt-5 p-0 box-border">
                                      <p className="leading-[21px] font-[400] text-[16px] ">
                                          <button type="submit" disabled={isSubmitting} className="cursor-pointer  pt-[13px] pb-[13px] pl-[75px] pr-[75px]
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
                                          <span className="w-[24px] h-[24px] absolute right-[-72px] bottom-[9px] mt-0 mb-0 ml-[24px] mr-[24px] "> </span>
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
  <div>

  </div>

  <div className="mt-[-405px]">
      <div style={{ background: `url('/footer-newsletter-bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="pt-[42px] pb-[40px] pl-0 pr-0 bg-[#1aaef4e6]">
              <div className="wrapper">
                  <div className={`w-[35%] mr-[184px] ml-auto mt-0 mb-0 ${isFooterMailForm ? "transform duration-[2s]" : "transform translate-x-[30px] "}`}
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
                                              <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Email" className="inline float-left pt-[10px] pb-[10px] pl-[23px] pr-[23px] rounded-tl-[9px] rounded-bl-[9px] w-[78.9%] leading-[20px] font-[400] bg-[#ffffff] focus:outline-none focus:placeholder:text-transparent " />

                                              <button type="submit" disabled={isSubmitting} className="  float-right absolute pt-[10.3px] text-[white] hover:bg-[] pr-[20px] pb-[11px] pl-[35.1px] text-[16px] rounded-tr-[9px] rounded-br-[9px] leading-[19px] font-[600] " style={{ background: `url('/footer-newsletter-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '12%', backgroundPositionY: 'center', backgroundColor: "#111111" }}>
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
                                                      ) : 'Send'
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
              <div className="clearfix">
                  <div className="pt-[252px] w-[44%]  float-left ">
                      <figure className="m-0 ">
                          <a className="text-[#000000] " href="/">
                              <img src="/footer-logo.svg" alt="Top IT Training Indore Coaching Class Institute" />
                          </a>

                      </figure>

                      <div className="mt-[22px] w-[75%] ">
                          <a target="_blank" className=" inline-block text-[14px] leading-[28px] cursor-pointer font-[400] text-[#ffffff] pl-[28px] hover:text-[#9c9c9c] transition-all delay-150 ease-linear  " style={{ background: `url('/footer-location-icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '15%' }}>

                              Office No. 217-218, 3rd Floor, Onam Plaza, Beside Industry house, In front of iBus Stop, New Palasia, Indore (M.P.) 452001, India
                          </a>

                      </div>
                      <div className="mt-[42px] flex  ">
                          <div className="flex justify-center items-center ">
                              <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Follow us on:</h6>

                          </div>
                          <div className="ml-[16px] flex gap-2 ">
                              <a href="/" className="w-[54px] h-[54px] flex justify-center items-center  text-[18px] z-[1] relative  overflow-hidden text-center hover:text-[#009ce5] rounded-[50%] text-[#ffffff] socialIconFooter">

                                  <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "19px", fontWeight: 400 }} />
                              </a>
                              <a href="/" className="w-[54px] h-[54px]  flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                  <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "19px", fontWeight: 400 }} />
                              </a>
                              <a href="/" className="w-[54px] h-[54px] flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative overflow-hidden text-[#ffffff] socialIconFooter">

                                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "19px", fontWeight: 400 }} />
                              </a>
                              <a href="/" className="w-[54px] h-[54px]  flex justify-center items-center  text-[18px] ml-[5px] text-center hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "19px", fontWeight: 400 }} />

                              </a>
                              <a href="/" className="w-[54px] h-[54px]  flex justify-center items-center  text-[18px] ml-[5px] text-center  hover:text-[#009ce5] rounded-[50%] z-[1] relative  overflow-hidden text-[#ffffff] socialIconFooter">

                                  <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "19px", fontWeight: 400 }} />
                              </a>

                          </div>

                      </div>


                  </div>

                  <div className="w-[18%] pr-[24px] pl-[24px] float-left">
                      <div className="mb-[32px] ">
                          <h6 className="text-[18px] leading-[23px] font-[700] text-[#fff] ">Categories</h6>

                      </div>
                      <div>
                          <ul>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear " >
                                      Graphic Designing
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Web Designing
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      UI/UX Designing
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Digital Marketing
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Web Development
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Animation
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Mobile App Development
                                  </a>
                              </li>
                              <li className="mt-[30px]">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear" >
                                      Software App Development
                                  </a>
                              </li>
                          </ul>
                      </div>

                  </div>
                  <div className="w-[18%] pt-0 pb-0 pl-[24px] pr-[24px] float-left">
                      <div className="mb-[32px] ">
                          <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Popular Courses</h6>
                      </div>
                      <div>
                          <ul className="m-0">
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Basic Web Designing Course
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Basic PHP Course
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Digital Marketing Course in Indore
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Advance PHP Training
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Graphic Design Course in Indore
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Web API Development
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Cake PHP Course
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      C, C++ Training
                                  </a>
                              </li>

                          </ul>

                      </div>
                  </div>
                  <div className="w-[18%] pt-0 pb-0 pl-[24px] pr-[24px] float-left">
                      <div className="mb-[32px] ">
                          <h6 className="text-[#ffffff] text-[18px] leading-[23px] font-[700] ">Our Menu</h6>
                      </div>
                      <div>
                          <ul className="m-0">
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Home
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Courses
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      About Us
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Blogs
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Testimonials
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Contact Us
                                  </a>
                              </li>
                              <li className="mt-[30px] ">
                                  <a href="/" className="text-[#9c9c9c] hover:text-[#ffffff] transition-all delay-75 ease-linear">
                                      Sitemap
                                  </a>
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
                  © 2024 <a href="/" className="hover:text-[#c4c4c4] transition-all ease-linear delay-75">IT Training Indore</a> Center for Excellence. All Rights Reserved.

              </p>

          </div>

      </div>

  </div>
</footer>
)


}
export default Footer;