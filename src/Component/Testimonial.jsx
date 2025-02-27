import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Common/Navbar";

import { MdOutlineFormatQuote } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { getPlacedStudent } from "../Redux/functionsSlics";

import PageBanner from "./Common/PageBanner";
import { ittrainingDataSerivice } from "../Services/dataService";
import Footer from "./Common/Footer";
import CounterPage from "./Common/CounterPage";
import { useInView } from "react-intersection-observer";



const Testimonial = () => {

    //const ref = useRef(0);
    const [banner, setBanner] = React.useState(null);

    const [windowSize, setWindowSize] = useState(window.innerWidth >= 1024)

    const dispatch = useDispatch();

    const stuPlaced = useSelector((state) => state.backendFunction.stuPlaced);
    // ref.current += 1;
    //console.log("ref count -> ", ref.current);

    useEffect(() => {
        dispatch(getPlacedStudent());
    }, [dispatch])


    async function getBanner() {
        try {
            const response = await ittrainingDataSerivice.getTestimonialBanner();
            console.log("response data", response.data)

            if (response.status === 200)
                setBanner(response.data?.data);
        }
        catch (error) {
            console.log("Error to get the banner", error);
        }
    }
    useEffect(() => {
        getBanner();
    }, [])


    const { ref: card, inView: isCard } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })


    return (
        <div>
            <Navbar />

            <PageBanner heading={"Testimonials"} img={`${ittrainingDataSerivice?.backendUrl}/${banner?.img}`} />


            <section className="px-0 pt-[124px] pb-[48px] bg-[#f3fbff]">
                <div className="wrapper">
                    <div className={` ${isCard ? "animate__fadeIn" : ""} w-[100%] relative flex max-1024:flex-wrap justify-between `}
                        ref={card}
                        style={{ animationDuration: '5s' }}

                    >
                        {windowSize &&
                            <div className="w-[31.5%] max-1024:w-[40%]  max-1321:w-[31.2%] max-1400:w-[31.4%]">
                                {
                                    stuPlaced?.filter((_, index) => index % 3 === 0).map((student, index) => (

                                        <div key={index} className={` w-[100%] rounded-[21px] shadow-testimonialCardShad  h-[461px]  mb-[70px] bg-[#fff] relative special-card`}>
                                            <figure className={`w-[86px] h-[86px] rounded-[50%] bg-[#fff7db]  absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 `}>
                                                <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">
                                                    <MdOutlineFormatQuote style={{ height: "70px", width: "36px" }} className={`text-[#f9c40a]`} />
                                                </span>
                                            </figure>

                                            <div className=" overflow-hidden pt-[65px] pb-[38px] px-0 rounded-[21px] relative card-parent">
                                                <div className="pt-[13px] pb-[16px] text-center ">
                                                    <h6 className="studentName z-[1]">{student.name}</h6>
                                                    <div className={`w-[22%] h-[1px] bg-[#f9c40a]  mx-auto mt-[16px] border-hover`}></div>
                                                </div>

                                                <div className=" img-child text-center transition-all delay-0 ease-linear duration-500">
                                                    <div className={`py-[10px] pl-[32px] pr-[30.6px] bg-[#fff7db]   inline-block mt-[5px] mx-auto `}>
                                                        <p className={`!text-[14px] !leading-[20px] font-[500] text-[#f9c40a] `}>
                                                            {student.profile}
                                                        </p>
                                                    </div>
                                                    <div className="mt-[35px] ">
                                                        <figure className="bg-[#fff7db] w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                                            <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} />
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="z-[2] bg-transparent max-1200:mt-[-100px]   mt-[-50px] overflow-hidden para-child opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px]  text-center transition-all delay-0 ease-linear duration-500">
                                                    <div>
                                                        <p className="testimonialP">
                                                            {student.experience}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`bg-[#fff7db]  blob `}>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                            </div>
                        }
                        {
                            windowSize && <div className="w-[31.5%] max-1024:w-[45%]   max-1321:w-[31.2%]  max-1400:w-[31.4%]">
                                {
                                    stuPlaced?.filter((_, index) => index % 3 === 1).map((student, index) => (

                                        <div key={index} className={` w-[100%] ${index === 0 ? "mt-[140px] max-1200:mt-0" : ""} rounded-[21px] shadow-testimonialCardShad  h-[461px]  mb-[70px] bg-[#fff] relative special-card`}>
                                            <figure className={`w-[86px] h-[86px] rounded-[50%] bg-[#e3ffe0] absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 `}>
                                                <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">

                                                    <MdOutlineFormatQuote style={{ height: "70px", width: "36px" }} className={`text-[#13bf00]`} />
                                                </span>
                                            </figure>

                                            <div className=" overflow-hidden pt-[65px] pb-[38px] px-0 rounded-[21px] relative card-parent">
                                                <div className="pt-[13px] pb-[16px] text-center">
                                                    <h6 className="studentName z-[1]" >{student.name}</h6>
                                                    <div className={`w-[22%] h-[1px] bg-[#13bf00] mx-auto mt-[16px] border-hover`}></div>
                                                </div>

                                                <div className=" img-child text-center transition-all delay-0 ease-linear duration-500">
                                                    <div className={`py-[10px] pl-[32px] pr-[30.6px] bg-[#e3ffe0]  inline-block mt-[5px] mx-auto `}>
                                                        <p className={` !text-[14px] !leading-[20px] font-[500] text-[#13bf00] `}>
                                                            {student.profile}
                                                        </p>
                                                    </div>
                                                    <div className="mt-[35px] ">
                                                        <figure className="bg-[#fff7db] w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                                            <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} />
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="z-[2] bg-transparent max-1200:mt-[-100px]  mt-[-50px] overflow-hidden para-child opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px]  text-center transition-all delay-0 ease-linear duration-500">
                                                    <div>
                                                        <p className="testimonialP">
                                                            {student.experience}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={` bg-[#e3ffe0]  blob `}>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                    )
                                }
                            </div>
                        }
                        {
                            windowSize &&
                            <div className="w-[31.5%]  max-1024:w-[45%] max-1321:w-[31.2%] max-1400:w-[31.4%] ">
                                {
                                    stuPlaced?.filter((_, index) => index % 3 === 2).map((student, index) => (

                                        <div key={index} className={`w-[100%] rounded-[21px] shadow-testimonialCardShad  h-[461px]  mb-[70px] bg-[#fff] relative special-card`}>
                                            <figure className={`w-[86px] h-[86px] rounded-[50%] bg-[#ece3ff] absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 `}>
                                                <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">

                                                    <MdOutlineFormatQuote style={{ height: "70px", width: "36px" }} className={`text-[#5e24d9]`} />
                                                </span>
                                            </figure>

                                            <div className=" overflow-hidden pt-[65px] pb-[38px] px-0 rounded-[21px] relative card-parent">
                                                <div className="pt-[13px] pb-[16px] text-center">
                                                    <h6 className="studentName z-[1]" >{student.name}</h6>
                                                    <div className={`w-[22%] h-[1px] bg-[#5e24d9] mx-auto mt-[16px] border-hover`}></div>
                                                </div>

                                                <div className=" img-child text-center transition-all delay-0 ease-linear duration-500">
                                                    <div className={`py-[10px] pl-[32px] pr-[30.6px] bg-[#ece3ff] inline-block mt-[5px] mx-auto `}>
                                                        <p className={` !text-[14px] !leading-[20px] font-[500] text-[#5e24d9] `}>
                                                            {student.profile}
                                                        </p>
                                                    </div>
                                                    <div className="mt-[35px] ">
                                                        <figure className="bg-[#fff7db] w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                                            <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} />
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="z-[2] bg-transparent  max-1200:mt-[-100px]  mt-[-50px] overflow-hidden para-child opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px]  text-center transition-all delay-0 ease-linear duration-500">
                                                    <div>
                                                        <p className="testimonialP">
                                                            {student.experience}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`  bg-[#ece3ff]  blob `}>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                    )
                                }
                            </div>
                        }

                        {
                            !windowSize &&
                            <div className="w-[100%] flex flex-wrap justify-evenly  ">
                                {
                                    stuPlaced?.map((student, index) => (

                                        <div key={index} className={` max-480:w-[90%] max-567:w-[89%] max-649:w-[70%]  max-767:w-[62%] max-1024:w-[42%] max-979:w-[55%] max-979:mx-auto rounded-[21px] shadow-testimonialCardShad   mb-[70px] bg-[#fff] relative special-card`}>
                                            <figure className={`w-[86px] h-[86px] max-413:h-[75px] max-413:w-[75px] rounded-[50%] ${index % 3 === 0 ? "bg-[#fff7db]" : ""} ${index % 3 === 1 ? "bg-[#e3ffe0]" : ""} ${index % 3 === 2 ? "bg-[#ece3ff]" : ""}  absolute top-[-52px] z-[1] left-0 right-0 mx-auto my-0 `}>
                                                <span className="absolute top-[50%] left-[30%] z-[10] my-0 mx-auto translate-y-[-50%] block align-middle">

                                                    <MdOutlineFormatQuote style={{ height: "70px", width: "36px" }} className={`${index % 3 === 0 ? "text-[#f9c40a]" : ""} ${index % 3 === 1 ? "text-[#13bf00]" : ""} ${index % 3 === 2 ? "text-[#5e24d9]" : ""}`} />
                                                </span>
                                            </figure>

                                            <div className=" overflow-hidden max-567:pt-[33px] max-567:pb-[20px]  pt-[65px] pb-[25px] px-0 rounded-[21px] relative card-parent">
                                                <div className="pt-[13px] pb-[16px] text-center">
                                                    <h6 className="studentName"> {student.name}</h6>
                                                    <div className={`w-[22%] h-[1px] ${index % 3 === 0 ? "bg-[#f9c40a]" : ""} ${index % 3 === 1 ? "bg-[#13bf00]" : ""} ${index % 3 === 2 ? "bg-[#5e24d9]" : ""} mx-auto mt-[16px] border-hover`}></div>
                                                </div>

                                                <div className=" img-child text-center transition-all delay-0 ease-linear duration-500">
                                                    <div className={`py-[10px] pl-[32px] pr-[30.6px] ${index % 3 === 0 ? "bg-[#fff7db]" : ""} ${index % 3 === 1 ? "bg-[#e3ffe0]" : ""} ${index % 3 === 2 ? "bg-[#ece3ff]" : ""}  inline-block mt-[5px] mx-auto `}>
                                                        <p className={`!text-[14px] !leading-[20px] font-[500] ${index % 3 === 0 ? "text-[#f9c40a]" : ""} ${index % 3 === 1 ? "text-[#13bf00]" : ""} ${index % 3 === 2 ? "text-[#5e24d9]" : ""} `}>
                                                            {student.profile}
                                                        </p>
                                                    </div>
                                                    <div className="mt-[20px] ">
                                                        <figure className="bg-[#fff7db] max-374:h-[180px] max-374:w-[180px]  w-[206px] h-[206px] my-0 mx-auto rounded-[50%] ">
                                                            <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} />
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="z-[2]  max-413:mt-[-110px] bg-transparent max-1024:mt-[-100px] mt-[-50px] overflow-hidden para-child opacity-0 absolute top-[30%] bottom-0 left-0 right-0 py-0 px-[25px]  text-center transition-all delay-0 ease-linear duration-500">
                                                    <div>
                                                        <p className="studentExperinceP">
                                                            {student.experience}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`  ${index % 3 === 0 ? "bg-[#fff7db]" : ""} ${index % 3 === 1 ? "bg-[#e3ffe0]" : ""} ${index % 3 === 2 ? "bg-[#ece3ff]" : ""}  blob `}>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                    )
                                }
                            </div>
                        }

                    </div>

                </div>

            </section>

            <CounterPage />
            <Footer />

        </div>
    )

}

export default Testimonial;



