import React, { useState } from 'react';
import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';
import channel3 from '../../assets/channel3.png';
import channel4 from '../../assets/channel4.png';
import channel5 from '../../assets/channel5.png';
import channel6 from '../../assets/channel6.png';
import channel7 from '../../assets/channel7.png';
import channel8 from '../../assets/channel8.png';



// i imported all of my sections of my portfolio
// separately as components 


export default function Channel () {  
    
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
    
      <div className="flex w-full justify-center bg-navy overflow-hidden">
          <div className="flex flex-col w-full overflow-auto justify-center" >
   

        <img src={ channel1 } alt="" className="py-4 flex w-500" />
        <img src={ channel1 } alt="" className="py-4 flex w-500" />

        <div className="flex flex-col w-2/3 justify-center text-white font-channel space-y-4 py-4 ">

          <div className="flex flex-col">
            <div className="flex w-full text-right text-3xl ">problem</div>
            <div className="text-lg w-2/3">To provide a space for healthcare workers to review their environments, and for those reviews to assist healthcare workers who are looking to switch facilities.</div>
          </div>

          <div className="flex flex-col place-content-end">
            <div className="flex w-full text-right text-3xl place-content-end">solution</div>
            <div className="text-lg text-right w-full place-content-end">
              <div className="flex w-2/3 ">To provide a space for healthcare workers to review their environments, and for those reviews to assist healthcare workers who are looking to switch facilities.</div>
        </div>
        </div>
        </div>

        <img src={ channel1 } alt="" className="py-4 flex w-500" />
        <img src={ channel1 } alt="" className="py-4 flex w-500" />
        <img src={ channel1 } alt="" className="py-4 flex w-500" />





</div>
 </div>
    );
}
