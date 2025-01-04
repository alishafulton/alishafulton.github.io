import React, { useState } from 'react';
import CoastPrototype from './CoastPrototype';

export default function Coast () {

    return (
        <div className="flex w-full pt-4 justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
          <div className="flex flex-col w-full h-screen" >

          <div className="flex flex-col justify-center py-96 space-y-4">
            <div className="text-6xl lg:text-8xl font-coast flex justify-center ">COAST</div>
            <div className="flex justify-center"><div className="flex justify-center text-sm font-sans w-24 bg-black bg-opacity-20 border-black border-2 rounded-lg px-4">UX/UI Case Study</div>
          </div></div>

          <CoastPrototype className="flex w-full" data-aos="slide-up"/>
          </div>


    </div>
    );
};