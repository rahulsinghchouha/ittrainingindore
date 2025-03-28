import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const PageBanner = ({ heading, img }) => {
    const { ref: mainPageHead, inView: isMainPageHead } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <section className="m-0 pt-[125px] max-800:pt-0">
            <div className="relative">
                <figure className=" z-[-1] relative mainImageAfter">
                    <img className=" h-[100%] w-[100%] max-649:h-[160px] max-649:object-cover " src={img} />
                </figure>

                <div >
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%]">
                            <h1 className={`  ${isMainPageHead && "animate__fadeIn"} text-[54px] max-1321:text-[48px] max-1321:leading-[54px] max-1200:text-[44px] max-1200:leading-[56px] max-1024:text-[40px] max-1024:leading-[51px] max-979:text-[45px] max-979:leading-[55px] max-767:text-[38px] max-767:leading-[48px] max-567:text-[30px] max-567:leading-[40px] max-413:text-[25px] max-413:leading-[35px] max-374:text-[22px] max-374:leading-[28px] leading-[60px] font-[800] text-[#fff] tracking-[1.62px] `}
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
    )
}

export default memo(PageBanner);

