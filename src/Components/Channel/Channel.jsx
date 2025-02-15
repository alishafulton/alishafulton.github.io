import React, { useState } from 'react';
import biome1 from '../../assets/biome1.png';
import biome2 from '../../assets/biome2.png';
import biome3 from '../../assets/biome3.png';
import biome4 from '../../assets/biome4.png';


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
    
      <div className="flex w-full bg-channelbg overflow-hidden">
          <div className="flex flex-col w-2/3 overflow-auto justify-center" >

        <img src={ biome1 } alt="" className="py-4 flex w-full " />

        <img src={ biome2 } alt="" className="py-4 flex w-full " />

        <img src={ biome3 } alt="" className="py-4 flex w-full" />g

        <img src={ biome4 } alt="" className="py-4 flex w-full" />



</div>
 </div>
    );
}
