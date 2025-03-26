import React, { useReducer, useRef, useState } from "react";
import { ittrainingDataSerivice } from "../../Services/dataService";
import { NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from "swiper/modules";



const CourseCard = ({ cardLimit, square, horizontal, webCard, homePage, coursePage }) => {

    const navigate = useNavigate();

    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

    const [prevBgColor, setPrevColor] = useState("#cecece");
    const [nextBgColor, setNextColor] = useState("#cecece");

    const swiperRef = useRef(null);

    function handleCourseDetails(course) {
        // console.log("card", course);
        navigate("/course/" + course?.courseName?.replace(/\s|\/+|\?/g, "-"), { state: course });
    }
    function categoryDetails(categoryDetails) {
        navigate("/course-category/" + categoryDetails?.replace(/\s|\/+/g, "-"))
    }

    //Function to safely slice HTML Content
    const stripHtmlTags = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html'); //for html content
        return doc.body.textContent || "";
    };

    return (
        <div className="flex flex-wrap justify-center items-center w-[100%] max-w-[100%] relative">

            {
                isDesktop && square && homePage && webCard?.slice(0, cardLimit).map((card, index) => (
                    <div
                        key={index} className={` w-[31.3%] max-1400:w-[30.8%]   relative  text-center roundex-[18px] mt-0 mb-[36px] ml-0 courseCardShadow rounded-[12px] hover:translate-y-[-15px] transition-all ease-linear duration-300 ${(index + 1) % 3 === 0 ? " " : "mr-[3%] max-1400:mr-[2.3%]  max-1321:mr-[2.2%]"} `}
                    >
                        <figure className="h-[214px] relative webdevelopmentCard">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] object-cover
                                            rounded-tl-[18px] rounded-tr-[18px]  block "/>
                            <figcaption className="absolute top-[12%] left-[9%] ">
                                <button onClick={() => categoryDetails(card?.category)} className={` bg-[#1AAEF4] ${card.category === "Web Development" && "bg-[#1AAEF4] hover:bg-[#13b440] transition-all delay-0 duration-0 ease-out" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#e3875c]" || card.category === "Graphic Designing" && "bg-[#e8b400]" ||  card.category === "UI/UX Designing" && "bg-[#3B8BE9]" } pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `}>
                                    {card.category}
                                </button>
                            </figcaption>
                        </figure>
                        <div className="pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                            <div className="mb-[15px] ">
                                <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                    <button className="text-start" onClick={() => handleCourseDetails(card)}>
                                        {card.courseName}
                                    </button>
                                </h4>
                            </div>
                            <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                    {stripHtmlTags(card.overview).slice(0, 75)}....
                                </p>
                            </div>
                            <div className="mt-[21px] ">
                                <button onClick={() => handleCourseDetails(card)} className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>
                            </div>
                        </div>

                    </div>

                ))
            }
            {
                !isDesktop && homePage && square && webCard.length > 0 ?
                    <div className="h-[100%] w-[100%] relative">
                        <button onClick={() => { swiperRef.current.slidePrev(); setPrevColor("#1AAEF4"); setNextColor("#cecece"); }} className={`z-[10] w-[54px] h-[54px] max-649:w-[48px] max-649:h-[48px] rounded-[50%] absolute top-[50%] left-[0px] border-[1px] solid border-[#0000001a] flex justify-center items-center`}
                            style={{ backgroundColor: prevBgColor }}  ><img src="/exolore-slider-prev (1).svg" /></button>
                        <button onClick={() => { swiperRef.current.slideNext(); setPrevColor("#cecece"); setNextColor("#1AAEF4"); }} className={`z-[10]  w-[54px] h-[54px] max-649:w-[48px] max-649:h-[48px] rounded-[50%] absolute top-[50%] right-[0px] border-[1px] solid border-[#0000001a] flex justify-center items-center`}
                            style={{ backgroundColor: nextBgColor }} ><img src="/exolore-slider-next.svg" /></button>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={
                                { delay: 5000 }
                            }
                            slidesPerView={1}
                            breakpoints={{

                                768: {
                                    slidesPerView: 2, // For screens between 768px and 1024px
                                },
                                480: {
                                    slidesPerView: 1, // For screens smaller than 480px
                                },
                            }}
                            style={{ width: "90%", margin: "0px auto", padding: "15px 0px" }}
                            onSwiper={(swiper) => { swiperRef.current = swiper }}
                        >

                            {
                                webCard?.slice(0, cardLimit).map((card, index) =>
                                    <SwiperSlide key={index}>
                                        <div
                                            key={index} className={`w-[100%]  relative  text-center roundex-[18px] mt-0 mb-[36px] ml-0 courseCardShadow rounded-[12px] hover:translate-y-[-15px] transition-all ease-linear duration-300  `}
                                        >
                                            <figure className="h-[214px] relative webdevelopmentCard">
                                                <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] object-cover
                                            rounded-tl-[18px] rounded-tr-[18px]  block "/>
                                                <figcaption className="absolute top-[12%] left-[9%] ">
                                                    <button onClick={() => categoryDetails(card?.category)} className={` bg-[#1AAEF4] ${card.category === "Web Development" && "bg-[#1AAEF4] hover:bg-[#13b440] transition-all delay-0 duration-0 ease-out" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#e3875c]" || card.category === "Graphic Designing" && "bg-[#e8b400]" || card.category === "UI/UX Designing" && "bg-[#5aab4b]" }  pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `}>
                                                        {card.category}
                                                    </button>
                                                </figcaption>
                                            </figure>
                                            <div className="pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                                                <div className="mb-[15px] ">
                                                    <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                                        <button className="text-start" onClick={() => handleCourseDetails(card)}>
                                                            {card.courseName}
                                                        </button>

                                                    </h4>
                                                </div>
                                                <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                                    <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                                        {stripHtmlTags(card.overview).slice(0, 75)}....
                                                    </p>
                                                </div>
                                                <div className="mt-[21px] ">
                                                    <button onClick={() => handleCourseDetails(card)} className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div> : null

            }
            {
                coursePage && square && webCard?.slice(0, cardLimit).map((card, index) => (
                    <div
                        key={index} className={` w-[31.3%] max-1024:w-[38%] max-1400:w-[30.8%] max-979:w-[47%] max-767:w-[70%] max-649:w-[80%] max-413:w-[85%] max-374:w-[95%]   relative  text-center roundex-[18px] mt-0 mb-[36px] ml-0 courseCardShadow rounded-[12px] hover:translate-y-[-15px] transition-all ease-linear duration-300 ${(index + 1) % 3 === 0 ? " " : "mr-[3%] max-1400:mr-[2.3%]  max-1321:mr-[2.2%] max-1024:mr-0  "}  ${index % 2 === 0 ? "max-1024:!mr-[8%] max-979:!mr-[3%] max-767:!mr-0" : ""}  `}
                    >
                        <figure className="h-[214px] max-767:h-auto relative webdevelopmentCard">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] object-cover
                                            rounded-tl-[18px] rounded-tr-[18px]  block "/>
                            <figcaption className="absolute top-[12%] left-[9%] ">
                                <button onClick={() => categoryDetails(card?.category)} className={` bg-[#1AAEF4] ${card.category === "Web Development" && "bg-[#1AAEF4] hover:bg-[#13b440] transition-all delay-0 duration-0 ease-out" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#5aab4b]" || card.category === "Graphic Designing" && "bg-[#e8b400]" || card.category === "UI/UX Designing" && "bg-[#3B8BE9]" } pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `}>
                                    {card.category}
                                </button>
                            </figcaption>
                        </figure>
                        <div className="pt-[30px] pb-[30px] pl-[28px] pr-[28px] max-1200:py-[25px] max-1200:px-[20px] max-413:pt-[25px] max-413:pb-[15px] max-413:px-[13px] text-left">
                            <div className="mb-[15px] ">
                                <h4 className="text-[18px] max-1321:text-[17px] max-1024:text-[18px] max-413:text-[16px] text-left leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                    <button className="text-start" onClick={() => handleCourseDetails(card)}>
                                        {card.courseName}
                                    </button>
                                </h4>
                            </div>
                            <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                    {stripHtmlTags(card.overview).slice(0, 75)}....
                                </p>
                            </div>
                            <div className="mt-[21px] ">
                                <button onClick={() => handleCourseDetails(card)} className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>
                            </div>
                        </div>

                    </div>

                ))
            }
            {
                horizontal && webCard?.slice(0, cardLimit).map((card) => (
                    <div className="max-1200:p-[10px] max-767:p-[18px] w-[100%] rounded-[18px] shadow-horizontaCard mb-[36px] p-[25px]  flex gap-3 max-649:gap-1">
                        <figure className="h-[214px] max-800:h-[160px] max-649:h-[140px] max-567:h-[95px] max-567:w-[123px]  w-[30%] rounded-[20px] relative ">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] rounded-[20px] max-649:rounded-[5px] object-cover" />
                            <figcaption className={`absolute top-[12%]  max-649:top-[6%] left-[4%] `}>

                                <button onClick={() => categoryDetails(card.category)} className={` bg-[#1AAEF4] ${card.category === "Web Development" && "bg-[#1AAEF4]" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#e3875c]" || card.category === "Graphic Designing" && "bg-[#e8b400]" || card.category === "UI/UX Designing" && "bg-[#5aab4b]"} max-649:py-[2px] max-649:px-[4px] max-649:text-[11px] max-413:text-[10px] max-649:leading-[14px] max-979:py-[5px] max-979:px-[11px] pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `} >
                                    {card.category}
                                </button>

                            </figcaption>
                        </figure>
                        <div className="max-567:w-[59%] max-567:my-auto max-649:py-0 max-649:pl-[10px] max-649:pr-0 w-[69%] max-1200:py-[10px] max-1200:px-[20px] max-767:py-0 max-767:pl-[34px] max-767:pr-0 pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                            <div className="mb-[15px] max-767:mt-[5px] max-767:mb-[10px] max-767:mx-0 ">
                                <h4 className="text-[18px]   max-567:text-[16px] max-567:leading-[21px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                    <button className="text-start" onClick={() => handleCourseDetails(card)}>
                                        {card.courseName}
                                    </button>

                                </h4>
                            </div>
                            <div className="max-567:hidden mt-[15px] mb-[15px] max-767:mt-[5px] max-767:mb-[0px] ml-0 mr-0 min-h-[85px] ">
                                <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                    {stripHtmlTags(card.overview).slice(0, 100)}....
                                </p>

                            </div>
                            <div className="mt-[21px] max-979:mt-[0px] ">
                                <button onClick={() => handleCourseDetails(card)} className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px]  leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
    )

}

export default CourseCard;

