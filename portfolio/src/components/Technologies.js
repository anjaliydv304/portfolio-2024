import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <h1 className='my-20 text-center text-4xl'>Techcnologies</h1>
    <div className='flex flex-wrap items-center justify-center gap-4'>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-cyan-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaHtml5 className="text-7xl text-orange-600"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <IoLogoCss3 className="text-7xl text-blue-500"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <IoLogoJavascript className="text-7xl text-yellow-200"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiTailwindCssFill className="text-7xl text-cyan-600"/>
    </div>
    </div>
      
    </div>
  )
}

export default Technologies
