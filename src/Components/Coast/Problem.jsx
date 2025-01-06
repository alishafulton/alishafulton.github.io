import React from 'react';
import emotion1 from './../../assets/coast_emotion1.png';
import emotion2 from './../../assets/coast-emotion2.png';
import emotion3 from './../../assets/coast_emotion3.png';


export default function Problem () {

    return (
<div>
 
 <div className="w-full justify-center grid grid-cols-3 gap-4 p-4 my-4">

 <div className="flex flex-col w-full  justify-center justify-items-center p-2">
        <img src={ emotion2 } className="max-w-60 justify-center" />

        <div className="flex flex-col w-full bg-white">
            <div className="flex w-full text-center justify-center py-2 font-coast">Unreliable reviews</div>
            <div className="text-sm font-serif ">skifhuisjhre owiejr oij ioj oi kjxkck sopspepele. i if i oeoefm  </div>
            </div>
    </div>
    
 <div className="flex flex-col w-full  justify-center justify-items-center p-2">
        <img src={ emotion3 } className="max-w-60 justify-center" />

        <div className="flex flex-col w-full bg-white">
            <div className="flex w-full text-center justify-center py-2 font-coast">Time-consuming Search Process</div>
            <div className="text-sm font-serif ">skifhuisjhre owiejr oij ioj oi kjxkck sopspepele. i if i oeoefm  </div>
            </div>
    </div>

   

    <div className="flex flex-col w-full  justify-center justify-items-center p-2">
        <img src={ emotion1 } className="max-w-60 justify-center" />

        <div className="flex flex-col w-full">
            <div className="flex w-full text-center justify-center py-2 font-coast">Inconsistency between photos and reality</div>
            <div className="text-sm font-serif">skifhuisjhre owiejr oij ioj oi kjxkck sopspepele. i if i oeoefm  </div>
            </div>
    </div>
    


 </div>

</div>


    )
};