import React, { useState } from 'react';
import slogo from '../../assets/s_logo.png';

import CoastPrototype from './CoastPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Coast () {

    const [showBtn, setShowBtn] = useState("myBtn none");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowBtn("myBtn");
      } else {
        setShowBtn("none");
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



    return (
      <div>
    <div className="flex w-full justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
     

      <div className="flex flex-col w-full h-screen justify-center" >

          <div>
            <div className="sm:text-4xl lg:text-8xl font-coast justify-center ">COAST</div>
            <div className="flex justify-center text-sm font-sans w-36 bg-black bg-opacity-20 border-black border-2 rounded-lg px-4">UX/UI Case Study</div>
          </div>

          <CoastPrototype data-aos="slide-up"/>
          </div>


    </div>



        <div>
          <button onClick={topFunction} id="myBtn" className={showBtn} title="Go to top" >
            top
          </button>
        </div>
</div>
    );
};