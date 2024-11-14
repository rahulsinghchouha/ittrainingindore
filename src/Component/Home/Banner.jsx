import { Field, Formik,Form } from "formik";
import React from "react";


function Banner() {
    const handleSearch = () => {

    }


    return (
        <section className="home-banner-wr">
            <div className="wrapper">
                <div className="box-border ">
                    <div className="w-[47.5%] pt-[16px] pl-0 pr-0 pb-0">
                        <div>
                            <h4 className="get-course-now text-[14px] leading-[20px] text-[#1aaef4] font-[400] pr-[70px] inline-block">GET COURSE NOW</h4>
                        </div>
                        <div className="mt-[28px] ">
                            <h1 className=" text-[2.6em] leading-[1.3em] block font-[800] text-[#000000] ">
                                Unlock
                                <span className="text-[#1aaef4]"> Your Potential </span>
                                Choose the Best
                                <span className="text-[#1aaef4]"> Software Training </span>
                                Institute in Indore

                            </h1>


                        </div>
                        <div className="mt-[32px] box-border">
                            <p className="text-[16px] leading-[34px] font-[400] tracking-normal">
                                Welcome to IT Training Indore, your premier destination for comprehensive IT training and placements in Indore.
                            </p>
                        </div>
                        <div className="w-[100%] mt-[16px] ">
                            <Formik
                                initialValues={{ query: "" }}
                                onSubmit={(values) => handleSearch(values)}

                            >
                                {() => (
                                    <form>
                                        <input type="text" name="query" placeholder="Search Course" className="border-none py-3 px-4 rounded-full" />

                                    </form>

                                )}
                            </Formik>

                        </div>
                    </div>







                    {/* second div */}
                    <div>

                    </div>


                </div>


            </div>



        </section>
    )


}

export default Banner;


