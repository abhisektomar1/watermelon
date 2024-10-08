/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef<any>(null);
  useGSAP(() => {
    const tl = gsap.timeline();

   

    tl.set(logoRef,{
      opacity:1
    }).fromTo(
      logoRef.current,
      { y: -50, opacity: 0,delay:1 },
      { y: 0, opacity: 1, duration: 1 }
    );

    tl.fromTo(
      linksRef.current.children,
      { y: -20, opacity: 0,delay:1 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
      "-=0.5"
    );
  });

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 "
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <span ref={logoRef} className="text-2xl font-bold text-white opacity-0">
            WATERMELON
          </span>
        </div>
        <div ref={linksRef} className="hidden md:flex space-x-6 items-center ">
          <Link
            className="text-white hover:text-gray-300 transition-colors"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-white hover:text-gray-300 transition-colors"
            href="/about"
          >
            ABOUT US
          </Link>
          <Link
            className="text-white hover:text-gray-300 transition-colors"
            href="/why-us"
          >
            WHY US?
          </Link>
          <Link
            className="text-white hover:text-gray-300 transition-colors"
            href="/products"
          >
            PRODUCTS
          </Link>
          <Button
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100"
          >
            CONTACT US
          </Button>
        </div>
        <button className="md:hidden text-white">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
