import React, { useEffect, useRef } from "react";
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
import { useSelector,useDispatch } from "react-redux";
import { getPlacedStudent } from "../Redux/functionsSlics";
import PageBanner from "./Common/PageBanner";


const About = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPlacedStudent());
    },[dispatch])

    const stuPlaced = useSelector((state)=>state.backendFunction.stuPlaced);

    

    const navRef = useRef(null);

   
    const { ref: mainPageHead, inView: isMainPageHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
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
            <PageBanner heading={"About Us"} img={"/About-Us-Coaching-Class-Institute.jpg"}/>
            {/* Page banner End */}

            {/* upcoming opportunity section start */}
            <section className="pt-[99px] pb-[80px] px-0">
                <div className="wrapper">
                    <div className="flex justify-between">

                        <div className="w-[46%] ">
                            <figure className={`${isEnrollNowImg && "animate__fadeIn"}`}
                            ref={enrollNowImg}
                            style={{animationDuration:'3s'}}
                            >
                                <img className="max-w-[100%] ml-auto" src="/Top-IT-Training-indore-coaching-class.jpg" alt="Top-IT-Training" />
                            </figure>
                            <div className="flex">
                                <div 
                                ref={enrolNow}
                                style={{animationDuration:"3s"}}
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
                                                    Over <span className="text-[#1aaef4]">750+ </span>
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
                                    <h3 className={`${isOpportunityHead ? "transform translate-y-0 duration-700 opacity-[1]" : "transform translate-y-[-15px] opacity-0"}`}
                                    ref={opportunityHead}
                                    style={{animationDuration:'3s'}}
                                    >Taking your imagination as our upcoming opportunity.</h3>
                                </div>
                                <div className="mt-[20px] ">
                                    <p>
                                        We are one of the Indore EdTech training institutes, who energetically deliver immersive digital learning experiences through the latest
                                        <Link to="/course" className="hover:text-[#009ce5] transition-colors duration-200 ease-linear"><strong> courses </strong></Link>
                                        and technology, industry partnerships, and top-notch faculty at ease. We provide training in the latest technologies like Java, Java Script, React, and Php etc.
                                    </p>

                                    <h6 className="my-[26px] ">
                                        Courses we Offer
                                    </h6>

                                    <ul className="m-0">
                                        <li className="text-[16px] leading-[28px] font-[400] text-[#000] pl-[35px] " style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: '0%', backgroundPositionY: '10px' }}>Looking for <strong>Scratch Courses</strong> </li>
                                        <li className="text-[16px] leading-[28px] font-[400] text-[#000] pl-[35px] mt-[20px]" style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: '0%', backgroundPositionY: '10px' }}>Search for <strong>Experimentation while Learning</strong> </li>
                                        <li className="text-[16px] leading-[28px] font-[400] text-[#000] pl-[35px] mt-[20px]" style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: '0%', backgroundPositionY: '10px' }}>Looking <strong>Technology Updates</strong> </li>
                                        <li className="text-[16px] leading-[28px] font-[400] text-[#000] pl-[35px] mt-[20px]" style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: '0%', backgroundPositionY: '10px' }}> <strong>Pocket-friendly</strong> Courses</li>
                                        <li className="text-[16px] leading-[28px] font-[400] text-[#000] pl-[35px] mt-[20px]" style={{ backgroundImage: `url('/arrow-right-blue.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: '0%', backgroundPositionY: '10px' }}>Job Oriented <strong>Skills Upgradation</strong> </li>

                                    </ul>

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
                        <div className={`w-[50%] mt-[51px] ${isOurJourney ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]":" transform translate-x-[-25px] opacity-0"}`}
                        ref={ourJourney}
                        >
                            <div className="w-[80%] ">
                                <h3 className="font-[800]">
                                    Our Journey for Students Career Growth
                                </h3>

                            </div>
                            <div className="mt-[25px] ">
                                <p>
                                    IT Training Indore Center is a part of <strong><a href="https://conativeitsolutions.com" rel="noopener" target="_blank" className="hover:text-[#009ce5] transition-all duration-200 ease-out">Conative IT Solutions Pvt Ltd.</a></strong> It is a leading IT company based in Indore (M.P).
                                </p>
                                <p className="mt-[25px] ">
                                    Conative IT Solutions is the
                                    <strong> Best Web Design and Web Development Company </strong>
                                    providing website design and website development services to clients across the globe. It is an India-based offshore development center offering Web Solutions at reasonable rates for Web application development, website designing, website maintenance, online shopping cart solutions, e-commerce solutions, portal development, web directory development for global businesses.
                                </p>
                            </div>

                        </div>
                        <div className={`w-[42%] text-center   ${isOurJourneyRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-5 opacity-0"}`}
                        ref={ourJourneyRSide}
                        style={{animationDuration:"3s"}}
                        
                        >
                            <div className="relative">
                                <figure className="relative">
                                    <img className="rounded-[50%]" src="/career-with-best-it-training-indore.jpg" />
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
                                    <img className="w-[100%]" src="/best-educators-image.svg" />

                                </figure>

                            </div>

                        </div>

                        <div className={`w-[50%] ${isOurBeliefRside ? "transform translate-x-0 ease-linear duration-1000 opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                        ref={ourBeliefRside}
                        >
                            <div className="w-[100%]">
                                <h3>Our Beliefs</h3>

                                <div className="mt-[26px]">
                                    <p>
                                        <strong>
                                            <Link to="/" className="hover:text-[#009ce5] transition-all duration-200 ease-out">IT Training Indore </Link>
                                        </strong>
                                        believe in offering job-oriented IT Classes and training in Indore which are well-planned, keeping in view industry requirements and future prospects. Although we have the latest available resources to cater, giving the most outstanding results. We believe that it is not just money or manpower but, rather, team efforts which can make any organisation reach sky-high.

                                    </p>
                                    <p className="mt-[25px]">
                                    We have top-level faculty and a dedicated 
                                    <strong>
                                            <Link to="/testimonials" className="hover:text-[#009ce5] transition-all duration-200 ease-out"> placement cell </Link>
                                        </strong>
                                        because for all the tech and non tech students, they are the building block on which the organisation rests. We give our students the freedom to discuss, contradict and learn. Also ensure that the right student chooses the right course according to his/her academic background, aptitude and skill-set. This will help our students get the career edge and the extra push that is so highly needed in a competitive job market, eventually leading to professional success.
                                    </p>


                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="py-[53px] flex justify-between">
                        <div className={`w-[46%] ${isOurMissionImg ? "transform translate-x-0 duration-1000 ease-linear opacity-[1]" : "transform translate-x-[-20px] opacity-0"}`}
                        ref={ourMissionImg}
                        
                        >
                            <figure>
                                <img className="w-[100%]" src="/best-it-training-team-coaching-class.jpg" alt="best it training team coaching class indore"/>
                            </figure>

                        </div>
                        <div className={`w-[50%] ${isOurMissionRSide ? "transform translate-x-0 ease-linear duration-1000 opacity-1" : "transform translate-x-[20px] opacity-0"} `}
                        ref={ourMissionRSide}
                        >
                            <div>
                                <h3>Our Mission, Vision and Values</h3>
                            </div>
                            <div className="mt-[25px] ">
                                <div className="flex justify-between">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#D9F3FF] flex justify-center items-center">
                                            <img src="/mission.svg" alt="mission"/>

                                        </figure>

                                    </div>
                                    <div className="w-[87%]">
                                        <p><strong>Mission</strong></p>
                                        <p className="mt-[10px] ">Our aim is to provide skilled manpower in the areas of Web design , Web development, Software Development, Graphic Design, and SEO along with introducing students and professionals with the latest technology in the IT industry.</p>

                                    </div>
                                </div>
                                <div className="flex justify-between mt-[25px]">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#e3ffe0] flex justify-center items-center">
                                            <img src="/vision.svg" alt="mission"/>

                                        </figure>

                                    </div>
                                    <div className="w-[87%]">
                                        <p><strong>Vision</strong></p>
                                        <p className="mt-[10px] ">To deliver best output in the form of projects and courses, that will show the students clear vision for their future success.</p>

                                    </div>
                                </div>
                                <div className="flex justify-between mt-[25px]">
                                    <div className="w-[50px] h-[50px] ">
                                        <figure className="w-[100%] h-[100%] rounded-[10px] bg-[#ECE3FF] flex justify-center items-center">
                                            <img src="/values.svg" alt="mission"/>

                                        </figure>

                                    </div>
                                    <div className="w-[87%]">
                                        <p><strong>Values</strong></p>
                                        <p className="mt-[10px] ">To always have transparency with everyone who connects with us with loyalty and integrity.</p>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <CounterPage/>
            <Footer/>

        </div>
    )

}

export default About;




