"use client";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-[url(/fondoB.jpg)] bg-contain bg-top text-white py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center w-full gap-4 md:gap-5 overflow-hidden">
      
      <img
        src="/logo_w.png"
        alt="logo background"
        className="absolute z-10 opacity-10 w-full h-full object-contain z-10 pointer-events-none select-none"
      />

      <Link href="/" className="z-20">
        <img src="/logo_w.png" alt="logo" className="h-10 sm:h-12 md:h-14 lg:h-[50px]" />
      </Link>

      <div className="relative z-20 text-sm sm:text-base md:text-lg flex items-center justify-center w-full text-white opacity-70">
        <p className="font-medium">info@korreastudio.co.uk</p>
      </div>

      <a
        href="https://www.instagram.com/korreastudio?utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <FaInstagram size={20} className="sm:size-[22px] md:size-[24px]" />
      </a>

      <p className="relative z-20 font-medium opacity-70 text-sm sm:text-base">
        London, United Kingdom
      </p>

      <div className="relative z-20 w-full flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl">
        <Link href="/work" className="text-red-600 font-semibold hover:text-white transition-colors duration-200">
          Work
        </Link>
        <Link href="/studio" className="text-red-600 font-semibold hover:text-white transition-colors duration-200">
          Studio
        </Link>
        <Link href="/services" className="text-red-600 font-semibold hover:text-white transition-colors duration-200">
          Services
        </Link>
        <Link href="/contact" className="text-red-600 font-semibold hover:text-white transition-colors duration-200">
          Contact
        </Link>
      </div>
    </footer>
  );
}
