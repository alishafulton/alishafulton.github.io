import React from 'react'
import TextingVideo from '../videos/TextingVideo.jsx'
import MockUpCloseUp from '../../assets/media/Mockup_Closeup2.png'
import MockUpCloseUp2 from '../../assets/media/Mockup_Closeup3.png'
import TextingVideo2 from '../videos/TextingVideo2.jsx';

function AboutBiome () {
  return (
    <div class="grid grid-rows-3 gap-6">

         <div class="flex w-full gap-6">
          <div class="w-2/3 "><TextingVideo/></div>
          <div class="w-1/2 h-full bg-midnight/20 rounded-xl"><img src={ MockUpCloseUp } class=" "/></div>
         </div>

         <div class="w-full bg-midnight rounded-xl content-center">
            <div class="flex flex-col w-full items-center gap-6">
                <div class="font-castio text-white text-3xl w-full text-center">biome is a space where healthcare workers...</div>

                <div class="font-outfit text-white text-lg justify-center space-y-4">
                    <div>can help each other</div>
                    <div>can connect with each other</div>
                    <div>can rely on each other</div>
                </div>
            </div>
         </div>

         <div class="flex w-full gap-6">
          <div class="w-1/2 h-full bg-midnight/20 rounded-xl content-end"><img src={ MockUpCloseUp2 } class=" "/></div>
          <div class="w-4/5 "><TextingVideo2/></div>
          
         </div>
  
  </div>
  );
}

export default AboutBiome;