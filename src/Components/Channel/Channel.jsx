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
    
      <div className="flex w-full bg-gradient-to-b from-lightblue to-darkblue overflow-hidden">
          <div className="flex flex-col w-full overflow-auto" >
   

        <img src={ channel1 } alt="" className="py-4 flex w-500 " />

        <div className="flex w-2/3 place-self-center ">
        <div className="flex w-full">
          <div className="flex"><img src={channel7} alt="" className="flex w-full" /></div>
          <div className="flex w-1/2 p-4 m-4 font-channel text-black text-sm place-self-center">The home page is simple and welcoming. A statement verification of the user’s current facility includes a review button for quick access to partially completed form. The rest of the page has recent reviews of hospitals in the area.</div>
          <div className="flex"><img src={channel8} alt="" className="flex w-full" /></div>
        </div>
        </div>

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

        
        <div className="flex xs:w-full xs:p-2 md:p-0 md:w-2/3 place-self-center relative">

            <div className="flex w-full text-white font-channel  ">

             <div className="flex flex-col w-full max-w-xs place-items-center ">
              <div className="flex xs:w-full md:w-2/3 bg-navy opacity-90 rounded-xl p-2  text-sm " >
                 Healthcare workers can have limited free time, so keeping the sign up process simple is important. Users type their phone number to gain access with a verification code, or sign in with familiar options. 
              </div>
                 <img src ={ channel2 } className="flex w-full justify-self-center"  />
             </div>

             <div className="place-content-center w-full max-w-md ">
                <img src ={ channel3 } className="flex w-full"  />
             </div>

             <div className="flex flex-col w-full max-w-xs place-items-center">
               <img src ={ channel4 } className="flex justify-center " />
               <div className="flex xs:w-full md:w-2/3 place-self-center bg-navy opacity-90 rounded-xl xs:p-2 md:p-4 text-sm" >
               After verifying a phone number, the user only needs to enter a name and an email address to continue.  
             </div>

            </div>
          </div>

        </div>


        <img src={ channel1 } alt="" className="py-4 flex w-500" />

        <div className="flex w-2/3  place-self-center">

          <div className="grid grid-cols-3">
           <img src={ channel5 } alt=""/>

           <div className="rounded-lg bg-white bg-opacity-50 place-self-center p-3 font-channel text-sm">Users can take advantage of the in-app messaging system to connect 
             and ask questions about facilities or environments. 
              <br/> <br/>
             They can feel more confident getting information from past or current employees.</div>

           <img src={ channel6 } alt=""/>
        </div>

        </div>





</div>
 </div>
    );
}
