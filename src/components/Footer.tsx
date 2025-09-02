"use client"
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
  return(
        <footer className="relative z-50 bg-black text-white py-10 px-6 md:px-20 flex flex-col items-center justify-center">
          <Image src="/logo.png" alt=" logo" width={140} height={140} />
          <div className="text-sm">
            <p className="text-green-400 font-medium">+44 7939 697888</p>
            <p className="text-green-400 font-medium">info@korreastudio.co.uk</p>
          </div>
        <div className="text-sm text-right">
          <p>London, United Kingdom</p>
        </div>

      <div className="flex flex-wrap justify-center gap-6 border-t border-gray-700 pt-6">
        <Link href="/" className="text-white font-semibold text-sm hover:text-green-400">Home</Link>
              <Link href="/about-us" className="text-white font-semibold text-sm hover:text-green-400">About us</Link>
     
              <Link href="/what-we" className="text-white font-semibold text-sm hover:text-green-400">What we do</Link>
              <Link href="/our-work" className="text-white font-semibold text-sm hover:text-green-400">Our work</Link>
              <Link href="/contact" className="text-white font-semibold text-sm hover:text-green-400">Contact</Link>
        <div className="flex items-center gap-4 ml-4 text-green-400">
          <Link href="https://www.instagram.com/korreastudio?igsh=MW1kOTQza25vMW9ocw=="><FaInstagram size={20} /></Link>
        </div>
      </div>
    </footer>
  )
}
