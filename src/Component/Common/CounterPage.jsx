import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";
import { useEffect } from "react";
import { ittrainingDataSerivice } from "../../Services/dataService";

const CounterPage = () => {

    const [ourStats, setOurStats] = useState();

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
    useEffect(() => {
        getOurStats();
    }, [])

    const { ref: countRef, inView: isCountRef } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (

        <section className="pt-[55px] pb-[300px] max-567:pt-[38px] max-567:pb-[132px] max-767:pt-[55px] max-767:pb-[222px] max-1321:pt-[51px] max-1321:pb-[280px] max-1321:px-0  px-0 max-1024:mb-[-300px] mb-[-620px]  bg-[#f3fbff] bg-no-repeat bg-[position:67%_70%] max-767:bg-[position:50%_77%] max-767:bg-[length:82%]  max-567:bg-[position:60%_85%] max-413:bg-[position:50%_87%] max-374:bg-[position:50%_93%]   " style={{ backgroundImage: `url('/our-achievement-paperplane.svg')`,   backgroundColor: "#f3fbff" }}>
            <div className="wrapper text-center">
                <h3 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">
                    We feel proud about our Stats
                </h3>

                <div className={`counterPage max-567:mt-[15px] max-649:mt-[35px]  mt-[37px]  ${isCountRef && "animate__fadeIn"} flex flex-wrap`}
                    ref={countRef}
                    style={{ animationDuration: "3s" }}
                >
                    <div className="w-[25%] max-374:w-[100%] max-374:mt-[35px] max-567:w-[50%] max-567:mt-[20px] max-567:mb-0 max-567:mx-0 relative text-center mentorBorder " >
                        <h4 className="text-[40px] max-767:text-[32px] max-767:leading-[38px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                start={0}
                                end={ourStats?.mentors}
                                duration={5}

                            />}
                        </h4>

                        <p className="font-[500] mt-[8px]  ">Mentors</p>

                    </div>
                    <div className="w-[25%] max-374:w-[100%] max-374:mt-[35px] max-567:w-[50%] max-567:mt-[20px] max-567:mb-0 max-567:mx-0 relative text-center mentorBorder " >
                        <h4 className="text-[40px] max-767:text-[32px] max-767:leading-[38px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                start={0}
                                end={ourStats?.experience}
                                duration={5}

                            />}
                        </h4>

                        <p className="font-[500] mt-[8px]  ">Years Of Experience</p>

                    </div>
                    <div className="w-[25%] max-374:w-[100%] max-374:mt-[35px] max-567:w-[50%] max-567:mt-[20px] max-567:mb-0 max-567:mx-0 relative text-center mentorBorder " >
                        <h4 className="text-[40px] max-767:text-[32px] max-767:leading-[38px] leading-[45px] text-[#1aaef4] font-[700] ">
                            {isCountRef && <CountUp
                                start={0}
                                end={ourStats?.placedStudent}
                                duration={5}

                            />}<span className="ml-[2px]">+</span>
                        </h4>

                        <p className="font-[500] mt-[8px]  ">Placed</p>

                    </div>
                    <div className="w-[25%] max-374:w-[100%] max-374:mt-[35px]  max-567:w-[50%] max-567:mt-[20px] max-567:mb-0 max-567:mx-0 relative text-center  " >
                        <h4 className="text-[40px] max-767:text-[32px] max-767:leading-[38px] leading-[45px] text-[#1aaef4] font-[700] ">0
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