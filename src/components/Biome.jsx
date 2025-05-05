import React from 'react'
import BiomeHeader from './../assets/media/Biome-Header.png'
import Biome2 from './../assets/media/biome-2.jpg'
import graph1 from './../assets/media/graph1.png'
import graph2 from './../assets/media/graph2.png'
import graph3 from './../assets/media/graph3.png'
import graph4 from './../assets/media/graph4.png'
import AboutBiome from './BiomeComponents/AboutBiome'
import UserPersonas from './BiomeComponents/UserPersonas'
import userflow from './../assets/media/UserFlow.png';
import Prototype1 from './BiomeComponents/Prototype1'
import Prototype2 from './BiomeComponents/Prototype2'
import snapshots from './../assets/media/Snapshots.png'
import StyleGuide from './BiomeComponents/StyleGuide'




function BiomePage () {
  return (
  <div class="flex w-full h-full overflow-auto">
    <div class="flex flex-col items-center space-y-8">

    <img src={BiomeHeader} class="w-3/4"/>

    <div class="w-3/5 my-8">
        <div class="text-7xl font-castio">biome</div>
        <div class="text-2xl pb-6">_____________________________________________________</div>
        <div class="font-outfit text-sm w-4/5">
            Biome represents a design concept for a healthcare-focused social 
            media application, providing a space for users to review their work 
            environments and assist those looking to grow their career.</div>
    </div>

    <br/>
    <div class="bg-midnight w-3/4 flex flex-col items-center rounded-2xl mt-10">
        <div class="w-full">
            <div class="font-outfit-light text-[10px] opacity-85 text-white 
                        bg-grass rounded-2xl w-fit px-2 m-4 py-1">
                            About
            </div>
        </div>
        <br/>
        <div class="w-4/5 flex flex-col items-center">
            <div class="font-outfit-light text-4xl text-white">A Defining Diagnosis</div>
 
            <div class="font-outfit-light text-sm text-white text-center w-4/5 my-5">
                    Healthcare workers take care of us when we’re at our worst. 
                    <br/>
                    They spend long hours on their feet, tending to traumas and managing medications. 
            </div>

            <div class="font-outfit-light text-sm text-white text-center w-full my-5">
                Like at any job, being a part of the right team with the right equipment 
                can make for better work performance and higher confidence. Healthcare workers 
                deserve to thrive in environments that suit their needs. For those that are looking 
                for a better match,  f
                <div class="font-outfit-bold inline"> 
                     inding new hospitals and facilities shouldn’t have to be a second job.
                </div> 
            </div>

            <div class="grid grid-cols-3 w-full gap-10 mt-8  text-midnight">
                <div class="bg-white rounded-xl w-full">
                    <div class="py-8 flex flex-col items-center gap-2">
                        <div class="font-outfit-bold text-5xl">46%</div>
                        <div class="font-outfit text-xs text-center w-1/2">of health workers reported often feeling burned out</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg w-full h-full">
                    <div class="font-outfit text-center text-sm h-full content-center px-4">
                        Health workers reported fewer mental health issues when 
                        they said they work in supportive environments.
                    </div>
                </div>


                <div class="bg-white rounded-xl w-full">
                    <div class="py-8 flex flex-col items-center gap-2 ">
                        <div class="font-outfit-bold text-5xl">44%</div>
                        <div class="font-outfit text-xs text-center w-1/2">
                        of health workers intended to look for a new job</div>
                    </div>
                </div>
            </div>

            <div class="text-[8px] text-white opacity-25 font-outfit-light pt-1 w-full">
                <div class="w-5/6">Nigam JA, Barker RM, Cunningham TR, Swanson NG, Chosewood LC. 
                Vital Signs: Health Worker–Perceived Working Conditions and Symptoms of Poor Mental 
                Health — Quality of Worklife Survey, United States, 2018–2022. MMWR Morb Mortal Wkly 
                Rep 2023;72:1197–1205. DOI: http://dx.doi.org/10.15585/mmwr.mm7244e1</div>
            </div>

        </div>
    </div>

    <div class="w-3/4 my-20 relative 
                after:absolute after:inset-0 after:bg-gradient-to-t 
                after:from-gray-100 after:via-transparent 
                after:to-gray-100 after:mix-blend-normal 
                before:absolute before:inset-0 before:z-10">
        <img src={ Biome2 } class="" />
    </div>

 <div class="w-3/4"><AboutBiome/></div>

    <div class="w-3/4 flex flex-col items-center rounded-2xl ">
        <div class="w-full">
            <div class="font-outfit-light text-[10px] opacity-85 text-white 
                        bg-grass rounded-2xl w-fit px-2 my-4 py-1">
                            Research
            </div>
        </div>
        
        <div class="flex flex-col bg-midnight/10 rounded-lg w-full text-midnight pt-8 items-center font-outfit text-midnight h-full overflow-hidden">
            
            <div class="text-4xl text-center">Understanding The Symptoms</div>
            
            <br/>
            <div class="w-2/3 text-xs"> 
                <div class=" text-center">A survey was done via Google Forms with travel nurses to gather more information about the travel RN relocation process, the decision-making process, and general questions about working in healthcare.</div>
            </div>

            <div class="w-[140%] grid grid-cols-5 gap-4 my-8">

            <div class="bg-midnight/30 rounded-lg px-4 flex flex-col content-center py-4 ">
                    <div class="font-outfit text-[8px] text-center ">What is your primary factor in determining the quality of your role/shift?</div>
                    <div class="grid grid-cols-5 gap-4  ml-2">
                        <img src={ graph3 } class="col-span-2" />

                        <div class="h-fill content-center  col-span-3">
                            <div class="flex gap-1 py-1"><div class="bg-midnight rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Staff Ratio</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-grass rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Scheduling, RTO</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-bluebird rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Float Parameters</div></div>
                        </div>
                        </div>
                </div>

                <div class="bg-midnight/30 rounded-lg px-4 flex flex-col content-center py-4 gap-3">
                    <div class="font-outfit text-[8px] text-center ">What is your primary method for finding a new facility?</div>
                    <div class="grid grid-cols-5 gap-4  ml-2">
                        <img src={ graph1 } class="col-span-2" />

                        <div class="h-fill content-center  col-span-3">
                            <div class="flex gap-1 py-1"><div class="bg-midnight rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Travel Nursing Agency</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-grass rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Recommendation</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-bluebird rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Personal Research</div></div>
                        </div>
                        </div>
                </div>

                <div class="bg-midnight/30 rounded-lg px-4 flex flex-col content-center py-4 gap-3">
                    <div class="font-outfit text-[8px] text-center ">What is your primary factor in making a decision?</div>
                    <div class="grid grid-cols-5 gap-4  ml-2">
                        <img src={ graph2 } class="col-span-2" />

                        <div class="h-fill content-center  col-span-3">
                            <div class="flex gap-1 py-1"><div class="bg-midnight rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Location</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-grass rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Pay Rate</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-bluebird rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Family/Loved Ones</div></div>
                        </div>
                        </div>
                </div>


                <div class="bg-midnight/30 rounded-lg px-4 flex flex-col content-center py-4 sm:gap-1 md:gap-2">
                    <div class="font-outfit text-[8px] text-center ">What is your primary factor in determining the quality of your role/shift?</div>
                    <div class="grid grid-cols-5 gap-4  ml-2">
                        <img src={ graph3 } class="col-span-2" />

                        <div class="h-fill content-center  col-span-3">
                            <div class="flex gap-1 py-1"><div class="bg-midnight rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Staff Ratio</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-grass rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Scheduling, RTO</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-bluebird rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Float Parameters</div></div>
                        </div>
                        </div>
                </div>

                <div class="bg-midnight/30 rounded-lg px-4 flex flex-col content-center py-4 gap-2">
                    <div class="font-outfit text-[8px] text-center ">What is your primary factor in determining the quality of your role/shift?</div>
                    <div class="grid grid-cols-5 gap-4  ml-2">
                        <img src={ graph4 } class="col-span-2" />

                        <div class="h-fill content-center  col-span-3">
                            <div class="flex gap-1 py-1"><div class="bg-midnight rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Staff Ratio</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-grass rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Scheduling, RTO</div></div>
                            <div class="flex gap-1 py-1"><div class="bg-bluebird rounded-lg h-[8px] w-[8px] "></div> <div class="text-[8px] leading-2"> Float Parameters</div></div>
                        </div>
                        </div>
                </div>

            </div>

            <div class="w-full">
                <div class="text-lg text-center">Key Interview Findings</div>
                <br/>
            

                <div class="w-full px-10 flex flex-col items-center gap-4">

                    <div class="flex w-3/4 gap-4">
                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2 text-white opacity-70 ">01</div>
                            <div class="text-[10px] font-outfit-light content-center">I am stressed that my new facility will not meet my career needs.</div>
                        </div>

                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2  text-white opacity-70">02</div>
                            <div class="text-[10px] font-outfit-light content-center">I don’t want to spend all of my free time networking and researching.</div>
                        </div>
                    </div>

                    <div class="flex w-full gap-4">
                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2  text-white opacity-70">03</div>
                            <div class="text-[10px] font-outfit-light content-center">I value word-of-mouth reviews and referrals the most.</div>
                        </div>

                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2  text-white opacity-70">04</div>
                            <div class="text-[10px] font-outfit-light content-center">I love being able to move cities every few months.</div>
                        </div>

                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2  text-white opacity-70">05</div>
                            <div class="text-[10px] font-outfit-light content-center">I want to feel like I have control of my decision.</div>
                        </div>
                    </div>

                    <div class="flex w-3/4 gap-4">
                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2 text-white opacity-70">06</div>
                            <div class="text-[10px] font-outfit-light content-center">I believe a different hospital could be a better match for me.</div>
                        </div>

                        <div class="bg-midnight/30 p-2 rounded-lg flex px-4 content-center w-full">
                            <div class="text-5xl pr-2 text-white opacity-70">07</div>
                            <div class="text-[10px] font-outfit-light content-center">I struggle making a big decision without having enough relevant information.</div>
                        </div>
                    </div>

                </div>
            </div>
            <br/>

        </div>

        <UserPersonas/>

        <div class="py-4"><img src={ userflow }/></div>

        <div class="w-full h-full aspect-7/4 "><Prototype1 /></div>

        <img src={snapshots} class="-my-2"/>

        <div class="w-full h-full aspect-7/4 "><Prototype2 /></div>
    </div>

    <div class="flex w-3/4"><StyleGuide/></div>

    </div>
  </div> 
  );
}

export default BiomePage;