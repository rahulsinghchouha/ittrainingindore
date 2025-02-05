import React from "react";
import { ittrainingDataSerivice } from "../../Services/dataService";


import {  NavLink, useNavigate } from "react-router-dom";






const CourseCard = ({ cardLimit, square, horizontal, webCard }) => {

    const navigate = useNavigate();

    function handleCourseDetails(course) {
       // console.log("card", course);
        navigate("/course/" + course?.courseName?.replace(/\s|\/+/g,'-'), { state: course });
    }
   
    //Function to safely slice HTML Content
    const stripHtmlTags = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html'); //for html content
        return doc.body.textContent || "";
    };

    return (
        <div className="flex flex-wrap justify-center items-center">
            {square && webCard?.slice(0, cardLimit).map((card, index) => (
                <div
                    key={index} className={` w-[31.3%] relative  text-center roundex-[18px] mt-0 mb-[36px] ml-0 courseCardShadow rounded-[12px] hover:translate-y-[-15px] transition-all ease-linear duration-300   ${(index + 1) % 3 === 0 ? "" : "mr-[3%]"} `}
                >
                    <figure className="h-[214px] relative webdevelopmentCard">
                        <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] object-contain
                                            rounded-tl-[18px] rounded-tr-[18px]  block "/>
                        <figcaption className="absolute top-[12%] left-[9%] ">
                            <a href="/" className={`${card.category === "Web Development" && "bg-[#1AAEF4] hover:bg-[#13b440] transition-all delay-0 duration-0 ease-out" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#e3875c]" || card.category === "Graphic Designing" && "bg-[#e8b400]"} pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `}>
                                {card.category}
                            </a>
                        </figcaption>
                    </figure>
                    <div className="pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                        <div className="mb-[15px] ">
                            <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                <button onClick={() => handleCourseDetails(card)}>
                                    {card.courseName}
                                </button>

                            </h4>
                        </div>
                        <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                            <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                            { stripHtmlTags(card.overview).slice(0, 100) }....
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
                    <div className="w-[100%] rounded-[18px] shadow-horizontaCard mb-[36px] p-[25px] flex gap-3">
                        <figure className="h-[214px] w-[30%] rounded-[20px] relative ">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} alt="Best Web API Development Training Course indore" className="h-[100%] w-[100%] rounded-[20px] object-cover" />
                            <figcaption className={`absolute top-[12%] left-[4%]`}>

                                <NavLink to="/courses" className={`${card.category === "Web Development" && "bg-[#1AAEF4]" || card.category === "Digital Marketing" && "bg-[#4800e2]" || card.category === "Web Designing" && "bg-[#e3875c]" || card.category === "Graphic Designing" && "bg-[#e8b400]"} pt-[8px] outline-none pr-[16px] pb-[9px] pl-[16px] text-[14px] leading-[19px] font-[700] text-[#ffffff] rounded-[5px] webdevbSha transition-all ease delay-[0.3s] `} >
                                    {card.category}
                                </NavLink>

                            </figcaption>
                        </figure>
                        <div className=" w-[69%] pt-[30px] pb-[30px] pl-[28px] pr-[28px] text-left">
                            <div className="mb-[15px] ">
                                <h4 className="text-[18px] leading-[23px] text-[#000000] font-[700] hover:text-[#1AAEF4] transition-all delay-75 ease-linear ">
                                    <button onClick={() => handleCourseDetails(card)}>
                                        {card.courseName}
                                    </button>

                                </h4>
                            </div>
                            <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                { stripHtmlTags(card.overview).slice(0, 160) }....
                                </p>

                            </div>
                            <div className="mt-[21px] ">
                                <button onClick={() => handleCourseDetails(card)} className=" transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
    )

}

export default CourseCard;

