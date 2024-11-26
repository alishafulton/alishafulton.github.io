import React, { useState } from 'react';
import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import coast3 from '../../assets/Coast3.png';




export default function FakePage () {

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
            <div className="flex-col max-w-4xl justify-items-center ">
            🚧  Currently Under Construction!  🚧
<br/>
Current as of Nov 26        </div>


         <div>
            <button
            onClick={topFunction}
            id="myBtn"
            className={showBtn}
            title="Go to top" >top
            </button>
         </div>
     </div>
    );
};