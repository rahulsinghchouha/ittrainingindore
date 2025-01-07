import React from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";



const CategoryDetails = () => {

    return (
        <div>
            <Navbar />
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src="/Software_Development_Course__Coaching_Indore.jpg" />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">Software Development</h1>
                        </div>

                    </div>
                </div>
            </section>
            {/* Category Banner Page End */}
            <section className="pt-[69px] pb-[77px] px-auto">
                <div className="wrapper">
                    <div className="flex justify-center items-center">
                        <div className="w-[53%]"> </div>
                        <div className="w-[47%] mr-[-64px]">
                            <img src="/Software_Development.png" alt="What is Software Development?" className="" />
                        </div>
                    </div>

                </div>


            </section>
            {/* Category content wrapper */}
            <section className="mb-[40px] ">
                <div className="wrapper">
                    {/* Importance of software development section */}
                    <div>   </div>
                    {/* Category features card */}
                    <div className="mb-[15px] text-center">
                        <div className="w-[30%] mr-0 ml-0 mb-[80px] mt-0 shadow-reletedCardShad rounded-[18px] min-h-[376px] bg-[#fff] pt-[70px] pb-[38px] px-[20px] relative">

                            {/* category features inner */}
                            <div>
                                <figure className="absolute w-[87px] h-[87px] left-0 right-0 top-[-35px] my-0 mx-auto rounded-[13px] " style={{ backgroundColor: "#E1F5FF" }}>
                                    <img className="block text-center absolute top-[50%] left-[25%] translate-y-[-50%] max-w-[100%] my-0 mx-auto" src="/Efficiency.svg" />

                                </figure>
                                <h4 className="font-[800] mb-[20px] text-[24px] leading-[30px] ">Efficiency</h4>
                                <p>
                                    Software development allows businesses to scale up their operations and handle larger volumes of data or users.
                                </p>

                            </div>
                        </div>

                    </div>

                    {/* blue para  */}

                    <div className="py-[68px] px-[48px] bg-[#E1F5FF] rounded-[12px] mb-[79px] ">
                        <p className="text-[#1AAEF4] font-[600] italic">
                            Software development has become a critical component of modern-day business operations, and its importance will only continue to grow as technology advances.
                        </p>
                    </div>

                    {/*Process, Career Groth and skill needed  */}
                    <div className=" ">

                    </div>

                </div>

            </section>
            {/* Counter page section */}
            <CounterPage/>
            <Footer/>

        </div>
    )
}

export default CategoryDetails;






