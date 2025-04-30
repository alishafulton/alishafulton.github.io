import React from "react";
import './index.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App () {
  return (
    <div>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
            </Routes>
      </div>

    
  )
};
