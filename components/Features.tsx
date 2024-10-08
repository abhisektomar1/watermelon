"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Features() {

    const fref = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                // trigger:fref.current,
                start:"top top",
                end:"bottom bottom",
                scrub:true,
            }
        })
        tl.fromTo("body",{
                backgroundColor:"#FDE047"
        },{
            ackgroundColor:"#D9F99D",
            overwrite:"auto"
        })
    })
  return (
    <div ref={fref} className='h-screen'>Features</div>
  )
}

export default Features