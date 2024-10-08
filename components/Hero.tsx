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

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    const text1 = textRef1.current;

    // Video scroll animation
    gsap.to(video, {
      currentTime: video.duration || 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300%', // Adjust this for longer or shorter scrolling
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Text animation on load
    gsap.fromTo(text, 
      { opacity: 0, x: -800 },
      { opacity: 1, x: -350, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(text1, 
      { opacity: 0, x: 800 },
      { opacity: 1, x: -350, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
    );

    // Text fade out on scroll
    gsap.to(text, {
       opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'top top',
        end: '30% top',
        scrub: true,
         // Adjust this value based on when you want the text to start fading
      },
    });

    gsap.to(text1, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: text1,
        start: 'top top',
        end: '30% top', // Ensure both texts fade out at the same time
        scrub: true,
      },
    });
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
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold text-center"
      >
        SCROLL DOWN TO
      </h1>
      <h1 
        ref={textRef1} 
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-900 text-7xl font-bold text-center"
      >
        CRUSH THE MELON
      </h1>
    </div>
  );
};

export default FullScreenScrollVideo;
