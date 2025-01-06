import React from "react";
import Blurb from "./Blurb";
import Compliments from "./Compliments";



export default function AboutPage() {
    
      return (
        <div className="content-start justify-center w-full h-full">
        <div className="flex flex-col justify-center">
            <Blurb />
            <Compliments/>
        </div></div>
      );
    }