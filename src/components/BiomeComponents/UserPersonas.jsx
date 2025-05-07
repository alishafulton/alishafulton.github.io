import React from 'react'
import nursepersona from '../../assets/media/NursePersona.jpg'
import DoctorVideo from '../videos/DoctorVideo';


function UserPersonas () {
  return (
    <div class="w-full">
        {/* TAG */}
        <div class="w-full flex gap-2">
            <div class="font-outfit-light text-[10px] opacity-85 text-white 
                        bg-grass rounded-2xl w-fit px-2 mt-4 mb-2 py-1">
                    Research
            </div>
            <div class="font-outfit-light text-[10px] opacity-85 text-white 
                        bg-grass rounded-2xl w-fit px-2 mt-4 mb-2 py-1">
                    User Personas
            </div>
        </div>
        
        {/* PERSONAS */}
        <div class="grid grid-cols-5">

            {/* FIRST COLUMN */}
            <div class=" col-span-2 flex flex-col justify-between space-y-4">

                {/* IMAGE */}
                <div class="w-full relative ">
                    <img src={nursepersona} class="rounded-xl"/>

                    <div class="flex flex-col w-2/3 absolute bottom-3 right-3 space-y-3 text-end items-end">
                        <div class=" bg-white/60 font-outfit-light text-xl lg:text-3xl backdrop-blur-sm px-4 py-1 lg:py-2 rounded-3xl ">
                            Jane, 25
                        </div>
                        <div class=" bg-white/60 font-outfit-light text-[8px] lg:text-[10px]/4 backdrop-blur-sm px-4 py-2 rounded-2xl ">
                            Jane has been a travel nurse for four years, working in 9 
                            different facilities as a registered RN. She takes pride in 
                            the work that she does, but struggles with finding new 
                            hospitals that meet her needs. 
                        </div>
                    </div>
                </div>

                {/* CHALLENGES/NEEDS */}
                <div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div class="bg-midnight/30 flex w-full rounded-xl ">
                        <div class="flex flex-col space-y-2 px-4 xl:px-8 py-4 lg:py-6 align-start">
                            <div class="font-outfit-bold text-[11px] md:text-[13px] ml-2">
                                CHALLENGES
                            </div>

                            <ul class="list-disc font-outfit text-[8px]/3 lg:text-xs space-y-1 ml-3">
                                <li>Long, stressful shifts leads to little free time to research new hospitals</li>
                                <li>With little resources for travel RNs to rely on with frequent facility changes, an important career change can be completely blind</li>
                             </ul>
                        </div>
                    </div>
                   
                    <div class="bg-midnight/30 flex w-full rounded-xl" >
                        <div class="flex flex-col space-y-2 px-4 xl:px-8 py-4 lg:py-6 align-start">
                            <div class="font-outfit-bold text-[11px] md:text-[13px] ml-2">
                                NEEDS
                            </div>

                            <ul class="list-disc font-outfit text-[8px]/3 lg:text-xs space-y-1 ml-3">
                                <li>To be able to rely on firsthand experiences from actual employees  </li>
                                <li>To be able to explore and learn about other hospitals on the go</li>
                                <li>A category system to help narrow down hospitals by size, specialization, location or other factors </li>
                             </ul>
                        </div>
                    </div>
                </div>

                {/* QUOTE */}
                <div class="flex w-full bg-grass rounded-2xl justify-center">
                    <div class="text-sm/5 lg:text-sm/6 text-white font-outfit-light  w-3/4 lg:w-3/5 py-6">
                        “My job is very rewarding, but it comes with it’s own challenges. 
                        I use an agency to find new hospitals and often can’t get many 
                        questions I have answered. <span class="inline font-outfit-bold">I would love to be able to walk into 
                        my first day feeling confident and prepared!”</span>
                    </div>
                </div>

            </div>

            {/* SECOND COLUMN */}
            <div class="col-span-1 px-2 md:px-4 flex flex-col justify-between"> 

                {/* ABT JANE */}
                <div class="flex flex-col w-full bg-slate/80 font-outfit p-2 md:p-5 rounded-2xl h-full justify-between space-y-1 ">

                    {/* GENDER */}
                    <div class="md:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60">GENDER</div>
                        <div class="text-xs xl:text-base">Female</div>
                    </div>

                    {/* PERSONALITY */}
                    <div class="md:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60">PERSONALITY</div>
                        <div class="flex flex-wrap font-outfit-light gap-1">
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Outgoing</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Driven</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Active</div>
                            <div class="bg-grass text-[9px] xl:text-sm  text-white px-2 py-0.5 rounded-xl">Generous</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Reliable</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Adventurous</div>
                        </div>
                    </div>

                    {/* LIKES */}
                    <div class="md:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60">LIKES</div>
                        <div class="text-[9px] lg:text-xs/5">Night Shifts, Med Surg, PCU, Telemetry</div>
                    </div>
                </div>

                {/* BIOME */}
                <div class="flex flex-col text-midnight items-center h-full place-content-center py-3 md:py-12">
                    <div class="font-castio text-7xl lg:text-9xl">b</div>
                    <div class="text-[8px] md:text-[10px] lg:text-xs/5 font-outfit">
                        Two user personas are created after analyzing research on healthcare facilities and to reflect interview insights:
                        <span class="font-outfit-bold"> Traveling RN and Speciality-Focused doctor.</span>
                    </div>
                </div>

                {/* ABT SAM */}
                <div class="flex flex-col w-full bg-slate/80 font-outfit p-2 md:p-5 rounded-2xl space-y-3 h-full justify-between space-y-1">

                    {/* GENDER */}
                    <div class="lg:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60 text-end">GENDER</div>
                        <div class="text-xs xl:text-base text-end">Male</div>
                    </div>

                    {/* PERSONALITY */}
                    <div class="lg:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60 text-end">PERSONALITY</div>
                        <div class="flex flex-wrap font-outfit-light gap-1 justify-end">
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Patient</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Confident</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Independent</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Devoted</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Sensible</div>
                            <div class="bg-grass text-[9px] xl:text-sm text-white px-2 py-0.5 rounded-xl">Charismatic</div>
                            
                        </div>
                    </div>

                    {/* LIKES */}
                    <div class="lg:space-y-1">
                        <div class="text-[7px] xl:text-[9px] text-midnight/60 text-end">LIKES</div>
                        <div class="text-[9px] lg:text-xs/5 text-end">Adolescent Medicine,
                        Family Medicine, Continuing Education and Research</div>
                    </div>
                </div>
            </div>
            
            
            {/* THIRD COLUMN */}
            <div class="col-span-2 flex flex-col justify-between space-y-4">

                {/* QUOTE */}
                <div class="flex w-full bg-grass rounded-2xl justify-center">
                    <div class="text-sm/5 lg:text-sm/6 text-white font-outfit-light  w-3/4 lg:w-3/5 py-6">
                        “I’ve been at the same hospital for a while, and I really value 
                        the up-to-date facility and the encouragement to publish in journals. 
                        Now that I’m moving, <span class="inline font-outfit-bold">I want to 
                            ensure that my career goals are still on track.”</span>
                    </div>
                </div>

                {/* CHALLENGES/NEEDS */}
                <div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div class="bg-midnight/30 flex w-full rounded-xl ">
                        <div class="flex flex-col space-y-2 px-4 xl:px-8 py-4 lg:py-6 align-start">
                            <div class="font-outfit-bold text-[11px] md:text-[13px] ml-2">
                                CHALLENGES
                            </div>

                            <ul class="list-disc font-outfit text-[8px]/3 lg:text-xs space-y-1 ml-3">
                                <li>When moving to a new location due to outside factors (family, marriage, etc.), 
                                    it can be hard to determine what facilities would be a good match</li>
                                <li>Changing facilities or hospitals can regress career growth or stall important continuing education</li>
                             </ul>
                        </div>
                    </div>
                   
                    <div class="bg-midnight/30 flex w-full rounded-xl" >
                        <div class="flex flex-col space-y-2 px-4 xl:px-8 py-4 lg:py-6 align-start">
                            <div class="font-outfit-bold text-[11px]  md:text-[13px] ml-2">
                                NEEDS
                            </div>

                            <ul class="list-disc font-outfit text-[8px]/3 lg:text-xs space-y-1 ml-3">
                                <li>To create connections with other healthcare workers at different facilities in various locations  </li>
                                <li>To ensure necessary equipment, materials, or individuals are accessible at different facilities to continue career</li>
                                <li>A calming, simple, and easy to understand interface </li>
                             </ul>
                        </div>
                    </div>
                </div>

                {/* IMAGE */}
                <div class="w-full relative ">
                    <DoctorVideo class=""/>

                    <div class="flex flex-col w-2/3 absolute bottom-3 right-3 space-y-3 text-end items-end">
                        <div class="bg-white/60 font-outfit-light text-xl lg:text-3xl backdrop-blur-sm px-4 py-1 lg:py-2 rounded-3xl ">
                            Samuel, 39
                        </div>
                        <div class=" bg-white/60 font-outfit-light text-[8px] lg:text-[10px]/4 backdrop-blur-sm px-4 py-2 rounded-2xl ">
                        Samuel is a skilled, board-certified pediatrician, and has been 
                        recognized by business and healthcare journals. He is devoted and 
                        dedicated, but is facing a major life milestone that requires a move. 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default UserPersonas;