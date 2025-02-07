import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";


function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu right isOpen={isOpen} onStateChange={()=>setIsOpen(!isOpen)}>
            <Link to="/">Home</Link>
            <Link to="/courses">Course</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/testimonials">Testimonial</Link>
            <Link to="/contact-us">Contact Us</Link>


        </Menu>
    )
}

export default BurgerMenu;

