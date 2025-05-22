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
        className="dark:bg-black bg-white text-black dark:text-white  hover:text-cyan-200 flex items-center space-x-2">
        {/* <AceternityLogo /> */}
        <span>Begin the journey</span><ArrowRight className="h-5 w-5 m-0 p-0" />
        {/* <Icon className="h-5 w-5 text-white"/> */}
      </HoverBorderGradient  >
    </div>
  );
}

// const AceternityLogo = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-black dark:text-white">
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round" />
//     </svg>
//   );
// };
