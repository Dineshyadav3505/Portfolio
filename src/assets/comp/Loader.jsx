import gsap from 'gsap';
import React, { useEffect, useRef  } from 'react'
import Typed from "typed.js";

const Loader = () => {

    const el = useRef(null);         
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["your Web design."],
            startDelay: 100,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    const outerRef = useRef(null);
    useEffect(() => {
        gsap.to(outerRef.current, {
        delay: 3,
        ease: "power2.inOut",
        y: "-100%",
        opacity:0,
        });
    }, []);

  return (
 
    <div>
        <div ref={outerRef} className="  outer w-full h-screen flex justify-center items-center absolute bg-zinc-100  ">
            <div className="loader w-[90%] h-[90%] bg-zinc-300 rounded-xl p-24  leading-normal ">
                <div className="first pt-44 flex items-center gap-10">
                <h1 className='text-[8vw]  font-bold' >Loading </h1>
                <div className='rotating-element h-20 w-20 rounded-full border-4  border-t-zinc-900 ' />
                
                </div>
                <h1 className='text-[8vw]  font-bold' > <span className= 'capitalize' ref={el}></span></h1>
            </div>

        </div>
        
    </div>
  )
}

export default 
Loader