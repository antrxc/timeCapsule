import React from 'react'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {Particles} from '@/components/magicui/particles'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { AvatarCircles } from '@/components/magicui/avatar-circles';

function Hero() {
    const avatars = [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/20110627",
          profileUrl: "https://github.com/tomonarifeehan",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/106103625",
          profileUrl: "https://github.com/BankkRoll",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/59228569",
          profileUrl: "https://github.com/safethecode",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/59442788",
          profileUrl: "https://github.com/sanjay-mali",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/89768406",
          profileUrl: "https://github.com/itsarghyadas",
        },
      ];
  return (
    
    <div className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden  bg-background p-40">
<h1 className=" text-balance text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ">Finally &nbsp; 
      <LineShadowText className="italic pr-2 text-red-900" shadowColor={"black"} >
        Open Source
      </LineShadowText>
    </h1>
    </div>
  )
}

export default Hero