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

    for (let i = 0; i < course.toolsInHand.length; i++) {
        console.log(course.toolsInHand[i][0], i);
    }
    course.toolsInHand.forEach((tool) => {
        console.log(tool);
    });
    return (
        <div>
            <Navbar />

            <PageBanner heading={"Courses"} img={"/Best-IT-Courses-Coaching-Class-Institute.jpg"} />

            <section className="pt-[83px] pb-[36px] px-0">
                <div className="wrapper flex">
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
                                <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
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
                                <ul className="flex flex-wrap gap-[23px]">
                                    {
                                        course?.toolsInHand?.map((tools, index) => <li key={index} className=" toolsInHand font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                            {tools}
                                        </li>)
                                    }
                                </ul>
                            </div>

                        </div>
                        <div className="pt-[25px] pb-[89px] px-0" >
                            <h3 className="mt-[25px] mb-[25px] text-[36px] ">Benefits To Enroll {course?.courseName} Classes at IT Training Indore</h3>

                            <ul>
                                {
                                    course?.benefits?.map((benefits, index) => <li key={index} className="w-[100%] mt-[20px] mb-[5px] font-[400] pl-[35px] inline-block" style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '6px' }}>
                                        {benefits}

                                    </li>
                                    )
                                }
                            </ul>
                            <h3 className="mt-[50px] mb-[25px]">Enroll in Our {course?.courseName} & Management Training Program
                            </h3>

                            <p className="mt-[20px] ">
                                <span className="font-[400]">Join our <strong>Training Program</strong> and upskill with the {course?.courseName} Course.</span>
                            </p>

                            <ul className="m-0">

                                <li className="w-[100%] mt-[20px] font-[400] inline-block text-[16px] leading-[28px] pl-[35px] " style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '10px' }}>
                                    <b>Eligibility: </b>{course?.eligibility}
                                </li>
                                <li className="w-[100%] mt-[20px] font-[400] inline-block text-[16px] leading-[28px] pl-[35px] " style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '10px' }}>
                                    <b>Course Duration: </b>{course?.courseDuration}
                                </li>
                                <li className="w-[100%] mt-[20px] font-[400] inline-block text-[16px] leading-[28px] pl-[35px] " style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: 'no-repeat', backgroundPositionX: '0%', backgroundPositionY: '10px' }}>
                                    <b>Affordable & Flexible Fee: </b>{course?.feeOptions}
                                </li>


                            </ul>

                        </div>
                        <div>
                            <h3>Course Curriculum</h3>
                        </div>
                        {/* course curricullum pending */}
                        <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                            <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
                                {
                                    course?.keyAreas?.map((keyArea, index) =>
                                        <Panel header={keyArea.heading} key={index} >
                                            <p>{keyArea.details}</p>

                                        </Panel>
                                    )
                                }
                            </Collapse>

                        </div>
                        <div className="mt-[55px] pt-[25px] pb-[89px] border-b-[2px] border-solid border-[#0003]">
                            <div>
                                <h3 className="mb-[16px] ">Key Highlights</h3>
                                <ul className="flex flex-wrap gap-[23px]">
                                    {
                                        course?.keyHighLights?.map((key, index) => <li key={index} className=" keyHighlight font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                            {key}
                                        </li>)
                                    }
                                </ul>
                                <h3 className="mt-[50px] mb-[25px] text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">What Job Roles Offer With {course?.courseName} Training in Indore
                                </h3>
                                <ul className="flex flex-wrap gap-[23px]">
                                    {
                                        course?.jobRoles?.map((key, index) => <li key={index} className=" keyHighlight font-[700] w-[30.8%] p-[20px] text-center relative border-[1px] border-solid border-[#0000001a] mt-[20px] text-[16px] leading-[28px] ">
                                            {key}
                                        </li>)
                                    }
                                </ul>
                            </div>

                        </div>

                        <div className="pt-[84px] ">
                            <div>
                                <h3 className="font-[800] ">FAQ’s</h3>   
                              </div>
                              <div className="mt-[42px] py-0 px-[39px] border-[1px] border-solid border-[#bddae780] ">
                            <Collapse bordered={false} accordion style={{ backgroundColor: "#fff" }} className="keyAreas">
                                {
                                    course?.fAQ?.map((faqs, index) =>
                                        <Panel header={faqs.heading} key={index} >
                                            <p>{faqs.details}</p>

                                        </Panel>
                                    )
                                }
                            </Collapse>

                        </div>
                        </div>

                    </div>
                    <div className="w-[34%]">
                        <div className="px-[30px] pt-[30px] pb-[36px] rounded-[30px] w-[76%] ml-auto bg-[#fff] shadow-courseDetailsRightFormShad">
                                <div>
                                    <figure className="m-0">
                                                <img className="max-w-[100%]" src="/designers-using-gadgets.jpg"/>
                                    </figure>
                                </div>
                                <div>
                                    <div className="mt-[20px] mb-[15px] w-[100%] flex justify-center items-center">
                                        <a  href="tel:+91 8269600400" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out text-[16px] leading-[19px] font-[500] text-center" >+91 8269600400</a>
                                    </div>
                                    <div className="mb-[15px] flex justify-center items-center ">
                                        <a href="mailto:info@ittrainingindore.in" className="hover:text-[#1AAEF4] transition-all duration-300 ease-out text-[16px] leading-[19px] font-[500] text-center" >info@ittrainingindore.in	</a>

                                    </div>
                                </div>
                                <div className="mt-[27px]">
                                    <h4>Get Course Enquiry</h4>

                                    <div className="w-[100%] mt-[25px] ">
                                        <form>
                                            <div className="w-[100%] mt-0 mb-[21px] mx-0 border-b-[1px] border-solid border-[#cecece] ">
                                                <p>
                                                    <span className="pl-[25px] block" style={{backgroundImage:`url('/form-user-icon.svg')`,backgroundRepeat:'no-repeat', backgroundPositionX:'0px',backgroundPositionY:'50%'}}>
                                                        <input className="py-[10px] px-[5px] text-[14px] leading-[18px] font-[500] focus:outline-none" placeholder="Name" />
                                                    </span>
                                                </p>
                                            </div>
                                        </form>

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




