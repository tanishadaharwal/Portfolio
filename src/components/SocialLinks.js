import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

import {BsFillPersonLinesFill} from "react-icons/bs";
const SocialLinks = () => {
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-violet-600 to-pink-500 ml-[-100px] rounded-tr-md hover:ml-[-10px] hover:rounded-md duration-300">
                    <a href="https://www.linkedin.com/in/tanisha-daharwal-4b2394226/" className="flex justify-between items-center w-full text-white">
                        <>
                        Linkedin<FaLinkedin size={30}/>
                        </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-violet-600 to-pink-500 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300">
                    <a href="https://github.com/tanishadaharwal" className="flex justify-between items-center w-full text-white">
                        <>
                        Github<FaGithub size={30}/>
                        </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-violet-600 to-pink-500 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="mailto:tanisha22daharwal@gmail.com" className="flex justify-between items-center w-full text-white">
                        <>
                        Mail<HiOutlineMail size={30}/>
                        </>
                    </a>
                </li>
                
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-violet-600 to-pink-500 ml-[-100px] rounded-br-md hover:ml-[-10px] hover:rounded-md duration-300">
                    <a href="/my_resume.pdf" download={true}  target="_blank" className="flex justify-between items-center w-full text-white">
                        <>
                        Resume<BsFillPersonLinesFill size={30}/>
                        </>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks;