"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";

export function Button() {

  let handleClick = ()=>{
    console.log(" btn clicked")
  }

  return (
    <div className=" mt-5  flex justify-start text-center cursor-pointer">
      <HoverBorderGradient onClick={handleClick}
        containerClassName="rounded-full cursor-pointer px-2"
        as="button"
        className="dark:bg-black bg-white font-audiowide text-black dark:text-white  hover:text-cyan-200 flex items-center space-x-2">
       
        <span>Begin the journey</span><ArrowRight className="h-5 w-5 m-0 p-0" />
        {/* <Icon className="h-5 w-5 text-white"/> */}
      </HoverBorderGradient  >
    </div>
  );
}
