import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-purple";

    return (
      <div>
        <div className="flex content-start justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-4 grow font-sans text-2xl tracking-tighter text-black px-1">

        <NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink>
        <NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink>
        <NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink>
        </div>
        
        
        </div>
      
    )
  };
  