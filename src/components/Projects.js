import React from "react";
import cure_cloud from "../assets/portfolio/cure_cloud.png";
import quad_tree from "../assets/portfolio/quad_tree.png";
import react_sm from "../assets/portfolio/react_sm.png";
import algo_v from "../assets/portfolio/algo_v.png";
import {FaGithub, FaLinkedin} from "react-icons/fa";
const Projects = () => {
    return (
        <div name="projects" className="text-white md:h-full w-full bg-gradient-to-b from-black to-gray-800 py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold ">Projects</p>
                    <p className="py-6 text-2xl">Check out some of my work right here!</p>
                </div> 

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 h-full">
                    <div>
                    
                        <img src={quad_tree} alt="quad_tree" className="h-48 w-96 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-gray-500 rounded-lg"/>
                        <p className="mx-auto py-4 text-center text-2xl">Quad Tree Implementation and Applications</p>
                        <a href="https://github.com/tanishadaharwal/CS201ProjectRepo" className="flex justify-around items-center w-full text-white">
                        <>
                        <FaGithub size={30} className="hover:scale-105 duration-300"/>
                        </>
                    </a>
                    </div>

                    <div>
                    
                    <img src={react_sm} alt="q" className=" h-48 w-96 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-gray-500 rounded-lg"/>
                    <p className="mx-auto py-4 text-center text-2xl">Basic Social Media App using React Js</p>
                    <a href="https://github.com/tanishadaharwal/react-social-media-app" className="flex justify-around items-center w-full text-white">
                    <>
                    <FaGithub size={30} className="hover:scale-105 duration-300"/>
                    </>
                </a>
                </div>

                <div>
                    
                    <img src={cure_cloud} alt="q" className="h-48 w-96 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-gray-500 rounded-lg"/>
                    <p className="mx-auto py-4 text-center text-2xl">Hospital Management Website with Google Cloud</p>
                    <a href="https://github.com/tanishadaharwal/GCP-Project" className="flex justify-around items-center w-full text-white">
                    <>
                    <FaGithub size={30} className="hover:scale-105 duration-300 "/>
                    </>
                </a>
                </div>

                <div>
                    
                    <img src={cure_cloud} alt="q" className="h-48 w-96 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-gray-500 rounded-lg"/>
                    <p className="mx-auto py-4 text-center text-2xl">Algorithm Visualiser in Python</p>
                    <a href="https://github.com/tanishadaharwal/Algorithm-Visualiser" className="flex justify-around items-center w-full text-white">
                    <>
                    <FaGithub size={30} className="hover:scale-105 duration-300 "/>
                    </>
                </a>
                </div>

                
                        
                            

                    </div> 
                </div>
               
        </div>
    )
}
export default Projects;