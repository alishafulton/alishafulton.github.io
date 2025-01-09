import React, { useState } from 'react';
import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';




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
    
      <div className="flex w-full bg-gradient-to-b from-lightblue to-darkblue overflow-hidden">
          <div className="flex flex-col w-full overflow-auto" >
   

        <img src={ channel1 } alt="" className="py-4 flex w-500 " />
        <img src={ channel1 } alt="" className="py-4 flex w-500" />

        <div className="flex flex-col place-self-center w-2/3 text-white font-channel space-y-8 py-4 ">

          <div className="flex flex-col justify-center py-4">
            <div className="flex w-full text-right text-3xl py-2">problem</div>
            <div className="flex text-lg w-2/3">The healthcare industry is demanding and can lead to burn out, exhaustion and other debilitating circumstances. As individuals, we all have different capacities for what we can handle. Healthcare workers that switch facilities, like travel nurses, don’t have a reliable way to source information about those facilities.</div>
          </div>

          <div className="flex flex-col place-content-end py-4">
            <div className="flex w-full text-right text-3xl place-content-end py-2">solution</div>
            <div className="flex text-lg text-right w-full place-content-end">
              <div className="flex w-2/3 ">To provide a space for healthcare workers to review their environments, and for those reviews to assist healthcare workers who are looking to switch facilities.</div>
        </div>
        </div>
        </div>

        <img src={ channel1 } alt="" className="py-4 flex w-500" />
        
        <div className="flex w-2/3 place-self-center text-white font-channel">
          <div className="grid grid-cols-3 space-x-2">
            <div className="flex flex-col">
              <div className="flex bg-navy opacity-90 rounded-lg p-8">
              Healthcare workers can have limited free time, so keeping the sign up process simple is important. Users can type their phone number to gain access with a verification code, or sign in with familiar options. 
              </div>
              <img src ={ channel2 } className="flex w-60" />
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>

        </div>


        <img src={ channel1 } alt="" className="py-4 flex w-500" />





</div>
 </div>
    );
}
