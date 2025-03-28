import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Common/Navbar";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import { ittrainingDataSerivice } from "../Services/dataService";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Footer from "./Common/Footer";
import CounterPage from "./Common/CounterPage";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { getPlacedStudent } from "../Redux/functionsSlics";
import PageBanner from "./Common/PageBanner";
import convertAnchorToLink from "./Common/ConvertAnchorToLink";


const About = () => {

    const dispatch = useDispatch();

    const [aboutUsData, setAboutData] = useState();

    async function getAboutData() {
        try {
          
            const response = await ittrainingDataSerivice.getAboutUs();

            if (response.status === 200) {
               
                setAboutData(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAboutData();
    }, []);

    useEffect(() => {
        dispatch(getPlacedStudent());
    }, [dispatch])

    const stuPlaced = useSelector((state) => state.backendFunction.stuPlaced);



    const navRef = useRef(null);


    const { ref: enrollNowImg, inView: isEnrollNowImg } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: enrolNow, inView: isEnrollNow } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourJourney, inView: isOurJourney } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourJourneyRSide, inView: isOurJourneyRSide } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: opportunityHead, inView: isOpportunityHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourBeliefImg, inView: isOurBeliefImg } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourMissionRSide, inView: isOurMissionRSide } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourBeliefRside, inView: isOurBeliefRside } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ourMissionImg, inView: isOurMissionImg } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });


    return (
        <div>
            <Navbar />
            {/* page banner start */}
            <PageBanner heading={"About Us"} img={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.bannerImage}`} />
            {/* Page banner End */}

            {/* upcoming opportunity section start */}
            <section className="pt-[99px] pb-[80px] max-979:pt-[70px] max-979:pb-[35px] max-979:px-[20px] max-1321:pt-[90px] max-1321:pb-[35px] px-0">
                <div className="wrapper">
                    <div className="flex max-979:flex-col  justify-between">

                        <div className="w-[46%]  max-979:w-[100%]  ">
                            <figure className={`${isEnrollNowImg && "animate__fadeIn"}`}
                                ref={enrollNowImg}
                                style={{ animationDuration: '3s' }}

                            >
                                <img className="max-w-[100%] ml-auto max-979:mx-auto " src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.yourImaginationImg}`} alt="Top-IT-Training" />
                            </figure>
                            <div className="flex max-1024:flex-col max-979:flex-row max-649:flex-col">
                                <div
                                    ref={enrolNow}
                                    style={{ animationDuration: "3s" }}
                                    className={` max-413:w-[88%] ${isEnrollNow ? "transform ease-linear translate-x-0 duration-[1s] opacity-[1]" : "transform translate-x-[-20px] opacity-0"}
                                 max-480:mt-[40px] max-480:w-[80%]  max-567:w-[63%] max-567:mx-auto max-567:mt-[-170px]  max-649:w-[44%]  max-979:w-[40%] max-1200:w-[50%]  py-[25px] px-[25px] rounded-[16px] shadow-aboutEnrollShadow w-[45.3%] mt-[-254px] bg-[#fff] relative`}>
                                    <figure>
                                        <img className="mx-auto my-0" alt="about-us UI-UX master" src="/about-best-ui-ux-course-in-indore.svg" />
                                    </figure>

                                    <div className="mt-[20px] text-center">
                                        <h6 className="text-[18px] leading-[23px] font-[700] text-[#000] ">UX Master Course</h6>
                                    </div>

                                    <div className="mt-[10px] text-center ">
                                        <h4 className="text-[#b2b2b2] text-[14px] leading-[20px] font-[500] ">Batch starting from</h4>
                                    </div>
                                    <div className="w-[81.2px] h-[66.5px] rounded-tl-[16px] rounded-tr-0 rounded-br-[72px] rounded-bl-0 shadow-aboutEnrollnow bg-[#000] absolute top-0 left-0 text-center flex justify-center pt-[14px] pr-[23.8px] pb-[18.5px] pl-[14.4px] ">
                                        <Link to="/courses" className="text-[white] text-[14px] leading-[20px] font-[700] hover:text-[#009ce5] transition-all duration-[0.3s] ease-linear  " >Enroll now</Link>

                                    </div>

                                </div>
                                <div className="max-374:w-[100%] max-374:ml-0 max-413:w-[90%]  max-567:w-[85%] max-567:ml-auto max-1024:w-[100%] max-979:w-[58%] max-649:w-[68%]  max-1024:pt-[20px] w-[54%] max-1200:w-[49%] max-1200:pt-[10px] max-1400:w-[53%] pt-[22px] pr-0 pb-0 pl-0 inline-block align-middle">
                                    <div className="flex  items-center">
                                        <div className="max-480:w-[50%] max-480:ml-0 max-979:w-[36%] max-767:w-[42%]  max-1024:w-[27%] w-[40%]  max-1200:w-[50%] max-1321:w-[48%] max-1400:w-[45%] max-1400:ml-[10px] ml-[30px] flex ">
                                            {stuPlaced?.slice(stuPlaced.length - 4, stuPlaced.length).map((student, index) => (
                                                <figure key={index} className={` ${index != 0 ? "ml-[-17px]" : ""} max-413:w-[46px] max-413:h-[46px] flex-shrink-0 border-[3px] border-solid border-[#fff] max-979:w-[48px] max-979:h-[48px] w-[48px] h-[48px] max-1200:w-[40px] max-1200:h-[40px] rounded-[50%]  transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out`}>
                                                    <Link to="/testimonials">
                                                        <img src={`${ittrainingDataSerivice.backendUrl}/${student?.img}`} className="rounded-[50%] w-[100%] h-[100%]" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                                    </Link>

                                                </figure>

                                            ))}
                                        </div>
                                        <div className="max-413:w-[46%] max-480:w-[41%] max-767:w-[35%] max-1024:w-[32%]  max-979:w-[30%] max-1024:ml-0 w-[42%] ml-[15px] max-1400:w-[43%] max-1400:ml-[8px] ">
                                            <div>
                                                <h4 className="leading-[24px] text-[14px] font-[500] text-[#000] ">
                                                    Over <span className="text-[#1aaef4]">{aboutUsData?.totalStudentJoined} </span>+
                                                    Students Joined

                                                </h4>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="w-[48.7%] max-979:w-[100%] max-979:mt-[70px]">
                            <div className=" max-979:w-[100%] w-[87%] max-1400:w-[84%] max-1321:w-[92%] ">
                                <div>
                                    <div className={` aboutUsTaking listBgImage hoverBlue ${isOpportunityHead ? "transform translate-y-0 duration-700 opacity-[1]" : "transform translate-y-[-15px] opacity-0"}`}
                                        ref={opportunityHead}
                                        style={{ animationDuration: '3s' }}

                                    >
                                        {convertAnchorToLink(String(aboutUsData?.yourImaginationHead))}
                                    </div>
                                </div>

                                <div className={`mt-[35px] `}>
                                    <Link to="/courses" className="btnAfter  cursor-pointer" >
                                        View More
                                    </Link>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>


            </section>
            {/* upcoming opportunity section End */}

            {/* our journey for student career groth section start */}
            <section className="m-0 pb-[74px] max-979:px-[20px] max-979:py-0 ">
                <div className="wrapper">
                    <div className="pt-[53px] pb-[75px] px-0 flex max-979:flex-col-reverse  justify-between">
                        <div className={`max-374:mt-[300px] w-[50%] max-979:w-[100%] max-979:mt-[177px] max-1200:w-[55%] max-1321:mt-[20px] mt-[51px] ${isOurJourney ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : " transform translate-x-[-25px] opacity-0"}`}
                            ref={ourJourney}
                        >
                            <div className="w-[100%]   hoverBlue ourJourneyAbout overflow-hidden"
                            >
                                {convertAnchorToLink(String(aboutUsData?.ourJourneyHead))}
                            </div>

                        </div>
                        <div className={`w-[42%] max-979:w-[100%]  text-center   ${isOurJourneyRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-5 opacity-0"}`}
                            ref={ourJourneyRSide}
                            style={{ animationDuration: "3s" }}

                        >
                            <div className="relative">
                                <figure className="relative">
                                    <img className="rounded-[50%] max-979:mx-auto" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourJourneyImg}`} />
                                    <figcaption className="max-413:left-[-8px] max-413:top-[-25px] max-413:p-[10px] max-480:w-[35%] max-480:p-[15px] max-567:w-[34%] max-567:left-[-10px] p-[27px] max-979:left-[50px] max-979:w-[28%] max-1200:w-[40%] w-[33%] rounded-[10px] shadow-aboutFigCaptionShad absolute top-0 left-[-30px] bg-[#fff]">
                                        <div className="text-center box-border">
                                            <h4 className="text-[14px] leading-[20px] font-[500] text-[#8e8e8e] p-0">We Guarantee</h4>
                                            <h3 className="text-[#1AAEF4] text-[36px] leading-[52px] tracking-[0.72px] font-[800] p-0">100%</h3>
                                            <p className="text-[#8e8e8e] text-[14px] leading-[20px] font-[500] p-0">Placement</p>
                                        </div>

                                    </figcaption>

                                </figure>
                                <div className="w-[44%] max-374:left-[40px] max-374:w-[78%] max-374:bottom-[-250px] max-413:w-[68%] max-413:p-[15px] max-413:left-[55px] max-480:left-[80px] max-480:w-[65%] max-567:w-[50%] max-567:left-[110px] max-649:left-[170px] max-649:w-[40%] max-800:w-[36%] max-800:left-[220px] max-979:w-[33%] max-979:left-[300px] max-1200:w-[56%] pt-[34px] pb-[23px] pl-[24px] pr-[24px] rounded-[24px] shadow-aboutPlacedShad absolute bottom-[-115px] left-[150px] max-1200:left-[100px] bg-[#fff]">
                                    <h6>Our Placed Candidates</h6>

                                    <div className=" w-[100%] relative">
                                        <button onClick={() => { navRef.current.slidePrev() }} className="w-[30px] h-[20px]  z-[5] absolute left-0 max-1321:left-[-10px]  top-[75px] cursor-pointer flex justify-center items-center"><img src="/our-alumni-slider-prev.svg" /></button>
                                        <button onClick={() => { navRef.current.slideNext() }} className="w-[30px] h-[20px] z-[5] absolute right-0 top-[75px] max-1321:right-[-10px] cursor-pointer flex justify-center items-center"><img src="/our-alumni-slider-next.svg" /></button>

                                        <Swiper
                                            modules={[Navigation, EffectFade]}
                                            spaceBetween={0}
                                            effect="fade" // Apply fade effect
                                            fadeEffect={{ crossFade: true }} // Optional: smooth fading
                                            slidesPerView={1}
                                            speed={600}
                                            loop={true}
                                            onSwiper={(swiper) => navRef.current = swiper}
                                        >
                                            {
                                                stuPlaced?.map((student, index) => (
                                                    <SwiperSlide key={index}>
                                                        <figure className="mt-[25px] flex  justify-center ">
                                                            <img className="rounded-[50%] w-[106px] h-[106px]  " src={`${ittrainingDataSerivice.backendUrl}/${student.img}`} alt="student image" />
                                                        </figure>
                                                        <div className="mt-[20px]">

                                                            <h4 className="text-[14px] leading-[20px] font-[500] text-[#000] ">
                                                                {student.name}
                                                            </h4>
                                                        </div>

                                                    </SwiperSlide>))
                                            }
                                        </Swiper>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="max-649:pt-0 max-979:flex-col pb-[53px] pt-[170px] max-979:pt-[25px] max-1200:pt-[100px]  px-0 flex  justify-between">
                        <div className={`w-[42%] max-979:w-[100%] ${isOurBeliefImg ? "transform translate-x-0 ease-linear duration-1000 opacity-[1] " : "transform translate-x-5 opacity-0"} `}
                            ref={ourBeliefImg}

                        >
                            <div className="ml-[14px]">
                                <figure className="m-0">
                                    <img className="w-[100%] max-480:w-[95%] max-649:w-[70%] max-649:mx-auto" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourBeliefImg}`} />

                                </figure>

                            </div>

                        </div>

                        <div className={`max-979:w-[100%] max-413:pt-[20px] max-567:px-0 max-979:pt-[50px] max-1200:w-[58%] max-1200:py-0 max-1200:px-[25px]  w-[50%] ${isOurBeliefRside ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                            ref={ourBeliefRside}
                        >
                            <div className="w-[100%] max-979:text-center ourBeliefAbout hoverBlue"

                            >
                                {convertAnchorToLink(String(aboutUsData?.ourBeliefsHead))}

                            </div>

                        </div>
                    </div>


                    <div className=" ourMissionAbout pb-[53px] pt-0 flex max-1200:flex-col justify-between">
                        <div className={`w-[46%] max-1200:w-[100%] max-1200:mb-[50px]  ${isOurMissionImg ? "transform translate-x-0 duration-1000 ease-linear opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                            ref={ourMissionImg}

                        >
                            <figure className="">
                                <img className="max-w-[100%] max-h-[100%] object-cover " src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourMissionImg}`} alt="best it training team coaching class indore" />
                            </figure>

                        </div>
                        <div className={`w-[50%] max-1200:w-[100%] ${isOurMissionRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-1" : "transform translate-x-[20px] opacity-0"} `}
                            ref={ourMissionRSide}
                        >
                            <div>
                                <h3>{aboutUsData?.ourMissionHead}</h3>
                            </div>
                            <div className="mt-[25px] ">
                                <div className=" flex max-480:flex-col justify-between">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#D9F3FF] flex justify-center items-center">
                                            <img src="/mission.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className="max-480:mt-[20px] max-567:w-[83%]  w-[87%] max-480:w-[100%]">
                                        {convertAnchorToLink(String(aboutUsData?.missionDetails))}


                                    </div>
                                </div>
                                <div className="max-1200:mt-[15px] max-480:mt-[20px] flex max-480:flex-col justify-between max-1321:mt-[0px] mt-[25px] ">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#e3ffe0] flex justify-center items-center">
                                            <img src="/vision.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className="max-480:mt-[20px] max-567:w-[83%] w-[87%] max-480:w-[100%]">
                                        {convertAnchorToLink(String(aboutUsData?.visionDetails))}

                                    </div>
                                </div>
                                <div className="max-1200:mt-[15px] max-480:mt-[20px] flex max-480:flex-col justify-between max-1321:mt-[0px] mt-[25px]">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#ECE3FF] flex justify-center items-center">
                                            <img src="/values.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className=" max-480:mt-[20px] max-567:w-[83%]  w-[87%] max-480:w-[100%]">
                                        {convertAnchorToLink(String(aboutUsData?.valuesDetails))}

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <CounterPage />
            <Footer />

        </div>
    )

}

export default About;




