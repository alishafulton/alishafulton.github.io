import React from 'react'
import TextingVideo from '../videos/TextingVideo.jsx'
import MockUpCloseUp from '../../assets/media/Mockup_Closeup2.png'
import MockUpCloseUp2 from '../../assets/media/Mockup_Closeup3.png'
import TextingVideo2 from '../videos/TextingVideo2.jsx';

function AboutBiome () {
  return (
    <div class="flex flex-col w-full space-y-6">

      {/* TOP */}
      <div class="flex w-full space-x-6 overflow-hidden rounded-xl">
          <div class="w-2/3"><TextingVideo/></div>
          <div class="flex w-1/3 bg-midnight/20 rounded-xl relative">
            <div class="absolute top-0 left-0 w-[150%] ">
              <img src={ MockUpCloseUp } class="flex w-[150%] aspect-4/3 overflow-hidden"/>
            </div></div>
      </div>
      
      
      {/* MIDDLE */}
      <div class="flex w-full bg-midnight rounded-xl content-center">
        <div class="flex flex-col w-full items-center gap-4 lg:gap-8 py-8">
           <div class="font-castio text-white text-xl lg:text-3xl w-full text-center">biome is a space where healthcare workers...</div>
           
           <div class="font-outfit-light text-white text-sm lg:text-lg justify-center space-y-4">
                    <div>can help each other</div>
                    <div>can connect with each other</div>
                    <div>can rely on each other</div>
                </div>
            </div>
         </div>

         <div class="flex w-full gap-6">
          <div class="bg-midnight/20 rounded-xl content-end"><img src={ MockUpCloseUp2 } class=" "/></div>
          <div class=""><TextingVideo2/></div>
          
         </div>
  
  </div>
  );
}

export default AboutBiome;