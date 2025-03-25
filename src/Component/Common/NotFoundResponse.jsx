import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ittrainingDataSerivice } from "../../Services/dataService";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import CounterPage from "./CounterPage";
import Footer from "./Footer";




function NotFoundResponse() {

    const navigate = useNavigate();

    const [bannerImg, setBannerImg] = useState(null);

    async function banner() {
        try {
            const response = await ittrainingDataSerivice.getCourseDetailsBanner();
            if (response.status === 200)
                setBannerImg(response.data.data);

        }
        catch (error) {
            console.log("error to get course details banner", error);
        }
    }

    const handleSearch = (search) => {
        if (search?.query)
            navigate("/search/" + search?.query);
        else
            navigate("/search/" + search);
    }

    useEffect(() => {
        banner();
    }, []);

    return (
        <div>
            <Navbar />
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px] max-800:pt-0  ">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className=" max-649:h-[160px] max-649:object-cover" src={`${ittrainingDataSerivice?.backendUrl}/${bannerImg?.img}`} />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="max-374:leading-[28px] max-374:text-[22px] max-413:leading-[35px] max-413:text-[25px] max-567:text-[30px] max-567:leading-[40px] max-767:text-[38px] max-767:leading-[48px] max-979:text-[45px] max-979:leading-[55px] max-1024:text-[40px] max-1024:leading-[51px] max-1200:text-[44px] max-1200:leading-[56px] max-1321:text-[48px] max-1321:leading-[54px]  text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px]  ">404 Not Found</h1>
                        </div>

                    </div>
                </div>
            </section>

            {/*Not Found Section  */}
            <section>
                <div className="w-[1200px] max-567:mt-[50px] max-1321:w-[90%] my-[100px] mx-auto">
                    <figure className="w-[300px]  my-0 mx-auto">
                        <img src="/no-results (1).png" className="max-567:w-[210px] max-567:h-[200px] max-567:mx-auto max-w-[100%] h-auto" />
                    </figure>
                    <h1 className=" mt-[40px] max-567:text-[34px] max-567:leading-[51px] max-480:text-[30px] max-480:leading-[39px]  max-649:text-[40px] max-649:leading-[50px]  max-1200:text-[45px] max-1200:leading-[55px]      text-[54px] leading-[60px] font-[800] text-[#000] text-center">Page Not Found</h1>
                    <div className="mt-[30px] mb-[50px] mx-auto text-center">
                        <p>The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.</p>
                    </div>
                    <Formik
                        initialValues={{ query: "" }}
                        validate={value => {
                            const error = {};
                            if (!value.query) error.query = "Please Enter a Course Name"
                            return error;
                        }
                        }
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                handleSearch(values);
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <form className="w-[98%]" onSubmit={handleSubmit}>
                                <div className="flex w-[95%] ml-auto">
                                    <input type="text" value={values?.query} onChange={handleChange} name="query" placeholder="Search Course" className={` ${errors?.query ? " border-b-[1px] border-solid border-red-500" : ""}  max-480:py-[13px] max-480:w-[75%] max-649:w-[80%] max-979:w-[85%]  bg-[#ffffff] py-[15px]  px-[30px] w-[92%] rounded-tl-[27px] rounded-r-[0px] rounded-b-[0px] rounded-l-[27px] search-shadow focus:outline-none placeholder:text-[#000] placeholder:text-opacity-30 font-[400]  focus:placeholder:text-transparent`} />
                                    <button type="submit" className=" max-480:py-[13px] bg-[#1aaef4] hover:bg-[#000]  max-480:w-[23%] max-649:w-[18%] max-767:w-[15%]  max-979:w-[12%]  w-[8%] rounded-r-full items-center cursor-pointer transition-all duration-150 ease-linear ">
                                        <BsSearch style={{ color: "white", fontSize: "20px", marginLeft: "25px" }} />
                                    </button>
                                </div>
                                {errors.query && <span className="text-red-600 inline-block">{errors.query}</span>}
                            </form>

                        )}
                    </Formik>
                </div>
            </section>
            <CounterPage/>
            <Footer/>
        </div>
    )

}
export default NotFoundResponse;