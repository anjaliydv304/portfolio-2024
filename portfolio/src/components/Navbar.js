import React from "react";
import icon from '../assets/icon.png';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
//import {FaSquareXTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar=()=>{
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 w-24 h-24 items-center">
        <img src={icon} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="http://www.linkedin.com/in/anjali-yadav-85985a244"><FaLinkedin/></a>
        <a href="https://github.com/anjaliydv304"><FaGithub/></a>
        <a href="https://www.instagram.com/anjaliiiy.__/"><FaInstagram/></a>
        
        
        </div>
        </nav>

    );
}
export default Navbar