import React, { useState } from "react";
import Navbar from "./Common/Navbar";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import { IoCaretDownOutline } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';
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



function Course() {

    const [squareCard, setSquareCard] = useState(true);
    const [horizontalCard, setHorizontalCard] = useState(false);

    function showHorizontalCard() {
        setSquareCard(false);
        setHorizontalCard(true);
    }

    function showSquareCard() {
        setSquareCard(true);
        setHorizontalCard(false);
    }
    const { ref: courseCard, inView: isCourseCard } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    


    return (
        <div>
            <Navbar />
            {/* page banner start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src="/Best-IT-Courses-Coaching-Class-Institute.jpg" />
                    </figure>

                    <div >
                        <div className="wrapper">
                            <div className="absolute top-[50%] transform translate-y-[-50%]">
                                <h1 className="text-[54px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] ">Courses</h1>
                                <div className="mt-[5px] block">
                                    <NavLink to="/" className="hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                    <span className="ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">Courses</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            {/* Page banner End */}
            <section className="py-[4em] m-0">
                <div className="wrapper">
                    <div className="">
                        <h2 className="mb-[1.2em] leading-[1.7em] text-[36px] tracking-[0.72px] text-[#000000] text-center font-[800] ">Choose the Best Coding Classes in Indore</h2>

                        <p className="mt-[20px] px-[20px] py-0">Finding a course with placement opportunities can give you a significant advantage in your job search. Here in IT training coding classes you will explore our IT Courses that provide coding skills and knowledge to get placement opportunities. And you gain practical and problem solving experience.</p>

                        <p className="mt-[20px] px-[20px] py-0 ">You'll learn the most demanding programming languages in {new Date().getFullYear()}, like <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer noopener" className="hover:text-[#1AAEF4] transition-all duration-300 ease-linear"><strong>HTML</strong> </a> and <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer noopener" className="hover:text-[#1AAEF4] transition-all duration-300 ease-linear"> <strong> CSS</strong></a>, <a href="https://www.javascript.com/" target="_blank" rel="noreferrer noopener" className="hover:text-[#1AAEF4] transition-all duration-300 ease-linear"> <strong> JavaScript </strong></a>and <a href="https://www.python.org/" target="_blank" rel="noreferrer noopner" className="hover:text-[#1AAEF4] transition-all duration-300 ease-linear"> <strong>Python</strong> </a> . we are offering a wide range of courses with placement opportunities. These courses not only provide you with the necessary theoretical knowledge but also give you hands-on experience, allowing you to develop relevant skills and build a network of industry connections.</p>

                        <p className="mt-[20px] px-[20px] py-0 ">You will gain practical coding skills in daily classes and have the opportunity to work on our real projects and collaborate with our senior development team. Whether you're looking to start a career in software development or enhance your coding career, <strong> We are the best coding classes in Indore </strong>and will provide the proper tools installation guide, and support. With guaranteed placements, you can confidently invest your time and money in the right future and the right institute.</p>

                        <h3 className="mt-[20px] px-[20px] py-0 text-center text-[36px] leading-[52px] tracking-[0.72px] font-[800] text-[#000] ">Explore Our Courses with Placement Opportunities</h3>
                    </div>

                </div>

            </section>

            <section className="bg-[#f3fbff] py-[32px] px-0 ">
                <div className="wrapper flex justify-between">
                    <div className="w-[16%] ">
                        <Select
                            showSearch
                            defaultValue="All Courses"
                            style={{ width: "100%", height: '42px', border: "0px", cursor: "pointer", borderRadius: '5px' }}

                            suffixIcon={<IoCaretDownOutline style={{ fontSize: "16px", fontWeight: "bold", color: "#000", cursor: "pointer" }} />}
                            className="selectBorder  antSelectorrounded-[5px] courseSelector  "
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

                    <div className="flex ">
                        <div className={`rounded-[5px] ${squareCard ? "bg-[#1AAEF4]" : "bg-transparent"} cursor-pointer  `}
                            onClick={() => showSquareCard()}
                        >

                            <figure className="w-[44px] h-[44px] leading-[54px] text-center relative">
                                {
                                    squareCard ? ( <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none" className="absolute top-[50%] left-[25%]  transform translate-y-[-50%] my-0 mx-auto  overflow-visible " >
                                        <mask id="7p6rejbyfa" fill="#fff">
                                            <rect x=".69" y=".689" width="9.375" height="9.375" rx="1.5"></rect>
                                        </mask>
                                        <rect x=".69" y=".689" width="9.375" height="9.375" rx="1.5" stroke="#fff" stroke-width="4" mask="url(#7p6rejbyfa)"></rect>
                                        <mask id="c2v3qv5yab" fill="#fff">
                                            <rect x="11.627" y=".689" width="9.375" height="9.375" rx="1.5"></rect>
                                        </mask>
                                        <rect x="11.627" y=".689" width="9.375" height="9.375" rx="1.5" stroke="#fff" stroke-width="4" mask="url(#c2v3qv5yab)"></rect>
                                        <mask id="ni9mysvpyc" fill="#fff">
                                            <rect x=".69" y="11.626" width="9.375" height="9.375" rx="1.5"></rect>
                                        </mask>
                                        <rect x=".69" y="11.626" width="9.375" height="9.375" rx="1.5" stroke="#fff" stroke-width="4" mask="url(#ni9mysvpyc)"></rect>
                                        <mask id="tyqbn5jr4d" fill="#fff">
                                            <rect x="11.627" y="11.626" width="9.375" height="9.375" rx="1.5"></rect>
                                        </mask>
                                        <rect x="11.627" y="11.626" width="9.375" height="9.375" rx="1.5" stroke="#fff" stroke-width="4" mask="url(#tyqbn5jr4d)"></rect>
                                    </svg>):(
                                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none" className="absolute top-[50%] left-[25%]  transform translate-y-[-50%] my-0 mx-auto  overflow-visible " >
                                         <mask id="7p6rejbyfa" fill="#fff">
                                             <rect x=".69" y=".689" width="9.375" height="9.375" rx="1.5"></rect>
                                         </mask>
                                         <rect x=".69" y=".689" width="9.375" height="9.375" rx="1.5" stroke="#1AAEF4" stroke-width="4" mask="url(#7p6rejbyfa)"></rect>
                                         <mask id="c2v3qv5yab" fill="#fff">
                                             <rect x="11.627" y=".689" width="9.375" height="9.375" rx="1.5"></rect>
                                         </mask>
                                         <rect x="11.627" y=".689" width="9.375" height="9.375" rx="1.5" stroke="#1AAEF4" stroke-width="4" mask="url(#c2v3qv5yab)"></rect>
                                         <mask id="ni9mysvpyc" fill="#fff">
                                             <rect x=".69" y="11.626" width="9.375" height="9.375" rx="1.5"></rect>
                                         </mask>
                                         <rect x=".69" y="11.626" width="9.375" height="9.375" rx="1.5" stroke="#1AAEF4" stroke-width="4" mask="url(#ni9mysvpyc)"></rect>
                                         <mask id="tyqbn5jr4d" fill="#fff">
                                             <rect x="11.627" y="11.626" width="9.375" height="9.375" rx="1.5"></rect>
                                         </mask>
                                         <rect x="11.627" y="11.626" width="9.375" height="9.375" rx="1.5" stroke="#1AAEF4" stroke-width="4" mask="url(#tyqbn5jr4d)"></rect>
                                     </svg>
                                    )
                                }
                               
                            </figure>

                        </div>


                        <div className={`ml-[15px] rounded-[5px] ${horizontalCard ? "bg-[#1AAEF4]" : "bg-transparent"}`}
                            onClick={() => showHorizontalCard()}
                        >
                            <figure className="w-[44px] h-[44px]  leading-[54px]  text-center relative cursor-pointer">

                                { horizontalCard ? (   <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="absolute top-[50%] left-[25%] transform translate-y-[-50%] ">
                                    <g clip-path="url(#9mpqbf18ya)" fill="#fff">
                                        <path d="M10.667 13.952c3.25 0 6.498-.001 9.746-.004.178 0 .25.023.247.221-.01 1.544-.008 3.09 0 4.634 0 .151-.029.197-.2.197-6.527-.004-13.054-.004-19.58 0-.178 0-.217-.048-.216-.209.006-1.537.006-3.075 0-4.613 0-.18.038-.231.236-.23 3.255.007 6.51.008 9.767.004zm-.013 3.412c2.689 0 5.378.001 8.068.004.177 0 .219-.045.215-.207a24.467 24.467 0 0 1 0-1.363c.005-.175-.045-.217-.228-.216-1.784.007-3.567.004-5.35.004-3.58 0-7.16-.001-10.742-.005-.199 0-.242.05-.236.23.014.448.014.895 0 1.341-.006.174.041.217.226.216 2.685-.006 5.366-.008 8.045-.004h.002zM15.518.006c1.636 0 3.272 0 4.908-.004.173 0 .236.024.236.21-.01 1.544-.01 3.089 0 4.635 0 .162-.041.206-.216.206a2900.66 2900.66 0 0 0-9.881 0c-.182 0-.215-.052-.215-.21.006-1.546.006-3.09 0-4.636 0-.168.05-.206.22-.205 1.647.006 3.298.004 4.948.004zm-.021 1.633c-1.083 0-2.166.003-3.25-.003-.145 0-.184.035-.182.172.01.482.01.964 0 1.447 0 .124.026.164.168.163 2.18-.004 4.36-.004 6.54 0 .123 0 .162-.03.16-.15-.007-.474-.01-.953 0-1.425.004-.16-.036-.209-.214-.208-1.072.009-2.147.004-3.22.004h-.002zM15.505 12.017c-1.65 0-3.3 0-4.951.004-.161 0-.209-.03-.208-.192.007-1.552.007-3.103 0-4.654 0-.157.041-.194.206-.194 3.3.005 6.602.005 9.902 0 .163 0 .206.035.205.193a508.451 508.451 0 0 0 0 4.654c0 .156-.037.195-.203.194-1.649-.007-3.303-.005-4.951-.005zm-.008-1.632c1.082 0 2.165-.003 3.247.003.154 0 .196-.035.193-.182-.01-.468-.01-.936 0-1.402 0-.138-.021-.19-.186-.19-2.171.006-4.343.006-6.514 0-.137 0-.172.032-.17.162.01.481.01.964 0 1.445-.002.144.049.168.186.168 1.08-.006 2.162-.004 3.245-.004zM3.79 9.206V4.868c0-1.552.004-3.104-.005-4.654 0-.181.054-.218.233-.212.426.013.854.013 1.281 0 .175-.005.22.042.22.208-.005 2.921-.007 5.843-.004 8.765V9.2c.09.019.112-.046.15-.08.556-.52 1.114-1.038 1.666-1.562.091-.087.141-.1.237-.004.323.326.655.644.989.96.082.076.08.12 0 .198a1114.395 1114.395 0 0 0-3.808 3.564c-.127.12-.172.02-.236-.041A2724.22 2724.22 0 0 1 1.459 9.38c-.236-.22-.468-.449-.71-.661-.096-.085-.083-.132 0-.212.33-.31.659-.622.975-.944.106-.107.16-.084.256.007.52.495 1.05.98 1.571 1.474.062.069.117.143.165.22l.074-.058z"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="9mpqbf18ya">
                                            <path fill="#fff" transform="translate(.66)" d="M0 0h20v19H0z"></path>
                                        </clipPath>
                                    </defs>
                                </svg>):(
                                     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="absolute top-[50%] left-[25%] transform translate-y-[-50%] ">
                                     <g clip-path="url(#9mpqbf18ya)" fill="#1AAEF4">
                                         <path d="M10.667 13.952c3.25 0 6.498-.001 9.746-.004.178 0 .25.023.247.221-.01 1.544-.008 3.09 0 4.634 0 .151-.029.197-.2.197-6.527-.004-13.054-.004-19.58 0-.178 0-.217-.048-.216-.209.006-1.537.006-3.075 0-4.613 0-.18.038-.231.236-.23 3.255.007 6.51.008 9.767.004zm-.013 3.412c2.689 0 5.378.001 8.068.004.177 0 .219-.045.215-.207a24.467 24.467 0 0 1 0-1.363c.005-.175-.045-.217-.228-.216-1.784.007-3.567.004-5.35.004-3.58 0-7.16-.001-10.742-.005-.199 0-.242.05-.236.23.014.448.014.895 0 1.341-.006.174.041.217.226.216 2.685-.006 5.366-.008 8.045-.004h.002zM15.518.006c1.636 0 3.272 0 4.908-.004.173 0 .236.024.236.21-.01 1.544-.01 3.089 0 4.635 0 .162-.041.206-.216.206a2900.66 2900.66 0 0 0-9.881 0c-.182 0-.215-.052-.215-.21.006-1.546.006-3.09 0-4.636 0-.168.05-.206.22-.205 1.647.006 3.298.004 4.948.004zm-.021 1.633c-1.083 0-2.166.003-3.25-.003-.145 0-.184.035-.182.172.01.482.01.964 0 1.447 0 .124.026.164.168.163 2.18-.004 4.36-.004 6.54 0 .123 0 .162-.03.16-.15-.007-.474-.01-.953 0-1.425.004-.16-.036-.209-.214-.208-1.072.009-2.147.004-3.22.004h-.002zM15.505 12.017c-1.65 0-3.3 0-4.951.004-.161 0-.209-.03-.208-.192.007-1.552.007-3.103 0-4.654 0-.157.041-.194.206-.194 3.3.005 6.602.005 9.902 0 .163 0 .206.035.205.193a508.451 508.451 0 0 0 0 4.654c0 .156-.037.195-.203.194-1.649-.007-3.303-.005-4.951-.005zm-.008-1.632c1.082 0 2.165-.003 3.247.003.154 0 .196-.035.193-.182-.01-.468-.01-.936 0-1.402 0-.138-.021-.19-.186-.19-2.171.006-4.343.006-6.514 0-.137 0-.172.032-.17.162.01.481.01.964 0 1.445-.002.144.049.168.186.168 1.08-.006 2.162-.004 3.245-.004zM3.79 9.206V4.868c0-1.552.004-3.104-.005-4.654 0-.181.054-.218.233-.212.426.013.854.013 1.281 0 .175-.005.22.042.22.208-.005 2.921-.007 5.843-.004 8.765V9.2c.09.019.112-.046.15-.08.556-.52 1.114-1.038 1.666-1.562.091-.087.141-.1.237-.004.323.326.655.644.989.96.082.076.08.12 0 .198a1114.395 1114.395 0 0 0-3.808 3.564c-.127.12-.172.02-.236-.041A2724.22 2724.22 0 0 1 1.459 9.38c-.236-.22-.468-.449-.71-.661-.096-.085-.083-.132 0-.212.33-.31.659-.622.975-.944.106-.107.16-.084.256.007.52.495 1.05.98 1.571 1.474.062.069.117.143.165.22l.074-.058z"></path>
                                     </g>
                                     <defs>
                                         <clipPath id="9mpqbf18ya">
                                             <path fill="#1AAEF4" transform="translate(.66)" d="M0 0h20v19H0z"></path>
                                         </clipPath>
                                     </defs>
                                 </svg>
                                )

                                }
                             

                            </figure>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[16px] px-0 ">
                <div className="wrapper">
                <div className={`text-center relative mt-[47px] ${isCourseCard && "animate__fadeIn"}  `}
                            ref={courseCard}

                            style={{ animationDuration: '3s' }}
                        >
                            {

                            squareCard && !horizontalCard &&
                              webCard.map((card) => (
                                <div
                                    ref={courseCard}
                                    key={card.id} className={` w-[31.3%] relative  text-left roundex-[18px] mt-0 mb-[36px] ml-0 float-left courseCardShadow rounded-[12px]  transition-all ease-linear duration-300   ${card.id % 3 === 0 ? "" : "mr-[3%]"} `}
                                    style={{ animationDuration: '4s' }}
                                >

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
                                            <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
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
                                            <a href="/" className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">{card.button2}</a>

                                        </div>

                                    </div>

                                </div>
                            ))

                            }
                            {
                                horizontalCard && !squareCard &&
                                webCard.map((card)=>(
                                    <div className="w-[100%] ">



                                        </div>

                                ))
                            }





                        </div>

                </div>


            </section>




        </div>
    )




}
export default Course;