"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FullScreenScrollVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const featureSectionRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    const text1 = textRef1.current;
    const featureSection = featureSectionRef.current;

    // Video scroll animation
    gsap.to(video, {
      currentTime: video.duration || 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300%', // Reduced to make room for feature section
        scrub:true,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.set([text, text1], { opacity: 1 });

    // Text animation on load
    gsap.fromTo([text, text1], 
      { opacity: 0, x: (index) => index === 0 ? -800 : 800 },
      { opacity: 1, x: -350, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
    );

    // Text fade out on scroll
    gsap.to([text, text1], {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'top top',
        end: '30% top',
        scrub: true,
      },
    });

    gsap.fromTo(featureSection,{
        opacity: 0,
        y:'100%'
    },{
        opacity: 1,
        // duration:2,
        ease: "expo.out",
         y: '0%',
        scrollTrigger:{
            markers:true, 
            trigger:container,
            start:2000,
             scrub:2,
        }
    })


  }, { scope: containerRef });


  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/watermelon.mp4"
        muted
        playsInline
      />
      <h1 
        ref={textRef} 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold text-center opacity-0"
      >
        SCROLL DOWN TO
      </h1>
      <h1 
        ref={textRef1} 
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-900 text-7xl font-bold text-center opacity-0"
      >
        CRUSH THE MELON
      </h1>
      <div 
        ref={featureSectionRef} 
        className="absolute top-0 left-0 w-full h-full bg-transparent opacity-40 flex flex-col justify-center items-center"
      >
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenScrollVideo;