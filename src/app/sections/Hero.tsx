import React from 'react'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {Particles} from '@/components/magicui/particles'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { AvatarCircles } from '@/components/magicui/avatar-circles';

function Hero() {

  return (
    
    <div className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden  bg-background p-40">
<h1 className=" text-balance text-gray-700 text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ">Finally a&nbsp; 
      <LineShadowText className="italic pr-2 text-red-400 hover:text-green-300" shadowColor={"black"} >
        Patch Pirate
      </LineShadowText>
    </h1>
    </div>
  )
}

export default Hero