import React, { useEffect, useMemo } from "react";
import DOMPurify from "dompurify";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Common/Navbar";
import PageBanner from "./Common/PageBanner";
import { ittrainingDataSerivice } from "../Services/dataService";
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { getExploreCards } from "../Redux/functionsSlics";
import CounterPage from "./Common/CounterPage";
import Footer from "./Common/Footer";


function BlogDetails() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [blogLatest, setLatestBlog] = useState([]);
    const [blogDetails, setBlogDetails] = useState();
    const [tag, setTag] = useState([]);

    const blog = useLocation().state;

    console.log("blog details", blog);
    useEffect(() => {
        dispatch(getExploreCards());
    }, [dispatch])

    async function fetchBlog() {
        try {
            const response = await ittrainingDataSerivice.getBlogs();

            if (response.status === 200) {
                setLatestBlog(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    async function getTag() {
        try {
            const response = await ittrainingDataSerivice.getTags();

            if (response.status === 200) {
                //console.log("tags",response.data.data);
                setTag(response.data?.data);
            }
        }
        catch (error) {
            console.log("tag error", error);
        }

    }

    useEffect(() => {
        fetchBlog();
        getTag();
    }, [])

    const exploreCat = useSelector((state) => state.backendFunction.exploreCat);

    useMemo(() => setBlogDetails(blog), [blog])
    //console.log(blog);

    const { ref: latestCourse, inView: isLatestCourse } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: courseCategories, inView: isCourseCategories } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: tags, inView: isTags } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    function showTagsBlog(tag) {
        navigate("/tag-details/" + tag);
    }
    function handleBlogDetails(blogDetail) {

        navigate("/blog-details/" + blogDetail.heading, { state: blogDetail });
    }

    function categoryDetails(categoryDetails) {

        navigate("/categories-details/" + categoryDetails.heading, { state: categoryDetails })
    }


    return (
        <div>
            <Navbar />
            <PageBanner heading={"Blog"} img={"/default-banner.jpg"} />

            {/* Blog Section start */}

            <section className="pt-[80px] px-0 pb-[62px]">
                <div className="wrapper flex">
                    <div className="w-[66%] ">
                        <div className="mb-[50px]">
                            <h2 className="text-[36px] leading-[52px] tracking-[0.72px] text-[#000] font-[800] ">Top IT Courses after 12th for Successful Career in 2025</h2>

                        </div>
                        <div className="mb-[40px] ">
                            <img src={`${ittrainingDataSerivice.backendUrl}/${blogDetails?.img}`} className="w-[100%]" />

                        </div>
                        {/* blog details */}
                        <div className="mt-[40px] listBgImage"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogDetails?.details) }}
                        >

                        </div>
                        {/* Show particular Blog Tags */}
                        <div className="pt-[33px] border-t-[1px] border-solid border-[#EBEBEB] flex">
                            <div className="w-[70%] ">
                                {
                                    blogDetails?.tags?.map((item, index) => (
                                        <div onClick={() => showTagsBlog(item)} key={index} className="mr-[3%] mt-0 ml-0 mb-5  inline-block  ">
                                            <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                <button to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out ">
                                                    {item}
                                                </button>

                                            </h4>

                                        </div>
                                    ))
                                }

                            </div>
                            <div className="w-[30%] ">
                                <p><strong>Share</strong></p>
                                <div className="ml-[20px] mt-[1px] ">
                                    <div className="flex gap-[20px] ">
                                        <div>
                                            <a
                                                aria-label="Linkedin"
                                                className="heateor_sss_button_linkedin"
                                                href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.ittrainingindore.in%2Fwhat-is-agile-methodology-complete-project-management-guide-2025%2F"
                                                title="Linkedin"
                                                rel="nofollow noopener"
                                                target="_blank"
                                                style={{
                                                    fontSize: '32px!important',
                                                    boxShadow: 'none',
                                                    display: 'inline-block',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <span
                                                    className="heateor_sss_svg heateor_sss_s__default heateor_sss_s_linkedin"
                                                    style={{
                                                        backgroundColor: '#0077b5',
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '7px',
                                                        display: 'inline-block',
                                                        opacity: 1,
                                                        float: 'left',
                                                        fontSize: '32px',
                                                        boxShadow: 'none',
                                                        fontSize: '16px',
                                                        padding: '0 4px',
                                                        verticalAlign: 'middle',
                                                        backgroundRepeat: 'repeat',
                                                        overflow: 'hidden',
                                                        padding: 0,
                                                        cursor: 'pointer',
                                                        boxSizing: 'content-box',
                                                    }}
                                                >
                                                    <svg
                                                        style={{ display: 'block' }}
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 32 32"
                                                    >
                                                        <path
                                                            d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z"
                                                            fill="#fff"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a></div>
                                        <div>
                                            <a
                                                aria-label="Facebook"
                                                className="heateor_sss_facebook"
                                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ittrainingindore.in%2Fwhat-is-agile-methodology-complete-project-management-guide-2025%2F"
                                                title="Facebook"
                                                rel="nofollow noopener"
                                                target="_blank"
                                                style={{
                                                    fontSize: '32px!important',
                                                    boxShadow: 'none',
                                                    display: 'inline-block',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <span
                                                    className="heateor_sss_svg"
                                                    style={{
                                                        backgroundColor: '#3c589a',
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '7px',
                                                        display: 'inline-block',
                                                        opacity: 1,
                                                        float: 'left',
                                                        fontSize: '32px',
                                                        boxShadow: 'none',
                                                        fontSize: '16px',
                                                        padding: '0 4px',
                                                        verticalAlign: 'middle',
                                                        backgroundRepeat: 'repeat',
                                                        overflow: 'hidden',
                                                        padding: 0,
                                                        cursor: 'pointer',
                                                        boxSizing: 'content-box',
                                                    }}
                                                >
                                                    <svg
                                                        style={{ display: 'block' }}
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="-5 -5 42 42"
                                                    >
                                                        <path
                                                            d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"
                                                            fill="#fff"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                aria-label="Twitter"
                                                className="heateor_sss_button_twitter"
                                                href="http://twitter.com/intent/tweet?text=What%20is%20Agile%20Methodology%3F%20Complete%20Project%20Management%20Guide%20%5B2025%5D&amp;url=https%3A%2F%2Fwww.ittrainingindore.in%2Fwhat-is-agile-methodology-complete-project-management-guide-2025%2F"
                                                title="Twitter"
                                                rel="nofollow noopener"
                                                target="_blank"
                                                style={{
                                                    fontSize: '32px!important',
                                                    boxShadow: 'none',
                                                    display: 'inline-block',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <span
                                                    className="heateor_sss_svg heateor_sss_s__default heateor_sss_s_twitter"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '7px',
                                                        display: 'inline-block',
                                                        backgroundColorOpacity: 0.1,
                                                        float: 'left',
                                                        fontSize: '32px',
                                                        boxShadow: 'none',
                                                        fontSize: '16px',
                                                        padding: '0 4px',
                                                        verticalAlign: 'middle',
                                                        backgroundRepeat: 'repeat',
                                                        overflow: 'hidden',
                                                        padding: 0,
                                                        cursor: 'pointer',
                                                        boxSizing: 'content-box',
                                                    }}
                                                >
                                                    <svg
                                                        style={{ display: 'block' }}
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.3 8.3 0 0 1-2.61.99 4.15 4.15 0 0 0-7.06 3.77A11.75 11.75 0 0 1 2.18 4.6a4.15 4.15 0 0 0 1.29 5.53 4.14 4.14 0 0 1-1.88-.52v.05a4.15 4.15 0 0 0 3.32 4.07 4.15 4.15 0 0 1-1.87.07 4.15 4.15 0 0 0 3.88 2.86A8.34 8.34 0 0 1 2 19.54a11.74 11.74 0 0 0 6.29 1.84c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.26 8.26 0 0 0 24 4.56a8.3 8.3 0 0 1-2.54.7z"
                                                            fill="#1DA1F3"
                                                        />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                aria-label="Instagram"
                                                className="heateor_sss_button_instagram"
                                                href="https://www.instagram.com/"
                                                title="Instagram"
                                                rel="nofollow noopener"
                                                target="_blank"
                                                style={{
                                                    fontSize: '32px!important',
                                                    boxShadow: 'none',
                                                    display: 'inline-block',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <span
                                                    className="heateor_sss_svg"
                                                    style={{
                                                        backgroundColor: '#53beee',
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '7px',
                                                        display: 'inline-block',
                                                        opacity: 1,
                                                        float: 'left',
                                                        fontSize: '32px',
                                                        boxShadow: 'none',
                                                        fontSize: '16px',
                                                        padding: '0 4px',
                                                        verticalAlign: 'middle',
                                                        backgroundRepeat: 'repeat',
                                                        overflow: 'hidden',
                                                        padding: 0,
                                                        cursor: 'pointer',
                                                        boxSizing: 'content-box',
                                                    }}
                                                >
                                                    <svg
                                                        style={{ display: 'block' }}
                                                        version="1.1"
                                                        viewBox="-10 -10 148 148"
                                                        width="100%"
                                                        height="100%"
                                                        xmlSpace="preserve"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M86,112H42c-14.336,0-26-11.663-26-26V42c0-14.337,11.664-26,26-26h44c14.337,0,26,11.663,26,26v44 C112,100.337,100.337,112,86,112z M42,24c-9.925,0-18,8.074-18,18v44c0,9.925,8.075,18,18,18h44c9.926,0,18-8.075,18-18V42 c0-9.926-8.074-18-18-18H42z"
                                                                    fill="#fff"
                                                                ></path>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M64,88c-13.234,0-24-10.767-24-24c0-13.234,10.766-24,24-24s24,10.766,24,24C88,77.233,77.234,88,64,88z M64,48c-8.822,0-16,7.178-16,16s7.178,16,16,16c8.822,0,16-7.178,16-16S72.822,48,64,48z"
                                                                    fill="#fff"
                                                                ></path>
                                                            </g>
                                                            <g>
                                                                <circle cx="89.5" cy="38.5" fill="#fff" r="5.5"></circle>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="w-[31.5%] ml-auto">
                        <div className="w-[99%] ml-auto pt-[10px]">
                            <div className={`${isLatestCourse && "animate__fadeIn"}`}
                                ref={latestCourse}
                                style={{ animationDuration: '5s' }}
                            >
                                <div className="w-[90%]  ">
                                    <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Latest Blogs</h6>

                                </div>
                                <div >

                                    {

                                        blogLatest?.slice(blogLatest.length - 3, blogLatest.length).reverse().map((blog, index) => {
                                            const dateObj = new Date(blog?.updatedAt); // Create a Date object
                                            const day = dateObj.getDate(); // Get the day of the month (1-31)
                                            const month = dateObj.toLocaleString('en-US', { month: 'long' }); // Get the month 
                                            const year = dateObj.getFullYear(); // Get the year (e.g., 2024)
                                            const formattedDate = `${month} ${day}, ${year}`; // Format the date as "19 Dec, 2024"
                                            return (
                                                <div className="mt-[25px] flex" key={index}>
                                                    <div className=" w-[77px]   rounded-[10px] overflow-hidden ">
                                                        <figure className="m-0">
                                                            <button className="w-[100%] h-[77px] block" onClick={() => handleBlogDetails(blog)}>
                                                                <img className="w-[100%] h-[100%] object-cover" src={`${ittrainingDataSerivice.backendUrl}/${blog?.img}`} />
                                                            </button>
                                                        </figure>
                                                    </div>
                                                    <div className="ml-[10px] w-[68%] ">


                                                        <h4 className="text-[#b0b0b0] text-[14px] leading-[20px] font-[500]">{formattedDate}</h4>


                                                        <div className="mt-[10px]">
                                                            <h4 className="leading-[24px] text-[16px] font-[600] ">
                                                                <button onClick={() => handleBlogDetails(blog)} className="hover:text-[#009ce5] transition-all duration-300 ease-out">{blog?.heading}
                                                                </button>

                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>


                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`mt-[65px] ${isCourseCategories && "animate__fadeIn"}`}
                                style={{ animationDuration: "5s" }}
                                ref={courseCategories}
                            >
                                <div className="w-[90%] ">
                                    <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">
                                        Our Courses Categories
                                    </h6>

                                </div>

                                <div className="mt-[25px] h-[400px] overflow-y-scroll ">
                                    {
                                        exploreCat?.map((item, index) => (
                                            <div className="mt-[29px] flex items-center" key={index}>
                                                <div className="w-[77px] rounded-[10px]">
                                                    <figure className={`w-[77px] h-[75px] ${index % 4 === 0 && "bg-[#FFF7DB]" || index % 4 === 1 && "bg-[#D9F3FF]" || index % 4 === 2 && "bg-[#E3FFE0]" || index % 4 === 3 && "bg-[#ECE3FF]"} text-center flex  justify-center items-center rounded-[10px] `}>
                                                        <button onClick={() => categoryDetails(item)} to="/" className="block">
                                                            <img className="w-[35px] " src={`${ittrainingDataSerivice.backendUrl}/${item.img}`} />
                                                        </button>

                                                    </figure>

                                                </div>
                                                <div className="w-[68%] ml-[24px]">
                                                    <h4 className="text-[16px] font-[600] leading-[24px]">
                                                        <button onClick={() => categoryDetails(item)} className="hover:text-[#009ce5] transition-all duration-300 ease-out">{item.heading}</button>
                                                    </h4>

                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            <div className={`mt-[65px] ${isTags && "animate__fadeIn"}`}
                                style={{ animationDuration: '5s' }}
                                ref={tags}
                            >
                                <div className="w-[90%] ">
                                    <h6 className="pb-[18px] border-b-[1px] border-solid border-[#cfcfcf]">Tags</h6>
                                </div>
                                <div className="mt-[24px]">
                                    <div className="h-[200px]  overflow-y-scroll">
                                        {
                                            tag?.map((item, index) => (
                                                <div onClick={() => showTagsBlog(item?.tag)} key={index} className="mr-[3%] mt-0 ml-0 mb-5  inline-block  ">
                                                    <h4 className="text-[14px] leading-[20px] font-[500] ">
                                                        <button to="/course" className="py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898] inline-block hover:text-white hover:bg-[#009ce5] transition-all duration-300 ease-out ">
                                                            {item?.tag}
                                                        </button>

                                                    </h4>

                                                </div>
                                            ))
                                        }
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

export default BlogDetails;

