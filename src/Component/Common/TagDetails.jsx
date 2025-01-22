import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ittrainingDataSerivice } from "../../Services/dataService";
import ConvertAnchorToLink from "./ConvertAnchorToLink";
import { useEffect } from "react";
import { FiUser } from "react-icons/fi";


const TagDetails = () => {

    const navigate = useNavigate();

    const params = useParams();

    const [tag, setTag] = useState();
   // const [currentPage, setCurrentPage] = useState(0);

    console.log("tag", tag);

    const [blog, setBlog] = useState([]);
    const [banner, setBanner] = useState({});

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

    async function tagBanner(){
        try{
                const response = await ittrainingDataSerivice.getTagBanner();

                if(response.status === 200)
                    setBanner(response.data?.data);


        }
        catch(error)
        {
            console.log("error to get tag",error);
        }
    }

    function blogDetails(blogDetail) {

        navigate("/blog-details/" + blogDetail.heading, { state: blogDetail });

    }

    const filterBlog = blog?.filter((blog) => {
        // Check if any tag matches the provided tag
        return blog?.tags?.some(element => element === tag);
    });
    console.log("filterBlog", filterBlog);

    useEffect(() => {
        fetchBlog();
        tagBanner();
    }, [])
    function showTagsBlog(tag) {
        navigate("/tag-details/" + tag );
    }

    //Function to safely slice HTML Content
    const stripHtmlTags = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html'); //for html content
        return doc.body.textContent || "";
    };


    // const itemsPerPage = 10;

    // const totalPages = Math.ceil(courseFind.length / 10);

    // const currentItems = courseFind?.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

    // function handlePageChange(page) {
    //     setCurrentPage(page.selected); // Only update currentPage
    // }


    return (
        <div>
            <Navbar />
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%]" src={`${ittrainingDataSerivice?.backendUrl}/${banner?.img}`} />
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

                <div>

                    {filterBlog?.map((blog, index) => (
                        <article className="w-[1200px] my-[40px]  mx-auto border-b-[1px] border-solid border-opacity90" key={index}>
                            <header className="mb-[15px] ">
                                <div className="mt-[29px] ">
                                    <button onClick={() => blogDetails(blog)}  className="text-[26px] font-[600] ">{blog?.heading}</button>
                                </div>
                            </header>

                            <div className="mt-[21px] flex gap-1 items-center">
                                <FiUser style={{ fontSize: "24px", fontWeight: "bold" }} />
                                <p className=" text-[16px] opacity-60 font-[400] ">By</p>
                                <Link to="/" className="hover:text-[#1AAEF4] font-[500]"> IT Training Indore</Link>
                            </div>
                            <div className="flex items-center">
                                <figure className="mt-0 mb-0 mr-[30px] ml-0 w-[27%] ">
                                    <div className="mt-[29px] ">
                                        <img src={`${ittrainingDataSerivice.backendUrl}/${blog?.img}`} />

                                    </div>

                                </figure>
                                <div className="w-[70%] ">
                                    <div className="my-[20px] mx-0">
                                        <p>
                                        { stripHtmlTags(blog?.details).slice(0, 300) }....
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Post Inner Section */}
                            <div className="mt-[29px] ">
                                <div className="mt-0 mr-[3%] mb-[20px] ml-0 inline-block">
                                    {
                                        blog?.tags?.map((tag, index) =>
                                            <button onClick={() => showTagsBlog(tag)} key={index} className="hover:text-[#fff] hover:bg-[#1AAEF4] ml-[30px] mt-[15px] text-[14px] leading-[20px] font-[500]  py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898]">
                                                {tag}
                                            </button>
                                        )
                                    }

                                </div>

                            </div>
                        </article>
                    ))
                    }

                </div>
            </section>


            <CounterPage />
            <Footer />

        </div>
    )
}

export default TagDetails;






