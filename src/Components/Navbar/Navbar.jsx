import React from "react";
import { NavLink } from "react-router-dom";


// my navbar! 
// only constant is to make the active link green

export default function Navbar () {
  const activeLink = "text-green ";

return (

      <div className="flex w-full justify-center py-5 ">
        <div className="flex flex-row font-mono text-sm tracking-tighter text-black">
          <div className="p-3"><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>PORTFOLIO</NavLink></div>
          <div className="p-3 "><NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : "")}>ABOUT</NavLink></div>
          <div className="p-3 "><NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink : "")}>CONTACT</NavLink></div>
 
        </div>

    </div>
        
      
    )
  };
  
