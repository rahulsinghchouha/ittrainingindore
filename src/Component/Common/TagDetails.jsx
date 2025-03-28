import React, { useMemo, useState ,memo} from "react";
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

    const [blog, setBlog] = useState([]);
    const [banner, setBanner] = useState({});

    useMemo(() => setTag((params?.tag).split("-").join(" ")), [params]);

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

    async function tagBanner() {
        try {
            const response = await ittrainingDataSerivice.getTagBanner();

            if (response.status === 200)
                setBanner(response.data?.data);


        }
        catch (error) {
            console.log("error to get tag", error);
        }
    }

    function blogDetails(blogDetail) {

        navigate("/" + blogDetail.heading?.replace(/\s|\/+/g, '-'), { state: blogDetail });

    }

    const filterBlog = blog?.filter((blog) => {
        // Check if any tag matches the provided tag
        return blog?.tags?.some(element => element === tag);
    });


    useEffect(() => {
        fetchBlog();
        tagBanner();
    }, [])
    function showTagsBlog(tag) {
        navigate("/tag/" + tag?.replace(/\s|\/+/g, '-'));
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
            <section className="m-0 pt-[125px]  max-800:pt-0 ">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="max-649:h-[160px] max-649:object-cover " src={`${ittrainingDataSerivice?.backendUrl}/${banner?.img}`} />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="max-374:leading-[28px] max-374:text-[22px] max-413:leading-[35px] max-413:text-[25px] max-567:text-[30px] max-567:leading-[40px] max-767:text-[38px] max-767:leading-[48px] max-979:text-[45px] max-979:leading-[55px] max-1024:text-[40px] max-1024:leading-[51px] max-1200:text-[44px] max-1200:leading-[56px] max-1321:text-[48px] max-1321:leading-[54px]  text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">{tag}</h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className= " max-1200:py-[50px] max-1024:pt-[60px] max-800:pt-[40px] py-[80px] px-0">
                <header className="mb-[60px] max-649:mb-[50px]">
                    <div className="mt-[29px] max-649:mt-[15px]">
                        <h1 className="max-480:text-[30px] max-480:leading-[39px] max-567:text-[34px] max-567:leading-[51px] max-649:text-[40px] max-649:leading-[50px] max-1200:text-[50px] max-1200:leading-[56px] text-[54px]  font-[800] text-[#000] text-center">
                            <span>Tag:</span><span className="text-[#1AAEF4]"> {tag}</span>
                        </h1>
                    </div>
                </header>

                <div>
                    {filterBlog?.map((blog, index) => (
                        <article className="max-1321:w-[90%] w-[1200px] my-[40px]  mx-auto border-b-[1px] border-solid border-opacity90" key={index}>
                            <header className="mb-[15px] ">
                                <div className="mt-[29px] max-979:my-[5px] ">
                                    <button onClick={() => blogDetails(blog)} className=" max-374:text-[20px] max-374:leading-[29px] max-480:text-[22px] max-649:text-[23px] text-start text-[26px] font-[600] ">{blog?.heading}</button>
                                </div>
                            </header>

                            <div className="mt-[21px] flex gap-1 items-center">
                                <FiUser style={{ fontSize: "24px", fontWeight: "bold" }} />
                                <p className=" text-[16px] opacity-60 font-[400] ">By</p>
                                <Link to="/" className="hover:text-[#1AAEF4] font-[500]"> IT Training Indore</Link>
                            </div>
                            <div className="flex max-979:flex-col items-center max-979:items-start">
                                <figure className="mt-0 max-979:w-[35%] max-800:w-[100%] mb-0 mr-[30px] ml-0 w-[27%] ">
                                    <div className="mt-[29px] ">
                                        <img src={`${ittrainingDataSerivice.backendUrl}/${blog?.img}`} />

                                    </div>

                                </figure>
                                <div className="w-[70%] max-979:w-[90%] max-800:w-[100%] max-1400:w-[69%] max-979:mt-[30px] ">
                                    <div className="my-[20px] mx-0">
                                        <p>
                                            {stripHtmlTags(blog?.details).slice(0, 300)}....
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Post Inner Section */}
                            <div className="mt-[29px] max-800:mt-0 ">
                                <div className="mt-0 mr-[3%] mb-[20px] ml-0 inline-block">
                                    {
                                        blog?.tags?.map((tag, index) =>
                                            <button onClick={() => showTagsBlog(tag)} key={index} className="   max-1200:px-[8px] max-1321:px-[15px]  hover:text-[#fff] hover:bg-[#1AAEF4] ml-[30px] mt-[15px] text-[14px] leading-[20px] font-[500]  py-[6px] px-[20px] bg-[#f2f2f2] text-[#989898]">
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

export default memo(TagDetails);






