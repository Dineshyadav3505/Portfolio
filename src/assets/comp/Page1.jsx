import React from 'react'
import Navbar from './Navbar'
import Typed from "typed.js";
import { useEffect, useRef } from "react";



const Page1 = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Devloper.", "Python Programer.", "graphic designer", "UI UX designer."],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

 

  return (
    <div className='h-screen w-full'>
        <div className='h-96 px-28 py-14  '>
            <h1 className='text-[6vw] font-bold text-zinc-500' >Dinesh Yadav.</h1>
            <h1 className='text-[6vw]  font-bold' > I'm a <span className= 'capitalize' ref={el}></span></h1>
        </div>
        <div className='flex px-28 py-16 gap-14 h-32' >
            <div className='h-44 w-[30vw] ' >
                <h1 className='text-xl text-zinc-500 uppercase font-semibold'>current</h1>
                <h2 className='text-base text-zinc-900 mt-3 font-light capitalize'>currently Working in</h2>
                <a className='text-base text-zinc-900 mt-5 font-light uppercase  underline hover:italic  ' href="/">synergy retail</a>
            </div>
            <div className='h-44 w-[30vw] '  id="soon">
                <h1 className='text-xl uppercase  text-zinc-500 font-semibold'>soon</h1>
                <h2 className='text-base text-zinc-900 mt-3 font-light  capitalize'> Let's work together <br /> to make our company even better!</h2>
            </div>
            <div className='h-44 w-[20vw] ml-4'  id="past">
                <h1 className='text-xl uppercase  text-zinc-500 font-semibold'>past</h1>
                <h2 className=' text-base text-zinc-900 mt-3 font-light  capitalize'>complete intern at </h2>
                <a className='text-base text-zinc-900 mt-3 font-light uppercase  underline hover:italic'   href="/">Freelancer & </a>
                <a className='text-base text-zinc-900 mt-5 font-light uppercase  underline hover:italic'   href="/">Coding Junior</a>
            </div>

        </div>
    </div>
  )
}
 
export default Page1