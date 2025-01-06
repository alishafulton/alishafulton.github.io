import React from 'react';
import emotion1 from './../../assets/coast_emotion1.png'


export default function Problem () {

    return (
<div>
 
 <div className="w-full justify-center bg-black grid grid-cols-3 gap-2 p-4 my-4">

    <div className="flex w-full bg-white font-serif justify-center ">Time consuming search process</div>

    <div className="flex flex-col w-full bg-white justify-center justify-items-center">
        <img src={ emotion1 } className="max-w-60 justify-center" />

        <div className="flex flex-col w-full">
            <div className="flex w-full text-center justify-center">Unreliable reviews</div>
            <div className="text-sm">skifhuisjhre owiejr oij ioj oi kjxkck sopspepele. i if i oeoefm  </div>
            </div>
    </div>

    <div className="flex w-full bg-white font-serif justify-center ">Inconsistency between photos and reality</div>

 </div>

</div>


    )
};