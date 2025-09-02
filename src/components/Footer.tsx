"use client"
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
  return(
        <footer className="relative z-50 bg-black text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center w-full gap-5">
          <img src="/logo.png" alt="logo" className="h-[80px]" />
          <div className="text-lg flex items-center justify-center gap-7 w-full text-white">
            <p className="font-medium">+44 7939 697888</p>
            <p className="font-medium">info@korreastudio.co.uk</p>
            
          <Link href="https://www.instagram.com/korreastudio?igsh=MW1kOTQza25vMW9ocw=="><FaInstagram size={20} /></Link>
         </div>
     <p className="font-medium">London, United Kingdom</p>
      <div className="w-full flex flex-wrap justify-center gap-6   text-xl">
        <Link href="/" className="text-white font-semibold  hover:text-green-400">Home</Link>
              <Link href="/about-us" className="text-white font-semibold hover:text-green-400">About us</Link>
     
              <Link href="/what-we" className="text-white font-semibold hover:text-green-400">What we do</Link>
              <Link href="/our-work" className="text-white font-semibold hover:text-green-400">Our work</Link>
              <Link href="/contact" className="text-white font-semibold hover:text-green-400">Contact</Link>
        <div className="flex items-center gap-4 ml-4 text-green-400">
          
        </div>
      </div>
    </footer>
  )
}
