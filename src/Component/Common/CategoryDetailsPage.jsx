import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { ittrainingDataSerivice } from "../../Services/dataService";
import ConvertAnchorToLink from "./ConvertAnchorToLink";



const CategoryDetails = () => {

    const [category, setCategory] = useState([]);

    const categoryDetails = useLocation().state;

    useMemo(() => setCategory(categoryDetails), [categoryDetails]); //if new category then it update and then this component will be re-render


    console.log("category", category);


    return (
        <div>
            <Navbar />
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1] h-[372.66px] relative mainImageAfter">
                        <img className="w-[100%] h-[100%] object-cover" src={`${ittrainingDataSerivice.backendUrl}/${category?.bannerImg}`} />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">{category?.heading}</h1>
                        </div>

                    </div>
                </div>
            </section>
            {/* Category Banner Page End */}
            <section className="pt-[69px] pb-[77px] px-auto">
                <div className="wrapper">
                    <div className="flex justify-center ">
                        <div className="w-[53%]">
                            {ConvertAnchorToLink(String(category?.categoryDetailsWhy))}
                        </div>
                        <div className="w-[47%] mr-[-64px]">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${category?.categoryDetailsImg}`} alt="What is Software Development?" className="" />
                        </div>
                    </div>

                </div>


            </section>
            {/* Category content wrapper */}
            <section className="mb-[40px] ">
                <div className="wrapper">
                    {/* Importance of software development section */}
                    <div className="mb-[100px] w-[90%] mx-auto flex justify-between ">
                        <div className="w-[39%]">
                            <h1 className="text-[36px] leading-[54px] font-[800] text-[#000]">What are the Importances of {category?.heading}</h1>
                        </div>
                         
                         <div className="w-[58%] mt-[10px] "> {ConvertAnchorToLink(String(category?.importance))} </div>
                         
                         
                     </div>
                    {/* Category features card */}
                    <div className="mb-[15px] text-center m-4">
                        <div>

                            {/* category features inner */}
                            <div className="w-[100%] flex flex-wrap justify-center">
                                {
                                    category?.detailsCard?.map((card, index) => (
                                        <div key={index} className={`className=" w-[30%] mr-0 ml-0 mb-[80px] mt-0 shadow-reletedCardShad rounded-[18px] min-h-[376px] bg-[#fff] pt-[70px] pb-[38px] px-[20px] relative ${index % 3 === 2 ? "" : "mr-[2%]"} `}>
                                            <figure className="absolute w-[87px] h-[87px] left-0 right-0 top-[-35px] my-0 mx-auto rounded-[13px] " style={{ backgroundColor: `${card?.bgColor}` }}>
                                                <img className="w-[42px] h-[42px] object-cover block text-center absolute top-[50%] left-[25%] translate-y-[-50%] max-w-[100%] my-0 mx-auto" src={`${ittrainingDataSerivice.backendUrl}/${card?.img}`} />

                                            </figure>
                                           <div>
                                            {
                                               ConvertAnchorToLink(String(card?.cardHeadandDetail))
                                            }
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                    </div>

                    {/* blue para  */}

                    <div className="py-[68px] px-[48px] bg-[#E1F5FF] rounded-[12px] mb-[79px] ">
                        <p className="text-[#1AAEF4] font-[600] italic">
                          {ConvertAnchorToLink(String(category?.impPara))}
                        </p>
                    </div>

                    {/*Process, Career Groth and skill needed  */}
                    <div className="listBgImage">
                        {ConvertAnchorToLink(String(category?.processGrowthandSkill))}
                    </div>

                </div>

            </section>
            {/* Counter page section */}
            <CounterPage />
            <Footer />

        </div>
    )
}

export default CategoryDetails;






