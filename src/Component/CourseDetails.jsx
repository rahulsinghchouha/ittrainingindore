import React from "react";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {

    const params = useParams();

    console.log("params",params.course);

    const course = params.course;

    console.log("course",course);

    return (
        <div>
            <Navbar/>

            <PageBanner heading={"Courses"} img={"/Best-IT-Courses-Coaching-Class-Institute.jpg"}/>

            <section className="pt-[83px] pb-[36px] px-0">
                <div className="wrapper">
                    <div className="w-[66%]">
                        <div>
                            <Link className="text-[16px] leading-[19px] font-[700] text-[#fff] py-[7px] px-[22px] rounded-[5px] shadow-courseDetailsCatShad bg-[#1AAEF4] ">{course?.category}</Link>
                        </div>

                    </div>

                </div>


            </section>

        </div>
    )

}
export default CourseDetails;




