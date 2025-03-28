import React, { useEffect, useMemo, useState, useRef, memo } from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { ittrainingDataSerivice } from "../../Services/dataService";
import ConvertAnchorToLink from "./ConvertAnchorToLink";
import NotFoundResponse from "./NotFoundResponse";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../../Redux/functionsSlics";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Pagination  } from "swiper/modules";



const CategoryDetails = () => {

    const [category, setCategory] = useState(null);

    const navigate = useNavigate();

    let { categories } = useParams(); // Extracting the dynamic parameter
    categories = categories?.split("-").join(" ");


    async function getCategoryByName() {
        try {
            const response = await ittrainingDataSerivice.getCategoryByName({ categories });

            if (response.status === 200)
                setCategory(response.data.data);
        }
        catch (error) {
            console.log("error to get the category : ", error)
        }
    }

    const categoryDetails = useLocation().state;
    useMemo(() => { if (categoryDetails) setCategory(categoryDetails) }, [categoryDetails]); //if new category then it update and then this component will be re-render

    useEffect(() => {
        if (categories && !categoryDetails) {
            getCategoryByName();
        }
    }, [categories])
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);
    const allCourse = useSelector((state) => state.backendFunction.webCard);

    const relatedCourses = useMemo(() =>
        allCourse?.filter(related => related.category === categories),
        [allCourse, categories]
    );
    function handleCourseDetails(course) {
      
        navigate("/course/" + course?.courseName?.replace(/\s|\/+|\?/g, "-"), { state: course });
    }

    //Function to safely slice HTML Content
    const stripHtmlTags = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html'); //for html content
        return doc.body.textContent || "";
    };

    const [width,setWidth] = useState(window.innerWidth > 978);

 


    return (
        <div>
            {
                category ? (<div>  <Navbar />
                    {/* Categories Banner Page Start */}
                    <section className="m-0 max-800:pt-0 pt-[125px]">
                        <div className="relative">
                            <figure className=" z-[-1]   relative mainImageAfter">
                                <img className="max-649:w-[100%] max-649:object-cover max-649:h-[160px]  " src={`${ittrainingDataSerivice.backendUrl}/${category?.bannerImg}`} />
                            </figure>
                            <div className="wrapper">
                                <div className="absolute top-[50%] transform translate-y-[-50%] ">
                                    <h1 className="max-374:text-[22px] max-374:leading-[28px] max-413:text-[25px] max-413:leading-[35px] max-567:text-[30px] max-567:leading-[40px]  max-767:text-[38px] max-767:leading-[48px]   max-979:text-[45px] max-979:leading-[55px] max-1024:text-[40px] max-1024:leading-[51px]  max-1200:text-[44px] max-1200:leading-[56px] max-1321:text-[48px] max-1321:leading-[54px]  text-[54px]  leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">{category?.heading}</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Category Banner Page End */}
                    <section className="pt-[69px] max-1400:pt-[50px] max-979:pt-[35px] pb-[77px] px-auto">
                        <div className="wrapper">
                            <div className="flex max-1200:flex-col justify-between ">
                                <div className="w-[53%] max-1200:w-[100%] categoryDetailsWhat">
                                    {ConvertAnchorToLink(String(category?.categoryDetailsWhy))}
                                </div>
                                <div className="w-[47%] max-1200:w-[100%] max-1200:mt-[36px] mr-[-64px] max-1400:w-[42%] max-1400:mr-0">
                                    <img src={`${ittrainingDataSerivice.backendUrl}/${category?.categoryDetailsImg}`} alt="What is Software Development?" className="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Related Courses */}
                    {
                        relatedCourses.length > 0 &&
                        <section className="py-[50px] px-0" id="related-courses">
                            <div className="wrapper">
                                <div>
                                    <div>
                                        <h3 >Related Courses</h3>
                                    </div>
                                    <div className="mt-[58px] flex flex-wrap w-[100%] pt-[10px] pb-[20px] bg-[#fff] justify-center items-center  ">
                                        <Swiper
                                            modules={[Autoplay]}
                                            loop={relatedCourses.length > 4}
                                            slidesPerView={Math.min(4, relatedCourses.length)} // Show up to 4 slides but adapt to fewer
                                            autoplay={
                                                {
                                                    delay: 1000,
                                                    disableOnInteraction: false,
                                                    pauseOnMouseEnter: true
                                                }
                                            }
                                         
                                            speed={2000}
                                        >
                                            {
                                                relatedCourses.map((related, index) => (
                                                    <SwiperSlide key={index} className="max-w-[350px] h-auto hover:translate-y-[-10px] z-[5] pt-[40px] transition-all duration-800 ease-linear">
                                                        <div className={`  rounded-[18px] mr-[10%]  shadow-reletedCardShad flex-shrink-0`}  >
                                                            <div className="w-[100%]">
                                                                <figure className="w-[100%] ">
                                                                    <img src={`${ittrainingDataSerivice.backendUrl}/${related.img}`} className="w-[100%] h-[198px] object-cover rounded-tr-[18px] rounded-tl-[18px] block" />
                                                                </figure>
                                                            </div>
                                                            <div className="pt-0 pl-[25px] pr-[25px] pb-[25px] w-[100%] ">
                                                                <div className="mt-[20px] w-[100%]">
                                                                    <h6 onClick={() => handleCourseDetails(related)} className="cursor-pointer hover:text-[#1AAEF4] transition-all ease delay-75">{related?.courseName}</h6>
                                                                </div>
                                                                <div className="mt-[15px] mb-[15px] ml-0 mr-0 min-h-[85px] ">
                                                                    <p className="leading-[26px] text-[16px] text-[#000] font-[400] tracking-normal">
                                                                        {stripHtmlTags(related?.overview)?.slice(0, 70)}....
                                                                    </p>
                                                                </div>
                                                                <div className="pt-[21px] w-[100%]">
                                                                    <button onClick={() => handleCourseDetails(related)} className="transform  group-hover:translate-x-3 duration-200  itCardBtn text-[#000000] hover:text-[#1AAEF4] pr-[45px] text-[18px] leading-[23px] font-[700] inline-block transition-all ease delay-75 outline-none ">Details</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </SwiperSlide>
                                                )
                                                )
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }

                    {/* Category content wrapper */}
                    <section className="mb-[40px] ">
                        <div className="wrapper">
                            {/* Importance of software development section */}
                            <div className=" mb-[100px] max-979:mb-[50px] w-[100%] mx-auto flex justify-between max-1024:flex-col ">
                                <div className="max-1024:w-[100%] max-1200:w-[42%] w-[39%] max-1400:w-[35%] max-1321:w-[40%] ">
                                    <h3 className="text-[36px] leading-[54px] font-[800] text-[#000]">What are the Importances of {category?.heading} ?</h3>
                                </div>
                                <div className=" max-1024:w-[100%] w-[58%] mt-[10px] "> {ConvertAnchorToLink(String(category?.importance))}  </div>
                            </div>
                            {/* Category features card */}
                            {
                                width  ?
                                    <div className="mb-[15px] text-center m-4">
                                        <div>
                                            {/* category features inner */}
                                            <div className="w-[100%] flex flex-wrap justify-center">
                                                {
                                                    category?.detailsCard?.map((card, index) => (
                                                        <div key={index} className={`className=" w-[31.33%] mr-0 ml-0 mb-[80px] mt-0 shadow-reletedCardShad rounded-[18px] min-h-[376px] bg-[#fff] pt-[70px] pb-[38px] px-[20px] relative ${index % 3 === 2 ? "" : "mr-[2%]"} `}>
                                                            <figure className="absolute w-[87px] h-[87px] left-0 right-0 top-[-35px] my-0 mx-auto rounded-[13px] " style={{ backgroundColor: `${card?.bgColor}` }}>
                                                                <img className="w-[42px] h-[42px] object-cover block text-center absolute top-[50%] left-[25%] translate-y-[-50%] max-w-[100%] my-0 mx-auto" src={`${ittrainingDataSerivice.backendUrl}/${card?.img}`} />
                                                            </figure>
                                                            <div className="cardCategoryDetails">
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
                                    :
                                    <div className="w-[90%] mt-[70px] max-480:w-[98%] mx-auto">

                                        <div className="w-[100%] categoryDetailsPagination ">
                                            {
                                                <Swiper
                                                modules={[Pagination]}
                                                slidesPerView={1}
                                               
                                                pagination={{
                                                    clickable:true
                                                }}
                                                
                                                >

                                                    {category?.detailsCard?.map((card, index) =>
                                                    <SwiperSlide>
                                                        <div key={index} className={`className=" w-[100%] mr-0 ml-0 mb-[0px] mt-0 shadow-reletedCardShad   bg-[#fff] pt-[70px] pb-[50px] px-[20px] relative  `}>
                                                            <figure className="absolute w-[87px] h-[87px] left-0 right-0 top-[0px] my-0 mx-auto rounded-[13px] " style={{ backgroundColor: `${card.bgColor}` }}>
                                                                <img className="w-[42px] h-[42px] object-cover block text-center absolute top-[50%] left-[25%] translate-y-[-50%] max-w-[100%] my-0 mx-auto" src={`${ittrainingDataSerivice.backendUrl}/${card.img}`} />
                                                            </figure>
                                                            <div className="cardCategoryDetails mt-[50px]">
                                                                {
                                                                    ConvertAnchorToLink(String(card.cardHeadandDetail))
                                                                }
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    )}


                                                </Swiper>
                                            }
                                        </div>



                                    </div>

                            }




                            {/* blue para  */}
                            <div className=" max-767:mb-[50px]   mb-[79px] py-[60px] max-1200:py-[40px] max-567:px-[30px] max-413:px-[20px] max-567:py-[30px] max-979:mt-[30px] px-[48px] bg-[#E1F5FF] rounded-[12px]  ">
                                <p className="text-[#1AAEF4] font-[550] italic">
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
                    <Footer /></div>) : (<NotFoundResponse />)
            }
        </div>
    )
}

export default memo(CategoryDetails);






