import React from "react";
import Navbar from "./Common/Navbar";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";



const Search = () => {


    return (
        <div>
            <Navbar />
            {/* Search Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%]" src={`/2c68f8235b8b46e1b9266a86b93db66b599a92cb.webp`} />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">Search</h1>
                        </div>

                    </div>
                </div>
            </section>

            {/* main search section start */}
            <section className="pt-[85px] pb-[80px] ">\
                <div className="wrapper">
                    <div className="mt-0 mb-[50px] mx-auto">
                        <header className="mb-[50px] text-[#000] text-center">
                            <div className="mt-[29px]">
                                <h1 className="text-[54px] leading-[60px] font-[800] text-[#1AAEF4] "> Search : <span className="text-[#000] ">“Web Development”</span></h1>
                                <div className="mt-[29px] ">
                                    <p>We found 10 results for your search.</p>
                                </div>

                            </div>
                        </header>

                        <article className="w-[1200px] mx-auto my-0">
                            <div>
                                <header>
                                    <div className="mt-[29px] ">

                                        <button className="text-[#1AAEF4] font-bold text-[24px] leading-[30px] ">Web API Development
                                        </button>

                                    </div>
                                </header>

                                <div className="flex items-center">
                                    <figure className="w-[27%]  mb-0 ml-0 mr-[30px] mt-[35px]  ">

                                        <img src="/best-web-api-development-coaching-class-indore-1.jpg" />


                                    </figure>

                                    <div className="w-[70%] ">
                                        <div className="">
                                            <p>Our Web API Development Course teaches the basics of creating web applications API. In basics, you learn HTTP, RESTful APIs, API design techniques, authentication and authorization. Also, you learn debugging, testing, documentation, deployment, monitoring, management, JSON, and API ecosystems. This course covers everything from basics to advanced, and we ensure that after the training, you […]</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-[30px] pt-[20px] border-t-[1px] border-[#cecece]">
                                    <header>
                                        <div className="mt-[29px] ">

                                            <button className="text-[#1AAEF4] font-bold text-[24px] leading-[30px] ">Web API Development
                                            </button>

                                        </div>
                                    </header>
                                    <div className="flex items-center">
                                        <figure className="w-[27%]  mb-0 ml-0 mr-[30px] mt-[35px]  ">

                                            <img src="/best-web-api-development-coaching-class-indore-1.jpg" />
                                        </figure>
                                        <div className="w-[70%] ">
                                            <div className="">
                                                <p>Our Web API Development Course teaches the basics of creating web applications API. In basics, you learn HTTP, RESTful APIs, API design techniques, authentication and authorization. Also, you learn debugging, testing, documentation, deployment, monitoring, management, JSON, and API ecosystems. This course covers everything from basics to advanced, and we ensure that after the training, you […]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>



                    </div>

                </div>

            </section>

            <CounterPage />
            <Footer />



        </div>
    )

}

export default Search;



