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
import DOMPurify from "dompurify";

const About = () => {

    const dispatch = useDispatch();

    const [aboutUsData, setAboutData] = useState();

    async function getAboutData() {
        try {
            console.log("about us call");
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
            <section className="pt-[99px] pb-[80px] px-0">
                <div className="wrapper">
                    <div className="flex justify-between">

                        <div className="w-[46%] ">
                            <figure className={`${isEnrollNowImg && "animate__fadeIn"}`}
                                ref={enrollNowImg}
                                style={{ animationDuration: '3s' }}

                            >
                                <img className="max-w-[100%] ml-auto" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.yourImaginationImg}`} alt="Top-IT-Training" />
                            </figure>
                            <div className="flex">
                                <div
                                    ref={enrolNow}
                                    style={{ animationDuration: "3s" }}
                                    className={` ${isEnrollNow ? "transform ease-linear translate-x-0 duration-[1s] opacity-[1]" : "transform translate-x-[-20px] opacity-0"}  py-[25px] px-[25px] rounded-[16px] shadow-aboutEnrollShadow w-[45.3%] mt-[-254px] bg-[#fff] relative`}>
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
                                        <Link to="/course" className="text-[white] text-[14px] leading-[20px] font-[700] hover:text-[#009ce5] transition-all duration-[0.3s] ease-linear  " >Enroll now</Link>

                                    </div>

                                </div>
                                <div className="w-[54%] pt-[22px] pr-0 pb-0 pl-0 inline-block align-middle">
                                    <div className="flex">
                                        <div className="w-[40%] ml-[30px] flex ">
                                            <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%]  transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out">
                                                <Link to="/about-us">
                                                    <img src="/It_training_user_profile_3.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                                </Link>

                                            </figure>
                                            <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%] ml-[-21px] transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                                <Link to="/about-us">
                                                    <img src="/It_training_user_profile_2.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                                </Link>

                                            </figure>
                                            <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px]  rounded-[50%] ml-[-21px] transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                                <Link to="/about-us">
                                                    <img src="/It_training_user_profile_1.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                                </Link>

                                            </figure>
                                            <figure className=" flex-shrink-0 border-[3px] border-solid border-[#fff] w-[48px] h-[48px] rounded-[50%] ml-[-21px]  transform hover:z-[1] hover:scale-[1.1] transition-all duration-[0.3s] ease-out ">
                                                <Link to="/about-us">
                                                    <img className="" src="/It_training_user_profile_4.png" alt="Best IT Training Indore | Best IT Training Institute IT Indore" />
                                                </Link>

                                            </figure>
                                        </div>
                                        <div className="w-[42%] ml-[15px] ">
                                            <div>
                                                <h4 className="leading-[24px] text-[14px] font-[500] text-[#000] ">
                                                    Over <span className="text-[#1aaef4]">{aboutUsData?.totalStudentJoined} </span>
                                                    Students Joined

                                                </h4>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="w-[48.7%]">
                            <div className="w-[87%] ">
                                <div>
                                    <div className={`${isOpportunityHead ? "transform translate-y-0 duration-700 opacity-[1]" : "transform translate-y-[-15px] opacity-0"}`}
                                        ref={opportunityHead}
                                        style={{ animationDuration: '3s' }}
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(aboutUsData?.yourImaginationHead
                                            )
                                        }}
                                    >




                                    </div>
                                </div>
                               
                                <div className={`mt-[35px] `}>
                                    <Link to="/course" className="btnAfter  cursor-pointer" >
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
            <section className="m-0 pb-[74px] ">
                <div className="wrapper">
                    <div className="py-[53px] px-0 flex justify-between">
                        <div className={`w-[50%] mt-[51px] ${isOurJourney ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : " transform translate-x-[-25px] opacity-0"}`}
                            ref={ourJourney}
                        >
                            <div className="w-[100%] "
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(aboutUsData?.ourJourneyHead
                                    )
                                }}

                            >

                            </div>

                        </div>
                        <div className={`w-[42%] text-center   ${isOurJourneyRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-5 opacity-0"}`}
                            ref={ourJourneyRSide}
                            style={{ animationDuration: "3s" }}

                        >
                            <div className="relative">
                                <figure className="relative">
                                    <img className="rounded-[50%]" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourJourneyImg}`} />
                                    <figcaption className="p-[27px] w-[33%] rounded-[10px] shadow-aboutFigCaptionShad absolute top-0 left-[-30px] bg-[#fff]">
                                        <div className="text-center box-border">
                                            <h4 className="text-[14px] leading-[20px] font-[500] text-[#8e8e8e] p-0">We Guarantee</h4>
                                            <h3 className="text-[#1AAEF4] text-[36px] leading-[52px] tracking-[0.72px] font-[800] p-0">100%</h3>
                                            <p className="text-[#8e8e8e] text-[14px] leading-[20px] font-[500] p-0">Placement</p>
                                        </div>

                                    </figcaption>

                                </figure>
                                <div className="w-[44%] pt-[34px] pb-[23px] pl-[24px] pr-[23px] rounded-[24px] shadow-aboutPlacedShad absolute bottom-[-115px] left-[150px] bg-[#fff]">
                                    <h6>Our Placed Candidates</h6>

                                    <div className=" w-[197.297px] relative">
                                        <button onClick={() => { navRef.current.slidePrev() }} className="w-[30px] h-[20px]  z-[5] absolute left-0  top-[75px] cursor-pointer flex justify-center items-center"><img src="/our-alumni-slider-prev.svg" /></button>
                                        <button onClick={() => { navRef.current.slideNext() }} className="w-[30px] h-[20px] z-[5] absolute right-0 top-[75px] cursor-pointer flex justify-center items-center"><img src="/our-alumni-slider-next.svg" /></button>

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
                                                        <figure className="mt-[25px] flex justify-center ">
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

                    <div className="pb-[53px] pt-[170px]  px-0 flex justify-between">
                        <div className={`w-[42%] ${isOurBeliefImg ? "transform translate-x-0 ease-linear duration-1000 opacity-[1] " : "transform translate-x-5 opacity-0"} `}
                            ref={ourBeliefImg}

                        >
                            <div className="ml-[14px]">
                                <figure className="m-0">
                                    <img className="w-[100%]" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourBeliefImg}`} />

                                </figure>

                            </div>

                        </div>

                        <div className={`w-[50%] ${isOurBeliefRside ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                            ref={ourBeliefRside}
                        >
                            <div className="w-[100%]"
                            dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutUsData?.ourBeliefsHead)}}
                            >

                            </div>

                        </div>
                    </div>


                    <div className="py-[53px] flex justify-between">
                        <div className={`w-[46%] ${isOurMissionImg ? "transform translate-x-0 duration-1000 ease-linear opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                            ref={ourMissionImg}

                        >
                            <figure>
                                <img className="w-[100%]" src={`${ittrainingDataSerivice.backendUrl}/${aboutUsData?.ourMissionImg}`} alt="best it training team coaching class indore" />
                            </figure>

                        </div>
                        <div className={`w-[50%] ${isOurMissionRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-1" : "transform translate-x-[20px] opacity-0"} `}
                            ref={ourMissionRSide}
                        >
                            <div>
                                <h3>{aboutUsData?.ourMissionHead}</h3>
                            </div>
                            <div className="mt-[25px] ">
                                <div className="flex justify-between">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#D9F3FF] flex justify-center items-center">
                                            <img src="/mission.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className="w-[87%]"
                                    dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutUsData?.missionDetails)}}>
                                       
                                    </div>
                                </div>
                                <div className="flex justify-between ">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#e3ffe0] flex justify-center items-center">
                                            <img src="/vision.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className="w-[87%]"
                                      dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutUsData?.visionDetails)}}>
                                       
                                    </div>
                                </div>
                                <div className="flex justify-between mt-[25px]">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#ECE3FF] flex justify-center items-center">
                                            <img src="/values.svg" alt="mission" />

                                        </figure>

                                    </div>
                                    <div className="w-[87%]"
                                    dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(aboutUsData?.valuesDetails)}}>
                                        
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




