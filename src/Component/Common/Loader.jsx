import React from "react";


function Loader(){

    return(
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#000] ">
            <img src="/Navbar/It_training_logo.svg" alt="it training logo"  loading="lazy" className="loader-img" />
        </div>
    )

}


export default Loader;


