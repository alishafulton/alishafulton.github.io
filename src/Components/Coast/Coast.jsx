import React, { useState } from 'react';
import CoastPrototype from './CoastPrototype';

export default function Coast () {

    return (
        <div className="flex w-full pt-12 justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
          <div className="flex flex-col w-full h-screen" >

          <div className="flex flex-col justify-center py-96 ">
            <div className="sm:text-4xl lg:text-8xl font-coast flex justify-center ">COAST</div>
            <div className="flex justify-center text-sm font-sans w-36 bg-black bg-opacity-20 border-black border-2 rounded-lg px-4">UX/UI Case Study</div>
          </div>

          <CoastPrototype data-aos="slide-up"/>
          </div>


    </div>
    );
};