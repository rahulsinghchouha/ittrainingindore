import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CounterPage from "./CounterPage";
import Footer from "./Footer";
import { useLocation, useParams } from "react-router-dom";
import { ittrainingDataSerivice } from "../../Services/dataService";
import ConvertAnchorToLink from "./ConvertAnchorToLink";
import { useEffect } from "react";



const TagDetails = () => {

    const params = useParams();

    const [tag, setTag] = useState();
    console.log("tag",tag);

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
          
            
            <CounterPage />
            <Footer />

        </div>
    )
}

export default TagDetails;






