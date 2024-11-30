import { Field, Formik, Form } from "formik";
import React, { useRef, useState } from "react";
import { Select } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


function Banner() {

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);



    function setActive1() { setIsActive1(true); setIsActive2(false); setIsActive3(false); setIsActive4(false); setIsActive5(false); setIsActive6(false); }

    function setActive2() { setIsActive1(false); setIsActive2(true); setIsActive3(false); setIsActive4(false); setIsActive5(false); setIsActive6(false); }

    function setActive3() { setIsActive1(false); setIsActive2(false); setIsActive3(true); setIsActive4(false); setIsActive5(false); setIsActive6(false); }

    function setActive4() { setIsActive1(false); setIsActive2(false); setIsActive3(false); setIsActive4(true); setIsActive5(false); setIsActive6(false); }

    function setActive5() { setIsActive1(false); setIsActive2(false); setIsActive3(false); setIsActive4(false); setIsActive5(true); setIsActive6(false); }

    function setActive6() { setIsActive1(false); setIsActive2(false); setIsActive3(false); setIsActive4(false); setIsActive5(false); setIsActive6(true); }

    const webCard = [

        {
            id: 1,
            image: "/Home/best-web-api-development-coaching-class-indore-1-414x214.jpg",
            button1: "Web Development",
            heading: "Web API Development",
            para: "In our Web API Development Course, we teach the basics of creating. . .",
            button2: "Details"
        },
        {
            id: 2,
            image: "/Home/best-cake-php-coaching-class-indore-414x214.jpg",
            button1: "Web Development",
            heading: "Cake PHP Course",
            para: "In IT Training Indore, we provide you best cake php course training. . .",
            button2: "Details"
        },

        {
            id: 3,
            image: "/Home/best-vue-js-coaching-class-indore-414x214.jpg",
            button1: "Web Development",
            heading: "Vue.js Course",
            para: "IT Training Indore is the best Vue JS development training Institute in. . .",
            button2: "Details"
        },

        {
            id: 4,
            image: "/Home/best-codeigniter-course-coaching-class-indore-414x214.jpg",
            button1: "Web Development",
            heading: "Codelgniter Training Course",
            para: "Uplift your web development career with codeIgniter training course at IT Training. . .",
            button2: "Details"
        },
        {
            id: 5,
            image: "/Home/best-laravel-course-coaching-class-414x214.jpg",
            button1: "Web Development",
            heading: "Laravel PHP Course",
            para: "Laravel is a popular open-source PHP framework. And we provide complete laravel. . .",
            button2: "Details"
        },
        {
            id: 6,
            image: "/Home/Top-shopify-development-training-course-in-indore-414x214.jpg",
            button1: "Web Development",
            heading: "Shopify Development Course",
            para: "Shopify is a popular e-commerce development platform, where we can create and. . .",
            button2: "Details"
        }

    ]

    const stuPlaced = [
        {
            img: '/Home/2.jpg',
            para: 'It is the right place to kick start your career in the managment and HR field. Students who want their future in Human Resource Management must get education from this institute. The mentors, course material, and facilities are all top-notch, and the support staff are always willing to go the extra mile to ensure a positive learning experience.',
            name: 'Sheetal Rana',
            position: 'HR Intern'
        },
        {
            img: '/Home/Mohit.jpg',
            para: 'IT Training Indore is an excellent place to become trained and professional in your career life. The placement process is also very good. I highly recommend this institute for a good career in the IT field. One area for improvement could be more personalised attention from mentors, particularly during the more challenging portions of the course.',
            name: 'Mohit Singh',
            position: 'Web Developer'
        },
        {
            img: "/Home/Ritu-Dhanotiya.jpg",
            para: 'IT Training Indore, well the name itself is enough in the industry circles because it is synonymous with quality. It is a very good platform to give jump start to your career. Placement cell in IT Training Indore is quite good. They put efforts to make you skilled and trained you for your dream job. I would highly recommend everyone looking to improve their IT skills.',
            name: 'Ritu Dhanotiya',
            position: 'Software Quality Tester'
        },
        {
            img: "/Home/2-1.jpg",
            para: "I thoroughly enjoyed the course that make curious about the new technologies and updates, also how we can uplift our skills to get result in better outcomes. I thought the course had good content, pace and delivery. The trainers are highly experienced. It’s the right choice for the freshers to start your career with IT Training Indore.",
            name: "Ankesh Gupta",
            position: 'Web Developer'
        }
    ]
    //partners image 

    const partnerImage = [
        "/Partners_1.png",
        "/Partners_2.png",
        "/Partners_3.png",
        "/Partners_4.png",
        "/Partners_1.png",
        "/Partners_2.png",
        "/Partners_3.png",
        "/Partners_4.png",
    ]

    // for swiper reference
    const swiperRef = useRef(null);
    const partnerSwipRef = useRef(null);

    const handleSearch = () => {
    }

    return (
        <div>
            <div className="home-banner-wr">
                <section className="wrapper">
                    <div className="box-border flex justify-between ">
                        <div className="w-[47.5%] pt-[16px] pl-0 pr-0 pb-0">
                            <div>
                                <h4 className="get-course-now text-[14px] leading-[20px] text-[#1aaef4] font-[400] pr-[70px] inline-block">GET COURSE NOW</h4>
                            </div>
                            <div className="mt-[28px] ">
                                <h1 className=" text-[2.6em] leading-[1.3em] block font-[800] text-[#000000] ">
                                    Unlock
                                    <span className="text-[#1aaef4]"> Your Potential </span>
                                    Choose the Best
                                    <span className="text-[#1aaef4]"> Software Training </span>
                                    Institute in Indore

                                </h1>


                            </div>
                            <div className="mt-[32px] box-border">
                                <p className="text-[16px] leading-[34px] font-[400] tracking-normal">
                                    Welcome to IT Training Indore, your premier destination for comprehensive IT training and placements in Indore.
                                </p>
                            </div>
                            {/* banner search form */}
                            <div className="w-[100%] mt-[16px] ">
                                <Formik
                                    initialValues={{ query: "" }}
                                    onSubmit={(values) => handleSearch(values)}

                                >
                                    {() => (
                                        <form className="w-[98%] flex ">
                                            <input type="text" name="query" placeholder="Search Course" className="bg-[#ffffff] py-[17px]  px-[30px] w-[83%] rounded-tl-[27px] rounded-r-[0px] rounded-b-[0px] rounded-l-[27px] search-shadow focus:outline-none" />
                                            <button className="  bg-[#1aaef4] w-[17%] rounded-r-full items-center cursor-pointer ">
                                                <input className="search-submit ml-8 focus:outline-none cursor-pointer " />
                                            </button>

                                        </form>

                                    )}
                                </Formik>

                            </div>
                            {/* popular searches course link */}
                            <div className="mt-[25px]">
                                <div className="inline-block">
                                    <span className="text-[16px] leading-[21px] text-[#000000] font-[600] ">Popular Searches</span>

                                </div>
                                <div className="ml-[10px] inline-block cursor-pointer">
                                    <a href="" className="py-[9px] px-[15px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Web Development</a>
                                    <a href="" className="py-[9px] px-[15px] ml-[5px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Graphic Design</a>
                                    <a href="" className="py-[9px] px-[15px] ml-[5px] textColor rounded-[18px] leading-[16px] font-[500] border-solid border-[0.4px] border-[#1aaef4] transition-all duration-300 ease ">Animation</a>
                                </div>
                            </div>

                            {/* banner course link */}
                            <div className="mt-[60px] box-border flex">
                                <div className="w-[32.8%] pl-[20px] border-r-[1px] border-solid border-[#e0e0e0]">
                                    <img src="/Home/web_development_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] focus:outline-none">Development</a>


                                </div>
                                <div className="w-[32.8%] pl-[20px] border-r-[1px] border-solid border-[#e0e0e0]">
                                    <img src="/Home/graphic_design_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] focus:outline-none">Designing</a>


                                </div>
                                <div className="w-[32.8%] pl-[20px]  border-solid border-[#e0e0e0] pr-0 box-border">
                                    <img src="/Home/digital_marketing_icon.png" alt="development-icon" className="inline-block align-middle max-w-[100%] " />
                                    <a href="/" className="text-[16px] leading-[22px] font-[500] text-[#000000] w-[57%] ml-[20px] whitespace-nowrap focus:outline-none">Digital Marketi</a>


                                </div>

                            </div>




                        </div>







                        {/* second div */}
                        <div className="banner-images w-[39%] mt-[-52px] max-h-[687px] relative float-right box-border">
                            <figure className="relative">
                                <img src="/Home/Best_IT_Training_Indore_Student.png" alt="best software training institute in indore " />
                                <figcaption className="absolute top-[32.5%] pt-[12px] pr-[25px] pb-[10px] pl-[25px] bg-[#ffffff] rounded-[12px] figShadow left-[-17%]  ">
                                    <div className="mt-[-32px]">
                                        <img src="/Home/banner-call-icon.png" className="m-auto max-w-[100%] block" />
                                    </div>
                                    <div className="mt-[5px] visible text-[14px] leading-[20px] font-[600] text-[#1aaef4]">
                                        <a href="tel:+91 8269600400">+91 8269600400</a>

                                    </div>
                                </figcaption>
                            </figure>


                        </div>


                    </div>
                </section>
            </div>

            {/* Home banner end */}

            {/* key store form section starts */}

            <section className="mt-[-107px] z-100 bgKeyStore ">
                <div className="wrapper">
                    <div className="flex justify-between pt-[22px] pl-[52px] pr-[52px] pb-[8px] w-[83%] mt-0 mb-0 ml-auto mr-auto box-border relative rounded-[31px] keyStore">
                        <div className="w-[15%] float-left ">
                            <h2 className="text-[28px]  leading-[46px]  text-[#000000] ">Get a free
                                <span className="font-[700]"> keystroke quote</span>
                            </h2>
                        </div>
                        <div className="w-[76%] float-right relative leading-0  bg-[#ffffff]">


                            <div>
                                <Formik
                                    initialValues={{ name: '', email: '', phone: '', selector1: '', selector2: '', message: '' }}

                                >
                                    {({ isSubmitting }) => (
                                        <form className="flex flex-col m-0 p-0 ">
                                            <div className="flex">
                                                <div className="w-[29%] border-b-[1px] border-solid  border-[#cecece] mb-[27px] ml-0 mr-0 mt-0  ">
                                                    <p className="leading-[21px] text-[#000000] text-[16px] spacing-normal font-[400] ">
                                                        <span className="formUserIcon pl-[25px] block ">
                                                            <input type="text" name="name" aria-required="" aria-invalid="true" placeholder="Name" className="  pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[86%] inline-block homeInputForm focus:outline-none focus:bg-transparent focus:placeholder:text-transparent " />
                                                            {/* {for error handle} */}
                                                        </span>
                                                    </p>

                                                </div>
                                                <div className="w-[29%] border-b-[1px] border-solid border-[#cecece] mb-[27px] ml-[33px]   ">
                                                    <p className="leading-[21px] text-[#000000] text-[16px] font-[400] ">
                                                        <span className="formEmailIcon pl-[25px] block" >
                                                            <input size={40} type="email" name="email" aria-required="true" aria-invalid="true" placeholder="Email" className=" pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[86%] inline-block focus:outline-none focus:placeholder:text-transparent" />
                                                        </span>

                                                    </p>

                                                </div>
                                                <div className="w-[29%] border-b-[1px] border-solid border-[#cecece] mb-[27px] ml-[33px] box-border inline-block">
                                                    <p className="leading-[21px] text-[#000000] text-[16px] font-[400] ">
                                                        <span className="formPhoneIcon pl-[25px] block">
                                                            <input size={40} maxLength={10} minLength={10} name="Phone" type="number"
                                                                pattern="[0-9]{10}" aria-required="true" aria-invalid="true" placeholder="Phone" className=" pt-[10px] pb-[10px] pl-[5px] pr-[5px] border-none text-[14px] leading-[18px] font-[500] bg-transparent align-middle w-[86%] inline-block focus:outline-none focus:placeholder:text-transparent " />

                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="mt-0 w-[46%] relative inline-block mb-[27px] border-b-[1px] border-solid border-[#cecece]">
                                                    <p className="leading-[21px] text-[#000000] font-[400] text-[16px] ">

                                                        <span className=" formSelectCourse pl-[25px] block">
                                                            <Select
                                                                showSearch
                                                                defaultValue="Select Course"
                                                                style={{ width: "100%", border: "0px", cursor: "pointer" }}
                                                                // onChange={handleChange}
                                                                className="selectBorder antSelector cursor-pointer"

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


                                                <div className="mt-0 w-[46%] ml-[33px] relative inline-block mb-[27px] border-b-[1px] border-solid border-[#cecece]">
                                                    <p className="leading-[21px] text-[#000000] font-[400] text-[16px] ">

                                                        <span className=" formSelectCalender pl-[25px] block">
                                                            <Select
                                                                showSearch

                                                                defaultValue="How soon you want to join IT Training?"
                                                                style={{ width: "100%", border: "0px", cursor: "pointer" }}
                                                                // onChange={handleChange}
                                                                className="selectBorder antSelector cursor-pointer"


                                                                options={[

                                                                    { label: <span>This Week</span>, value: 'Jack' },
                                                                    { label: <span>Upcoming Week</span>, value: 'Lucy' },
                                                                    { label: <span>In a month</span>, value: 'Jack' },





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
                                                            <textarea cols={40} rows={10} aria-invalid="false" name="Message" placeholder="Type your message" className="h-[44px] b-0 w-[100%] font-[500] text-[14px] 
                                                                 resize-none leading-[19px]  pt-[10px] pb-[10px] pl-[5px] pr-[5px] bg-transparent text-[#000]  focus:outline-none focus:placeholder:text-transparent "></textarea>

                                                        </span>
                                                    </p>

                                                </div>

                                                <div className="m-0 p-0 box-border">
                                                    <p className="leading-[21px] font-[400] text-[16px] ">
                                                        <input type="submit" value="Send" className="cursor-pointer ml-[22px] pt-[13px] pb-[13px] pl-[105px] pr-[105px]
                                                             text-[16px] leading-[21px] inputGradient font-[700] text-[#ffffff] rounded-[24px] relative z-10 focus:outline-none "/>
                                                        <span className="w-[24px] h-[24px] absolute right-[-72px] bottom-[9px] mt-0 mb-0 ml-[24px] mr-[24px] "> </span>
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

            <section className="pt-[116px] text-center ">
                <div className="wrapper">

                    <div style={{ visibility: "visible" }}>
                        <h3 className="text-[36px] leading-[52px] tracking-[0.72px] font-[800] text-[#000000]">

                            Choose Your Course & IT Training Institute Carefully
                            <br />
                            For Your Better Placement!
                        </h3>

                    </div>

                    <div className="w-[82%] mt-[10px] ml-auto mr-auto mb-0  ">
                        <p className="mt-[17px] mr-0 ml-0 mb-0 text-[16px] leading-[34px] text-[#000] font-[400] tracking-normal ">
                            IT Training Indore, we understand the importance of quality education and career growth. Our institute stands out as a trusted destination for
                            <strong>software training institute in Indore</strong>
                            . With a team of industry experts, we offer comprehensive industrial or corporate training programs that cover the latest software development technologies. Our hands-on training approach ensures that you gain practical skills and industry-specific knowledge.
                        </p>
                        <p className="mt-[17px] mr-0 ml-0 mb-0 text-[16px] leading-[34px] text-[#000] font-[400] tracking-normal ">
                            Whether you want to learn programming languages,
                            <a href="/" className=" hover:text-[#009ce5] transition-all ease delay-[0.3s]"><strong><span> </span>web development,</strong></a>
                            <a href="/" className=" hover:text-[#009ce5] transition-all ease delay-[0.3s]"><strong><span> </span>app development, </strong></a>
                            <strong>check out our courses and learn from Indore’s best software training coaching center.</strong>
                            Our courses focus on preparing students to ensure that they are ready to defeat the upcoming challenges in their career lives.
                        </p>
                        <p className="mt-[17px] mr-0 ml-0 mb-0 text-[16px] leading-[34px] text-[#000] font-[400] tracking-normal ">

                            <strong> Look no further if your skills offering placements. </strong>
                            These remarkable programs provide you related and problem solving skills you need to excel in your field and offer the opportunity to gain placements based on your knowledge and skill.
                        </p>


                    </div>

                    <div className="text-center relative mt-[47px] ">


                        {webCard.map((card) => (
                            <div key={card.id} className={` w-[31.3%] relative  text-left roundex-[18px] mt-0 mb-[36px] ml-0 transition-all ease delay-[0.3s] float-left courseCardShadow rounded-[18px] ${card.id % 3 === 0 ? "" : "mr-[3%]"} `}>
                                <figure className="h-[214px] relative webdevelopmentCard">
                                    <img src={card.image} alt="Best Web API Development Training Course indore" className="h-[100%] object-contain
                                            rounded-tl-[18px] rounded-tr-[18px]  block "/>
                                    <figcaption className="absolute top-[12%] left-[9%] ">
                                        <a href="/" className="bg-[#1AAEF4] pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] ">
                                            {card.button1}
                                        </a>

                                    </figcaption>
                                </figure>
                                <div className="pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                                    <div className="mb-[15px] ">
                                        <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] ">
                                            <a href="/">
                                                {card.heading}
                                            </a>

                                        </h4>
                                    </div>
                                    <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                        <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                            {card.para}
                                        </p>

                                    </div>
                                    <div className="mt-[21px] ">
                                        <a href="/" className="itCardBtn text-[#000000] pr-[45px] tetx-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-[0.3s] outline-none ">{card.button2}</a>

                                    </div>

                                </div>

                            </div>
                        ))

                        }





                    </div>

                    {/* view all course btn  */}
                    <div className="mt-[21px] ">
                        <a href="/" className="btnAfter">
                            View all Courses
                        </a>

                    </div>


                </div>

            </section>

            {/* great course section end */}

            {/* student placed section starts */}



            <section className="pt-[100px] pr-0 pl-0 pb-[72px] ">
                <div className="wrapper">
                    <div className="visible text-center">
                        <h3 className="text-[36px]  leading-[52px] tracking-[0.72px] text-[#000000] font-[800] ">
                            How will IT career training uplift your career?
                        </h3>


                    </div>
                    <div className="text-center pt-[21px] pl-0 pr-0 pb-[43px] w-[75%] mt-0 mb-0 mr-auto ml-auto border-box">
                        <p className="text-[16px] leading-[34px] text-[#000] font-[400] tracking-normal">
                            Whether you're a recent graduate looking to kick-start your career or a professional seeking to upskill and stay ahead, courses offering placements can give you the edge you need. By combining classroom learning with real work environments, these programs allow you a head start in your career. Additionally, the chance to build networks and connections within the industry can lead to job offers and long-term career opportunities.
                        </p>

                    </div>

                    <div className="flex justify-between">
                        <div className="float-left w-[45.7%] mt-[30px] ">
                            <div className="mt-0 ">

                                {
                                    isActive1 ?
                                        (<div className=" pt-0 pr-0 pb-[13px]   pointer   text-left flex gap-6 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Start from Scratch</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]   cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-6 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive1() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Start from Scratch</h5>
                                            </div>)

                                }
                                {
                                    isActive1 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            Students will be taught and guided by best IT Training institute mentors from the basics to advanced level. We assist them to prepare for the future challenges in their field of interest. Our courses will cover all the updated topics which are in demand in the fast paced IT world.
                                        </p>
                                    </div>
                                }

                            </div>
                            <div className="mt-[16px] ">

                                {
                                    isActive2 ?
                                        (<div className=" pt-0 pr-0 pb-[13px]  pointer   text-left flex gap-6 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Upgrade your Knowledge</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]  cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-6 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive2() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Upgrade your Knowledge</h5>
                                            </div>)

                                }
                                {
                                    isActive2 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            With our IT Programming teams, grab the opportunity to learn and shine your skills that are crucial for your practical knowledge.
                                        </p>
                                    </div>
                                }

                            </div>
                            <div className="mt-[16px]  ">

                                {
                                    isActive3 ?
                                        (<div className=" pt-0 pr-0 pb-[31px]  pointer   text-left flex gap-5 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Easy to Understand</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]   cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-5 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive3() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Easy to Understand</h5>
                                            </div>)

                                }
                                {
                                    isActive3 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            Our courses are quite easy to understand for everyone, including multiple thought process mentors who will share their learning from their past working experience. We are ready with 100+ courses with different prospects to make you more career-centric and job ready for a bright future.
                                        </p>
                                    </div>
                                }

                            </div>
                            <div className="mt-[16px]  ">

                                {
                                    isActive4 ?
                                        (<div className=" pt-0 pr-0 pb-[13px]   pointer   text-left flex gap-5 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Quick Access for Learning</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]   cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-5 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive4() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Quick Access for Learning</h5>
                                            </div>)

                                }
                                {
                                    isActive4 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            We are providing quick access to our multiple courses, search and apply for your course according to your interest. Your career will flourish if you dedicate yourself to it. We at IT Training Indore will turn your thought process into practical knowledge.
                                        </p>
                                    </div>
                                }

                            </div>
                            <div className="mt-[16px]  ">

                                {
                                    isActive5 ?
                                        (<div className=" pt-0 pr-0 pb-[13px]   pointer   text-left flex gap-5 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Project based Learning</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]   cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-5 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive5() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Project based Learning</h5>
                                            </div>)

                                }
                                {
                                    isActive5 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            To make you technically active and theoretically strong, we deliver live project based learning and develop your skills before starting your career in the IT Industry.
                                        </p>
                                    </div>
                                }

                            </div>
                            <div className="mt-[16px]  ">

                                {
                                    isActive6 ?
                                        (<div className=" pt-0 pr-0 pb-[13px]   pointer   text-left flex gap-5 items-center ">
                                            <div className="text-[#fff] bg-[#1AAEF4] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse
                                        text-center transition-all ease duration-[0.5s] "> - </div>

                                            <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Learn and Apply</h5>

                                        </div>
                                        )
                                        :
                                        (
                                            <div className="pt-0 pr-0 pb-[13px]   cursor-pointer border-b-[1px] solid border-[#0000001a] text-left flex gap-5 items-center">
                                                <div className="text-[#000] bg-[#fff] w-[46px] h-[46px] rounded-[13px] -top-[14px] left-0 text-[22px] leading-[46px] font-[800] studentFalse 
                                        text-center transition-all ease duration-[0.5s]" onClick={() => { setActive6() }}> + </div>
                                                <h5 className="text-[16px] leading-[20px] font-[700] text-[#000000] ">Learn and Apply</h5>
                                            </div>)

                                }
                                {
                                    isActive6 &&
                                    <div className="accordion-content" >
                                        <p className="text-[#000] ">
                                            Students will be taught and guided by best IT Training institute mentors from the basics to advanced level. We assist them to prepare for the future challenges in their field of interest. Our courses will cover all the updated topics which are in demand in the fast paced IT world.

                                        </p>
                                    </div>
                                }

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
                                    // pagination={{ clickable: true }}
                                    loop={true}
                                    onSwiper={(swiper) => swiperRef.current = swiper}

                                >
                                    {
                                        stuPlaced.map((student, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="w-[641.156px] ">
                                                    <div className="relative">
                                                        <figure className="relative text-center m-0 ">
                                                            <img className="rounded-[50%] mt-[50px] mr-auto mb-auto ml-auto border-[5px] solid border-[#1AAEF4] shadow-imgShadow w-[215px] h-[215px] " src={student.img} alt="sheetal Rana" />
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
                                                            {student.para}
                                                        </p>
                                                        <div className="mt-[30px] ">
                                                            <span className="text-[#1AAEF4] text-[18px] leading-[23px] font-[700] ">{student.name}</span>
                                                            <h4 className="text-[14px] leading-[20px] font-[500] text-[#000000]">{student.position}</h4>

                                                        </div>

                                                    </div>


                                                </div>

                                            </SwiperSlide>

                                        ))
                                    }

                                </Swiper>



                                {/* remaining for div */}



                            </div>


                        </div>

                    </div>

                </div>

            </section>

            {/* our partners */}
            <section className="pb-[59px] m-0 ">
                <div className="wrapper ">
                    <div className="text-center mb-[30px] ">
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
                                {partnerImage.map((partner, index) => (
                                    <SwiperSlide key={index} className="border-l-[1px] solid border-[#0000001a] ">
                                        <figure className="w-[315.3px] min-h-[74px]      flex justify-center items-center}">
                                            <img className=" mt-auto  mb-auto " src={partner} alt="Top Successful Partners of Best IT Training Indore Institute | Best Digital Marketing Services In Indore" />
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
            <section className="pt-[50px] pb-[50px] pr-0 pl-0 m-0  " >
                <div className="wrapper">
                    <div className="relative">
                        <div>
                          <h3 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000000] font-[800] ">Explore the Categories</h3>
                        </div>
                        <div className="mt-[35px] ">
                            <div>
                                <div className="w-[100%] overflow-hidden relative h-[392px] pt-[80px] pr-[20px] pb-[20px] pl-[20px] "></div>
                                <div></div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
           

        </div>
    )
}
export default Banner;


