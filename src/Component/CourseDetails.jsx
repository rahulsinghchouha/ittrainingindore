import React from "react";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ittrainingDataSerivice } from "../Services/dataService";
import { Collapse } from "antd";

const { Panel } = Collapse;

const CourseDetails = () => {

    const course = useLocation().state;

   for(let i=0; i<course.toolsInHand.length; i++)
   {
    console.log(course.toolsInHand[i][0],i);
   }
   course.toolsInHand.forEach((tool) => {
    console.log(tool);
  });
    return (
        <div>
            <Navbar />

            <PageBanner heading={"Courses"} img={"/Best-IT-Courses-Coaching-Class-Institute.jpg"} />

            <section className="pt-[83px] pb-[36px] px-0">
                <div className="wrapper">
                    <div className="w-[66%]">
                        <div>
                            <Link className="text-[16px] leading-[19px] font-[700] text-[#fff] py-[7px] px-[22px] rounded-[5px] shadow-courseDetailsCatShad bg-[#1AAEF4] ">{course?.category}</Link>
                        </div>
                        <div className="mt-[29px] ">
                            <h2 className="text-[36px] leading-[52px] tracking-[0.72px] font-[800] text-[#000]">{course?.courseName}</h2>

                        </div>
                        <div className="mt-[68px] ">
                            <figure className="m-0">
                                <img src={`${ittrainingDataSerivice.backendUrl}/${course?.img}`} alt="Best Web API Development Training Course indore" className="w-[100%] block" />

                            </figure>

                        </div>
                        <div className="mt-[40px]">
                            <a href="#description" style={{ backgroundImage: `url('/course-description.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '15%', backgroundPositionY: 'center' }} className="text-[14px]  text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Description</a>
                            <a href="#faq's" style={{ backgroundImage: `url('/course-faq.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '20%', backgroundPositionY: 'center' }} className="text-[14px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">FAQ's</a>
                            <a href="#related-courses" style={{ backgroundImage: `url('/related-course.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '10%', backgroundPositionY: 'center' }} className="text-[14px] ml-[15px] text-[#000] leading-[20px] font-[600] py-[15px] pl-[50px] pr-[40px] rounded-[12px] bg-[#ceefff] text-center">Related Courses</a>

                        </div>
                        <div className="mt-[80px] ">
                            <h3>Overview</h3>
                            <div className="mt-[26px] ">
                                <p>
                                    {course?.overview}
                                </p>

                            </div>

                        </div>
                        <div className="mt-[50px]">
                            <div>
                                <h4>Key Areas We Are Covering in the {course?.courseName} Course in Indore</h4>
                            </div>
                            <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                                <Collapse label={course} bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
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

                        <div className="mt-[55px] pt-[25px] pb-[89px] px-0">
                            <div>
                                <h3 className="mb-[16px]">Tools to hands-on</h3>
                                <div>
                                    {
                                        
                                    }
                                    </div>
                            </div>

                        </div>

                    </div>

                </div>


            </section>

        </div>
    )

}
export default CourseDetails;




