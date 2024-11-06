import React from "react";
import Selfie from "./Selfie";



export default function Blurb() {
    
      return (
        <div className = "flex flex-col-reverse justify-items-center md:flex-row space-x-0 md:space-x-6 mx-2 h-min ">
            <div className="flex w-full justify-center"><Selfie/></div>
        
        <div className="w-76 md:w-96 text-2xs md:text-xs font-mono text-center md:text-left ">
        I am a lifelong learner of educational psychology, including human behavior, motivations, and learning processes. 
        I am an empathic and active listener who has had years of observational research of others. My 8 years with Starbucks (and licensed stores!) have given me a unique view of the customer-business relationship and how to problem-solve in a moments' notice. 
        I am grateful to constantly grow my technology knowledge online, and I consider myself to be self-taught on a wide variety of subjects. I've taken computer science classes through Colorado State, ux courses through Google and Coursera, and am always learning something new. 
        Combining my strengths, talents and understanding where my passion lies, I am focusing my advocacy for others into the digital user experience.
        <br/> <br/>
        Outside of design and technology, I enjoy woodworking, gardening, and exercising. I like spending time with my cat, Tony, and I'm very excited to be a godmother in December 2024!
        </div>
        </div>
      );
    }