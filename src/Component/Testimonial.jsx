import React, { useEffect } from "react";
import Navbar from "./Common/Navbar";

import { MdOutlineFormatQuote } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { getPlacedStudent } from "../Redux/functionsSlics";

import PageBanner from "./Common/PageBanner";
import { ittrainingDataSerivice } from "../Services/dataService";



const Testimonial = () => {


    const dispatch = useDispatch();

    const stuPlaced = useSelector((state) => state.backendFunction.stuPlaced);

    console.log(stuPlaced);

    useEffect(() => {
        dispatch(getPlacedStudent());
    }, [dispatch])

    return (
        <div>
            <Navbar />

            <PageBanner heading={"Testimonials"} img={"/Testimonials (1).jpg"} />


            <section className="px-0 pt-[124px] pb-[48px] bg-[#f3fbff]">
                <div className="wrapper">
                    <div className="relative h-[2269px] grid grid-cols-[repeat(3,1fr)]  gap-9 justify-center w-full  ">

                        {
                         stuPlaced?.map((student,index)=>(

                            <div key={index} className={`  ${index %3 === 0 ? "col-start-1 col-end-2 " : "" || index %3 === 1 ? "col-start-2 col-end-3 mt-[140px] " : "" || index%3 === 2 ? "col-start-3 col-end-4" : ""}  rounded-[21px] shadow-testimonialCardShad  h-[461px]  mb-[70px] bg-[#fff] relative special-card`}>
                                <figure className={`w-[86px] h-[86px] rounded-[50%] ${ index %3 === 0 &&  "bg-[#fff7db]" ||  index %3 === 1 &&  "bg-[#e3ffe0]" ||  index %3 === 2 &&  "bg-[#ece3ff]" } absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 `}>
                                    <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">

                                        <MdOutlineFormatQuote style={{ height: "70px", width: "36px" }} className={`${ index %3 === 0 &&  "text-[#f9c40a]" ||  index %3 === 1 &&  "text-[#13bf00]" ||  index %3 === 2 &&  "text-[#5e24d9]" }`} />
                                    </span>
                                </figure>

                                <div className=" overflow-hidden pt-[65px] pb-[38px] px-0 rounded-[21px] relative card-parent">
                                    <div className="pt-[13px] pb-[16px] text-center">
                                        <h6>{student.name}</h6>
                                        <div className={`w-[22%] h-[1px] ${ index %3 === 0 &&  "bg-[#f9c40a]" ||  index %3 === 1 &&  "bg-[#13bf00]" ||  index %3 === 2 &&  "bg-[#5e24d9]" } mx-auto mt-[16px] border-hover`}></div>
                                    </div>

                                    <div className=" img-child text-center transition-all delay-0 ease-linear duration-500">
                                        <div className={`py-[10px] pl-[32px] pr-[30.6px] ${ index %3 === 0 &&  "bg-[#fff7db]" ||  index %3 === 1 &&  "bg-[#e3ffe0]" ||  index %3 === 2 &&  "bg-[#ece3ff]" }  inline-block mt-[5px] mx-auto `}>
                                            <p className={`text-[14px] leading-[20px] font-[500] ${ index %3 === 0 &&  "text-[#f9c40a]" ||  index %3 === 1 &&  "text-[#13bf00]" ||  index %3 === 2 &&  "text-[#5e24d9]" } `}>
                                                {student.profile}
                                            </p>
                                        </div>
                                        <div className="mt-[35px] ">
                                            <figure className="bg-[#fff7db] w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                                <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="z-[2] bg-transparent mt-[-50px] overflow-hidden para-child opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px]  text-center transition-all delay-0 ease-linear duration-500">
                                        <div>
                                            <p>
                                                {student.experience}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={` ${ index%3 === 0 ?  "bg-[#fff7db]" : "" ||  index%3 === 1 ?  "bg-[#e3ffe0]" :"" ||  index%3 === 2 ?  "bg-[#ece3ff]":"" }  blob `}>

                                    </div>
                                </div>
                            </div>
                            
                        )
                        )}
                        
                    </div>

                </div>

            </section>




        </div>
    )

}

export default Testimonial;



