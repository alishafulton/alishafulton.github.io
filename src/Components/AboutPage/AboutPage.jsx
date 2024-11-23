import React from "react";
import Blurb from "./Blurb";
import Compliments from "./Compliments";



export default function AboutPage() {
    
      return (
        <div className="flex flex-col justify-center justify-items-center w-full ">
            <Blurb />
            <div className="pt-3"><Compliments/></div>
        </div>
      );
    }