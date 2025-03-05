"use client";
import Hero from "./sections/Hero";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Navbar } from "./sections/Navbar";
import { Particles } from "@/components/magicui/particles";
import { Users } from "./sections/Users";




export default function Home() {
        // particles
        const { resolvedTheme } = useTheme();
        const [color, setColor] = useState("#000000");
  return (
    

<div className="bg-color-1">
  <Navbar />
  <Hero />
  <Particles
        className="absolute inset-0 z-0 border-0"
        quantity={100}
        ease={30}
        color={color}
        refresh
      /> 
</div>
  );
}
