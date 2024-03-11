import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex justify-between items-center px-24 py-14'>
        <div className='logo flex gap-4 justify-between items-end  '>
            <p className='text-2xl font-bold  '>Dinesh Yadav</p>

            <div className="toggle-btn mb-1 hidden">
              <input type="checkbox" id="checkbox" className="hidden" checked={isChecked}onChange={handleToggle}/>
                <label htmlFor="checkbox" className={`toggle-label cursor-none w-8 h-4 rounded-xl flex justify-left items-center ${isChecked ? 'checked' : ''} ${isChecked ? 'bg-zinc-100' : 'bg-zinc-900'}  `}>
                  <span  className={`toggle-ball h-3 w-3 rounded-full inline-block ml-[2px] ${isChecked ? 'bg-zinc-900' : 'bg-zinc-100'}  ${isChecked ? 'transform translate-x-[1rem]' : ''}`}></span>
                </label>
            </div>
        </div>

        <div className='menu flex justify-between items-end gap-14 '>
          <NavLink className={e => (e.isActive ? "text-zinc-900, decoration-4 overline cursor-none " : "text-zinc-500 cursor-none"  )} to="/"        >Work</NavLink>
          <NavLink className={e => (e.isActive ? "text-zinc-900, decoration-4 overline cursor-none" : "text-zinc-500 cursor-none" )} to="/about"   >About</NavLink>
          <NavLink className={e => (e.isActive ? "text-zinc-900, decoration-4 overline cursor-none" : "text-zinc-500 cursor-none" )} to="/contact"  >Contact</NavLink>
        </div> 
    </div> 

  )
}

export default Navbar