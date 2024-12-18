import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const PageBanner = ({ heading, img }) => {
    const { ref: mainPageHead, inView: isMainPageHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <div>
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src={img} />
                    </figure>

                    <div >
                        <div className="wrapper">
                            <div className="absolute top-[50%] transform translate-y-[-50%]">
                                <h1 className={`  ${isMainPageHead && "animate__fadeIn"} text-[54px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] `}
                                    ref={mainPageHead}
                                    style={{
                                        animationDuration: "3s",
                                    }}
                                >{heading}</h1>
                                <div className="mt-[5px] block">
                                    <NavLink to="/" className="hover:text-[#009ce5] text-[#fff]  text-[#16px] font-[500] leading-[20px] transition-all ease-linear duration-[0.5s]">Home</NavLink>
                                    <span className="ml-[15px] pl-[17px] text-[#fff] font-[500] rightSmallArrow transition-all ease-in-out duration-500">{heading}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageBanner;

