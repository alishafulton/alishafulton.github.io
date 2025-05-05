import React from 'react'
import background1 from '../../assets/media/Background.png'
import icon1 from '../../assets/media/icon1.png'
import icon2 from '../../assets/media/icon2.png'
import icon3 from '../../assets/media/icon3.png'
import icon4 from '../../assets/media/icon4.png'
import icon5 from '../../assets/media/icon5.png'
import icon6 from '../../assets/media/icon6.png'


function StyleGuide () {
  return (
    <div class="w-full relative">
        <img src={ background1 } class="w-full rounded-2xl"/>

        <div class="flex w-full h-full absolute top-0 right-0">
            <div class="flex w-full h-full place-content-center">
                <div class="flex flex-col w-5/6 h-full py-24 place-self-center justify-between">
                    <div class="grid grid-cols-4 gap-10 w-full h-5/12 ">
                        <div class="flex flex-col gap-10">
                            <div class="rounded-3xl bg-[#FAFAFA] text-black content-end p-4 font-outfit text-sm h-full drop-shadow-xl/20">#FAFAFA</div>
                            <div class="rounded-3xl bg-[#14010B] text-white content-end p-4 font-outfit text-sm h-full drop-shadow-xl/20">#14010B</div>
                        </div>
                        <div class="rounded-3xl bg-[#13293D] text-white content-end p-4 font-outfit text-sm drop-shadow-xl/20">#13293D</div>
                        <div class="rounded-3xl bg-[#419D78] text-white content-end p-4 font-outfit text-sm drop-shadow-xl/20">#419D78</div>
                        <div class="rounded-3xl bg-[#AF3800] text-white content-end p-4 font-outfit text-sm drop-shadow-xl/20">#AF3800</div>
                    </div>

                    <div class="grid grid-cols-2 place-items-center ">
                        <div>
                            <div class="flex flex-col font-outfit text-white">
                                <div class="text-5xl/18">Outfit</div>
                                <div class="leading-7">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                                <div>abcdefghijklmnopqrstuvwxyz</div>
                            </div>
                        </div>

                        <div>
                            <div class="font-castio text-white w-full">
                            <div class="text-5xl/18">Castio</div>
                            <div class="leading-7">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                            <div>abcdefghijklmnopqrstuvwxyz</div>
                        </div>
                    </div>
                    </div>

                    <div class="grid grid-cols-6 w-full h-1/8 gap-30">
                        <div>
                            <img src={ icon1 }/>
                        </div>

                        <div>
                            <img src={ icon2 }/>
                        </div>

                        <div>
                            <img src={ icon3 }/>
                        </div>

                        <div>
                            <img src={ icon4 }/>
                        </div>

                        <div>
                            <img src={ icon5 }/>
                        </div>

                        <div>
                            <img src={ icon6 }/>
                        </div>

                    </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default StyleGuide;