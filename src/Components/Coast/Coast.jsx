import React, { useState } from 'react';
import slogo from '../../assets/s_logo.png';
import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import coast3 from '../../assets/Coast3.png';
import coast4 from '../../assets/Coast4.png';
import coast5 from '../../assets/Coast5.png';
import coast6 from '../../assets/Coast6.png';
import coast7 from '../../assets/Coast7.png';
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
      <div className="flex-col max-w-3xl justify-items-center bg-scroll bg-coast-logo bg-top  bg-no-repeat" >
        <div>
          <div className="w-full py-80">
            <div className="sm:text-4xl lg:text-8xl font-coast justify-center">COAST</div>
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