"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./ui/marquee";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FullScreenScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const featureSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const container = containerRef.current;
      const text = textRef.current;
      const text1 = textRef1.current;
      const featureSection = featureSectionRef.current;

      // Video scroll animation
      gsap.to(video, {
        currentTime: video?.duration || 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=300%", // Reduced to make room for feature section
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.set([text, text1], { opacity: 1 });

      // Text animation on load
      gsap.fromTo(
        [text, text1],
        { opacity: 0, x: (index) => (index === 0 ? -800 : 800) },
        {
          opacity: 1,
          x: -350,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      // Text fade out on scroll
      gsap.to([text, text1], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      gsap.fromTo(
        featureSection,
        {
          opacity: 0,
          y: "100%",
        },
        {
          opacity: 1,
          // duration:2,
          ease: "expo.out",
          y: "0%",
          scrollTrigger: {
            trigger: container,
            start: 2000,
            scrub: 2,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
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
        className="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-white   from-neutral-800 via-white to-white">
          BOOST YOUR STAMINA <br /> WITH
        </h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="flex flex-row items-center space-x-4">
            <Image
              src="/watermelon.png"
              alt="JMP Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Image
              src="/mango.png"
              alt="UA AGRO SOLUTIONS Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Image
              src="/pine.png"
              alt="UA AGRO SOLUTIONS Logo"
              width={300}
              height={300}
            />
          </div>
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        {/* <div className="grid grid-cols-3 gap-8">
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
        </div> */}
      </div>
    </div>
  );
};

export default FullScreenScrollVideo;
