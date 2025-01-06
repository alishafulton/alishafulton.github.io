import React from 'react';
import CoastPrototype from './CoastPrototype';
import Problem from './Problem';

export default function Coast () {

    return (
        <div className="flex w-full pt-2 justify-center bg-coast-logo bg-scroll bg-contain bg-top overflow-auto bg-no-repeat">
          <div className="flex flex-col w-full h-screen" >

            <div className="flex flex-col justify-center py-44 lg:py-84 space-y-4">

               <div className="text-6xl lg:text-9xl font-coast flex justify-center ">COAST</div>
              
               <div className="flex justify-center">
                 <div className="flex justify-center text-sm rounded-xl font-sans w-32 bg-black text-white px-2 py-1">UX/UI Case Study</div>
               </div>

            </div>

            <div className="flex flex-col justify-center w-full py-24">
              <div className="flex justify-center font-coast text-2xl p-3 w-full">ABOUT</div>
              <div className="flex justify-center font-serif text-sm w-full">
                <div className="flex justify-center text-lg w-96">
                Coast is a web app that provides an online marketplace for home rentals. Its goal is to equip users with
                a streamlined, stress-free process with clarity at every step. </div></div>
            </div>



            <div className="flex flex-col justify-center w-full max-w-3xl px-4" >
              <div className="flex justify-center font-coast text-2xl p-3 w-full">PROBLEM</div>
              
              <div className="flex justify-center font-serif text-sm w-full">
                <div className="flex justify-center text-center text-lg ">
                  As the travel industry grows and changes, the rental process 
                  has become stressful, confusing and disappointing. 
                </div>
              </div>

             <div className="flex w-full justify-center "><Problem/></div>



            </div>

          <div className="flex w-full justify-center"><CoastPrototype/></div>
          </div>


    </div>
    );
};