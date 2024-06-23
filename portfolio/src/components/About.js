import React from "react";
import {motion} from "framer-motion";
import { ABOUT } from "../constants/const";
const About=()=>{
    return(

        <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span> 
        </h1>
        <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}

        className="w-full lg:w-6/7">
        <div className="justify-center lg:justify-center">
            <p className="leading-loose my-2 maxw-2xl py-6 pr-12">
            {ABOUT}
            </p>
        </div>
        </motion.div>
        </div>
        
        </div>

    )
}

export default About