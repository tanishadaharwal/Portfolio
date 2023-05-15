import React from "react";

const Contact = () => {
    return(
        <div name="contact" className="text-white p-4 w-full bg-gradient-to-b from-black to-gray-800 py-16">
            <div className="max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
                <div className="flex flex-col p-4 justify-center max-w-screen-lg">
                    <p className="text-5xl font-bold">Let's Connect!</p>
                    <p className="py-6 text-2xl">Submit the form below to get in touch with me!</p>

                    <div>
                        <form action="https://getform.io/f/0cf5b555-5b02-41a8-ad4c-348923e576e9" method="POST" className="flex flex-col py-10 mx-auto justify-center w-full md:w-1/2">
                            <input type="text" 
                            name="name" 
                            placeholder="Enter your Name" 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                            <input type="email" name="email" placeholder="Enter your E-mail" className="p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                            <textarea name="message"  placeholder="Enter your Message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                            <button className="text-white bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 my-8 justify-center mx-auto items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;