import Spline from '@splinetool/react-spline'
import React from 'react'
import { TracingBeam } from './ui/tracing-beam'

export default function Page2() {
  return (
    <div>

         <div className="page2 bg-amber-900  ">
   
          <Spline 
            scene="https://prod.spline.design/yzEL8Z05zq8ojWQ3/scene.splinecode"
            />
          <div className="absolute bottom-0 right-10 z-20 w-40 h-18 bg-white"></div>
        </div>
      
    </div>
  )
}
