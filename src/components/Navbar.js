import {useState} from "react";
import React from "react"; 
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
           <div>
            <h1 className="text-5xl font-signature ml-2 text-white">Tanisha</h1>
           </div>
      

            <ul className="hidden md:flex">
              <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to="home" smooth duration={500}>home</Link></li>
              <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to="about" smooth duration={500}>about</Link></li>
              <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to="projects" smooth duration={500}>projects</Link></li>
              <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to="experience" smooth duration={500}>experience</Link></li>
              <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to="contact" smooth duration={500}>contact</Link></li>

            </ul>
            <div onClick = {() => setNav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
            <ul className="flex flex-col justify-center items-center absolute 
            top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() =>setNav(!nav)} to="home" smooth duration={500}>home</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() =>setNav(!nav)} to="about" smooth duration={500}>about</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() =>setNav(!nav)} to="projects" smooth duration={500}>projects</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() =>setNav(!nav)} to="experience" smooth duration={500}>experience</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() =>setNav(!nav)} to="contact" smooth duration={500}>contact</Link></li>
            </ul>)}
            
        </div>
    );
};
export default NavBar;