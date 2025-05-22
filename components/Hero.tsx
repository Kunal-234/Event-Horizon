import React from 'react'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo';
import { SpotlightPreview } from '../components/SpotlightPreview'
import { ColourfulText } from '@/components/ui/colourful-text';
import { AnimatedPinDemo } from '@/components/AnimatedPinDemo';
import Spline from '@splinetool/react-spline/next';
import { Button } from '@/components/Button'
import { TracingBeam } from '@/components/ui/tracing-beam';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div>
         <div className=' flex bg-black w-screen h-screen flex-col-reverse i md:flex-row justify-end md:justify-between absolute top-0  '>
          {/* <div className="spline-wrapper  left bg-black text-white w-450 h-screen"  style={{transform:"scale(0.5)",transformOrigin:'top left'}}>
        <Spline
        scene="https://prod.spline.design/EJiZp4knJLFJsMG5/scene.splinecode" 
      />

        </div> */}
          <div>

            <div className='text-white ms-5 md:ms-24 md:mt-34 m-2 '>
              {/* <Spline
        scene="https://prod.spline.design/HX8nsmUiqZZjoeIc/scene.splinecode" 
        /> */}
              <h2 className=" md:text-9xl text-5xl font-audiowide ">Event Horizon</h2>
              <h3 className='md:text-4xl text-2xl font-audiowide mt-6 text-gray-200'>Once you cross it, there's no going back</h3>
              <div className='ms-1 mt-6 text-gray-200  '>
                <Button   />
              </div>
            </div>
          </div>

          <div className="spline-wrapper pt-10 md:h-screen md:left md:float-end md:w-screen w-[100%] h-[55%] relative">
            <Spline
              scene="https://prod.spline.design/l9-boHmFvCUHZdCW/scene.splinecode"
            />
            <div className="absolute bottom-0 right-0 w-37 h-14 bg-black"></div>
          </div>
        </div>
       
      
    </div>
  )
}
