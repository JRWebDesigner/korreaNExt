"use client"
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function Footer(){
  return(
        <footer className="relative z-50 bg-black text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center w-full gap-5">
          <img src="/logo_w.png" alt="logo" className="absolute opacity-10 bottom-6 w-[80%] z-10" />
          <Link href='/'>
            <img src="/logo_w.png" alt="logo" className="h-[50px]" />
          </Link>
          <div className="relative z-20 text-lg flex items-center justify-center gap-7 w-full text-white opacity-70">
            <p className="font-medium">+44 7939 697888</p>
            <p className="font-medium">info@korreastudio.co.uk</p>
            
          <Link href="https://www.instagram.com/korreastudio?igsh=MW1kOTQza25vMW9ocw=="><FaInstagram size={20} /></Link>
         </div>
     <p className="relative z-20 font-medium opacity-70">London, United Kingdom</p>
      <div className="relative z-20 w-full flex flex-wrap justify-center gap-6   text-xl">
        <Link href="/our-work" className="text-white font-semibold hover:text-green-400">Our work</Link>
        <Link href="/services" className="text-white font-semibold hover:text-green-400">Services</Link>
        <Link href="/about-us" className="text-white font-semibold hover:text-green-400">About us</Link>
        <Link href="/contact" className="text-white font-semibold hover:text-green-400">Contact</Link>
      <div className="flex items-center gap-4 ml-4 text-green-400">
      </div>
      </div>
    </footer>
  )
}
