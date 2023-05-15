import React from "react";
import girl from "../assets/girl_image.jpg";
import {CgArrowRight} from "react-icons/cg";
import {Link} from "react-scroll";



const Home = () => {
    
    
    return (
        <div name="home" className="text-white h-screen w-full bg-gradient-to-b from-black to-gray-800">
            
                
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Web Developer
                       
                       
                    </h2>
                    <p className="text-slate-100 py-4 max-w-md font-semibold">A passionate developer who loves to code cool stuff and solve problems</p>

                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-600 to-pink-500">
                        <Link to="projects" smooth duration={500}>Projects</Link>
                            
                            <span className="group-hover:rotate-90 duration-200"><Link to="projects" smooth duration={500}><CgArrowRight size={25} className="ml-1"/></Link></span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={girl} alt="girl with flowers" className=" hover:scale-105 duration-300 rounded-5xl mx-auto 2-2/3 md:w-full girl"/>
                </div>
            </div>
        </div>
        
    )
}
export default Home;