import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App () {
  useEffect(() => {
    AOS.init({
    duration: 1200, // Global animation duration
    once: true, // Only once animation
    });
    }, []);
  return (
    <div className="flex flex-col w-screen h-screen justify-center content-start ">

      <div className="flex sticky top-0 w-full h-20 bg-white justify-center items-center z-50 ">
          <Navbar/>
        </div>
       
        <div className="flex flex-1 justify-center content-start">
            <Outlet/>
        </div>



      </div>

    
  )
};
