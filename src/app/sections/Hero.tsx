import React from 'react'
import { LineShadowText } from '@/components/magicui/line-shadow-text'

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