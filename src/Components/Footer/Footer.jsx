import React from "react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";


export default function Footer () {


  
return (
      
      <div className="flex justify-center justify-items-center py-5 bg-white border-black border-t border-opacity-10">
        <div className="flex flex-row font-mono text-sm text-center tracking-tighter text-black">
        <NavLink to="/tester/" className="group"><Logo/></NavLink>
        </div>
    </div>
        
      
    )
  };
  