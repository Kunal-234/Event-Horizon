"use client";
import React, { useState } from "react";
import {  Menu, X } from "lucide-react";
import logo from '@/components/images/Logo.jpg'
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="px-8 pt-2 relative z-50 font-audiowide">
        <div className="flex justify-between items-center">
          <div  className="text-white h-18 w-18 ">
           <Image src={logo} alt="Logo" width={72} height={72} />
          </div>
          <div className="hidden md:flex space-x-4 bg-white backdrop-blur-3xl  px-10 rounded-full">
         
            <a href="" className="text-black relative inline-block group px-4 ps-6 pt-2 rounded">
              Home
              <span className="absolute left-0 bottom-[3px] h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="" className="text-black relative inline-block group px-4 pt-2 rounded">
              About
              <span className="absolute left-0 bottom-[3px] h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="" className="text-black relative inline-block group px-4 pt-2 rounded">
              Service
              <span className="absolute left-0 bottom-[3px] h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="" className="text-black relative inline-block group px-4 pe-6 py-2 rounded">
              contact
              <span className="absolute left-0 bottom-[3px] h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="hidden md:block">
            <a href="" className="text-black bg-white px-6 py-2  rounded-full">
              Login
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={handleToggle} className="text-white ">
              <div
                className={`transform transition-transform duration-500 ${
                  isMobileMenuOpen ? "rotate-[360deg]" : "rotate-[180deg]"
                }`}
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile view */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed top-[72px] right-4 bg-white w-64 py-4 rounded-md shadow-lg z-50`}
      >
        <div className="flex flex-col items-center font-audiowide text-center text-white space-y-4 px-4 py-2">
          <a href="" className="text-black px-4 py-2 rounded w-full">
            Home
          </a>
          <a href="" className="text-black px-4 py-2 rounded w-full">
            Services
          </a>
          <a href="" className="text-black px-4 py-2 rounded w-full">
            About{" "}
          </a>
          <a href="" className="text-black px-4 py-2 rounded w-full">
            Contact
          </a>
          <a href="" className="w-full bg-black text-white px-4 py-2 rounded">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
