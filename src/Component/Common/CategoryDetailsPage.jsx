import React from "react";
import Navbar from "./Navbar";



const CategoryDetails = () =>{

    return(
        <div>
            <Navbar/>
            {/* Categories Banner Page Start */}
            <section className="m-0 pt-[125px]">
                <div className="relative">
                    <figure className=" z-[-1]  relative mainImageAfter">
                        <img className="w-[100%] " src="/Software_Development_Course__Coaching_Indore.jpg" />
                    </figure>
                    <div className="wrapper">
                        <div className="absolute top-[50%] transform translate-y-[-50%] ">
                            <h1 className="text-[54px] leading-[60px] font-extrabold text-[#ffffff] tracking-[1.62px] ">Software Development</h1>
                        </div>

                    </div>                    
                </div>
            </section>
            {/* Category Banner Page End */}

        </div>
    )



}

export default CategoryDetails;






