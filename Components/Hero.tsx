import React from 'react';
import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline';
// import { Button } from '@/components/Button';


export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-end md:justify-between h-full">
        <div className="z-10">
          <div className="text-white ms-5 md:ms-24 md:mt-20 m-2">
            <h1 className="md:text-9xl text-5xl font-audiowide">
              Event Horizon
            </h1>
            <h2 className="md:text-4xl text-2xl font-audiowide mt-6 text-gray-200">
              Once you cross it, there is no going back
            </h2>
            <div className="ms-1 mt-6 text-gray-200">
              {/* <Button /> */}
            </div>
          </div>
        </div>

        <div className="spline-wrapper pt-0 md:h-screen md:left md:float-end md:w-full w-full h-[55%] relative">
          <Spline
            scene="https://prod.spline.design/l9-boHmFvCUHZdCW/scene.splinecode"
          />
          <div className="absolute bottom-0 right-0 w-37 h-14 bg-black"></div>
        </div>
      </div>
    </div>
  );
}
