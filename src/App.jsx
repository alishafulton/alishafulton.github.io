import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import Footer from "./Components/Footer/Footer";
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
    <div className="flex flex-col min-h-screen justify-center justify-items-center">
      <div className="sticky top-0 z-50 flex justify-center items-center">
        <div className="w-full">
          <Navbar/>
        </div>
        </div>
       
        <div className="flex justify-center justify-items-center">
          <div className="flex w-full justify-center justify-items-center">
            <Outlet/>
          </div>
        </div>

        <div className="w-screen justify-center justify-items-center mt-auto ">
          <Footer/>
        </div>

      </div>

    
  )
};
