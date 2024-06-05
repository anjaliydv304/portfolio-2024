import React from "react";

const Hero=()=>{
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
        Anjali Yadav
        </h1>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xll tracking-tight text-transparent">
        Frontend Developer</span>
        <p className="my-2 max-w-xl py-6 font-ligt tracking-tighter">
         I'm a passionate and dedicated Front-End Developer. With a strong foundation in HTML, CSS, and modern JavaScript frameworks like React.js, I specialize in crafting seamless, user-friendly web interfaces. Leveraging the power of Tailwind CSS, I bring dynamic and responsive designs to life, ensuring a visually appealing and intuitive user experience.
        </p>
        </div>
        </div>
        </div>
        </div>

    );
}

export default Hero