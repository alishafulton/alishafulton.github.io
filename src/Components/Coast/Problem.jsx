import React from 'react';
import emotion1 from './../../assets/coast_emotion1.png'


export default function Problem () {

    return (
<div>
 
 <div className="w-full justify-center bg-black grid grid-cols-3 gap-2 p-4 my-4">

    <div className="flex w-full bg-white font-serif justify-center text-sm">Time consuming search process</div>

    <div className="flex flex-col w-full bg-white">
        <img src={ emotion1 } className="w-36 justify-center" />
        <div className="font-serif justify-center text-sm">Unreliable reviews</div>
    </div>

    <div className="flex w-full bg-white font-serif justify-center text-sm">Inconsistency between photos and reality</div>

 </div>

</div>


    )
};