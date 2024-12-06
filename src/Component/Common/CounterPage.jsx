import React,{useState} from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";

const CounterPage=()=>{

    const { ref: countRef, inView: isCountRef } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        
            <section className="pt-[55px] pb-[300px] px-0 mb-[-620px] bg-[#f3fbff] " style={{background:`url('/our-achievement-paperplane.svg')`,backgroundRepeat:'no-repeat',backgroundPositionX:"67%",backgroundPositionY:"70%",backgroundColor:"#f3fbff"}}>
                <div className="wrapper text-center">
                    <h3 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">
                    We feel proud about our Stats
                    </h3>

                    <div className={`mt-[37px]  ${isCountRef && "animate__fadeIn"} flex`} 
                    ref={countRef}
                    style={{animationDuration:"3s"}}
                    >
                        <div className="w-[25%] relative text-center mentorBorder " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                            start={0}
                                            end={10}
                                            duration={5}

                                        />}
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Mentors</p>

                        </div>
                        <div className="w-[25%] relative text-center mentorBorder " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                            start={0}
                                            end={10}
                                            duration={5}

                                        />}
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Years Of Experience</p>

                        </div>
                        <div className="w-[25%] relative text-center mentorBorder " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                            start={0}
                                            end={60}
                                            duration={5}

                                        />}<span className="ml-[2px]">+</span>
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Placed</p>

                        </div>
                        <div className="w-[25%] relative text-center  " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">0
                            {isCountRef && <CountUp
                                            start={0}
                                            end={5}
                                            duration={5}

                                        />}
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Years Of Journey</p>

                        </div>


                    </div>

                </div>


            </section>
        
    )










}



export default CounterPage;