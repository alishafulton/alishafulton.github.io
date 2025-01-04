import React, { useState } from 'react';
import CoastPrototype from './CoastPrototype';

export default function Coast () {

    return (
        <div className="flex w-full pt-2 justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
          <div className="flex flex-col w-full h-screen" >

          <div className="flex flex-col justify-center sm:py-36 lg:py-96 space-y-4">
            <div className="text-6xl lg:text-9xl font-coast flex justify-center ">COAST</div>
            <div className="flex justify-center">
              <div className="flex justify-center text-sm  font-sans w-32 bg-black bg-opacity-20 border-black border-2 rounded-3xl px-2 py-1">UX/UI Case Study</div>
            </div>
            </div>

          <div className="flex w-full justify-center" data-aos="slide-up"><CoastPrototype/></div>
          </div>


    </div>
    );
};