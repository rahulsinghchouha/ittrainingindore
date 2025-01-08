import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";
import { Link, useLocation, useParams } from "react-router-dom";
import { ittrainingDataSerivice } from "../../Services/dataService";
import ConvertAnchorToLink from "./ConvertAnchorToLink";
import { useEffect } from "react";
import { FiUser } from "react-icons/fi";


const TagDetails = () => {

    const params = useParams();

    const [tag, setTag] = useState();
    console.log("tag", tag);

    const [blog, setBlog] = useState([]);

    useMemo(() => setTag(params?.tag), [params]);

    async function fetchBlog() {
        try {
            const response = await ittrainingDataSerivice.getBlogs();

            if (response.status === 200) {
                setBlog(response.data.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const filterBlog = blog?.filter((blog) => {
        // Check if any tag matches the provided tag
        return blog?.tags?.some(element => element === tag);
    });
    console.log("filterBlog", filterBlog);

    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <div>
            <Navbar />
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%]" src="/About-Us-Coaching-Class-Institute.jpg" />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">{tag}</h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-[100px] px-0">
                <header className="mb-[100px]">
                    <div className="mt-[29px]">
                        <h1 className="text-[54px] leading-[60px] font-[800] text-[#000] text-center">
                            <span>Tag:</span><span className="text-[#1AAEF4]"> {tag}</span>
                        </h1>
                    </div>
                </header>

                <article className="w-[1200px] my-[40px] mx-auto">
                    <header className="mb-[15px] ">
                        <div className="mt-[29px] ">
                            <h2 className="text-[26px] font-[600] ">Choose Digital Marketing Courses For a Rewarding Career Ahead</h2>
                            <div className="mt-[21px] flex gap-1 items-center">
                                <FiUser style={{fontSize:"24px", fontWeight:"bold" }} />
                                <p className=" text-[16px] opacity-60 font-[400] ">By</p>
                                <Link to="/" className="hover:text-[#1AAEF4] font-[500]"> IT Training Indore</Link>
                            </div>
                            <div className="flex items-center">
                                <figure className="mt-0 mb-0 mr-[30px] ml-0 w-[27%] ">
                                    <div className="mt-[29px] ">
                                        <img src={`${ittrainingDataSerivice.backendUrl}/${blog[0]?.img}`}/>

                                    </div>

                                </figure>
                                <div className="w-[70%] ">
                                    <div className="my-[20px] mx-0">
                                        <p>
                                        Digital marketing is a technique that covers all of the advertising and marketing techniques and techniques through an internet platform. This advertising technique additionally defined as an umbrella for all marketing activities for services or products follows various online platforms. Digital marketing is the modern-day tool for optimising business capacity, there are various options like […]
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </header>

                </article>




            </section>


            <CounterPage />
            <Footer />

        </div>
    )
}

export default TagDetails;






