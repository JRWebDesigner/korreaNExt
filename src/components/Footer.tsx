"use client";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-[url(/fondoB.jpg)] text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center w-full gap-5">
      {/* Imagen de fondo centrada (horizontal y opcionalmente vertical) */}
      <img
        src="/logo_w.png"
        alt="logo background"
        className="absolute opacity-10 w-[80%] z-10 left-1/2 -translate-x-1/2 bottom-6"
        /* Si también quieres centrado vertical: reemplaza bottom-6 por top-1/2 -translate-y-1/2 */
      />

      {/* Logo principal */}
      <Link href="/">
        <img src="/logo_w.png" alt="logo" className="h-[50px]" />
      </Link>

      {/* Correo electrónico */}
      <div className="relative z-20 text-lg flex items-center justify-center w-full text-white opacity-70">
        <p className="font-medium">info@korreastudio.co.uk</p>
      </div>

      {/* Instagram */}
      <a href="https://www.instagram.com/korreastudio?utm_source=qr" target="_blank" className="z-20 cursor-pointer">
        <FaInstagram size={20} />
      </a>

      {/* Ubicación */}
      <p className="relative z-20 font-medium opacity-70">London, United Kingdom</p>

      {/* Enlaces de navegación */}
      <div className="relative z-20 w-full flex flex-wrap justify-center gap-6 mt-10 text-xl">
        <Link href="/our-work" className="text-red-600 font-semibold hover:text-white">
          Work
        </Link>
        <Link href="/about-us" className="text-red-600 font-semibold hover:text-white">
          Studio
        </Link>
        <Link href="/services" className="text-red-600 font-semibold hover:text-white">
          Services
        </Link>
        <Link href="/contact" className="text-red-600 font-semibold hover:text-white">
          Contact
        </Link>
      </div>
    </footer>
  );
}
