import React, { useState } from 'react';
import CoastPrototype from './CoastPrototype';

export default function Coast () {

    return (
        <div className="flex w-full pt-2 justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
          <div className="flex flex-col w-full h-screen py-12" >

          <div className="flex flex-col justify-center py-44 lg:py-84 space-y-4">
            <div className="text-6xl lg:text-9xl font-coast flex justify-center ">COAST</div>
            <div className="flex justify-center">
              <div className="flex justify-center text-xs rounded font-sans w-32 bg-black text-white px-2 py-1">UX/UI Case Study</div>
            </div>
            </div>

            <div className="flex flex-col justify-center w-64 py-24">
              <div className="flex justify-center font-coast text-lg p-3 w-full">ABOUT</div>
              <div className="flex justify-center font-serif text-sm w-full">
                Coast is a native app for both iOS and Android users that provides an 
                online marketplace for short-term home rentals. It's goal is to equip users with
                a streamlined, stress-free process with clarity at every step. </div>
            </div>


          <div className="flex w-full justify-center" data-aos="slide-up"><CoastPrototype/></div>
          </div>


    </div>
    );
};