import React,{useState} from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";
import { useEffect } from "react";
import { ittrainingDataSerivice } from "../../Services/dataService";

const CounterPage=()=>{

    const [ourStats,setOurStats] = useState();

    async function getOurStats() {
        try {
            const response = await ittrainingDataSerivice.getOurStats();

            if (response.status === 200) {
                setOurStats(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getOurStats();
    },[])

    const { ref: countRef, inView: isCountRef } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        
            <section className="pt-[55px] pb-[300px]  px-0 mb-[-620px] bg-[#f3fbff] " style={{background:`url('/our-achievement-paperplane.svg')`,backgroundRepeat:'no-repeat',backgroundPositionX:"67%",backgroundPositionY:"70%",backgroundColor:"#f3fbff"}}>
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
                                            end={ourStats?.mentors}
                                            duration={5}

                                        />}
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Mentors</p>

                        </div>
                        <div className="w-[25%] relative text-center mentorBorder " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.experience}
                                            duration={5}

                                        />}
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Years Of Experience</p>

                        </div>
                        <div className="w-[25%] relative text-center mentorBorder " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.placedStudent}
                                            duration={5}

                                        />}<span className="ml-[2px]">+</span>
                            </h4>

                            <p className="font-[500] mt-[8px]  ">Placed</p>

                        </div>
                        <div className="w-[25%] relative text-center  " >
                            <h4 className="text-[40px] leading-[45px] text-[#1aaef4] font-[700] ">0
                            {isCountRef && <CountUp
                                            start={0}
                                            end={ourStats?.yearsOfJourney}
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