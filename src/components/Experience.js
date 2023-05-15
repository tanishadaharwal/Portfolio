import React from "react";
import html from"../assets/html.png";
import css from"../assets/css.png";
import javascript from"../assets/javascript.png";
import python from"../assets/logo_python.png";
import reactImage from"../assets/react.png";
import cpp from"../assets/cpppp.png";
import node from"../assets/node.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
    return (
        <div name="experience" className="text-white md:h-full w-full bg-gradient-to-b from-gray-800 to-black py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-5xl font-bold ">Experience</p>
                    <p className="py-6 text-2xl">These are some fo the technologies I've worked with</p>
                </div> 

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 h-full">
                    <div className="md:mx-0 mx-auto">
                    
                        <img src={html} alt="quad_tree" className="h-32   hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-orange-500 rounded-lg"/>
                   
                    
                    </div>
                    <div className="md:mx-0 mx-auto">
                    
                    <img src={reactImage} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-blue-500 rounded-lg"/>
               
                
                </div>

                <div className="md:mx-0 mx-auto">
                    
                    <img src={css} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-blue-500 rounded-lg"/>
               
                
                </div>
                <div className="md:mx-0 mx-auto">
                    
                    <img src={javascript} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-yellow-500 rounded-lg"/>
               
                
                </div>
                <div className="md:mx-0 mx-auto">
                    
                    <img src={cpp} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-blue-500 rounded-lg"/>
               
                
                </div>
                <div className="md:mx-0 mx-auto">
                    
                    <img src={python} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-yellow-500 rounded-lg"/>
               
                
                </div>
                <div className="md:mx-0 mx-auto">
                    
                    <img src={tailwind} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-blue-300 rounded-lg"/>
               
                
                </div>
                <div className="md:mx-0 mx-auto">
                    
                    <img src={node} alt="quad_tree" className="h-32 hover:opacity-80 hover:scale-110 duration-300 shadow-md shadow-green-300 rounded-lg"/>
               
                
                </div>

                  
                        
                            

                    </div> 
                </div>
               
        </div>
    )
}
export default Experience;