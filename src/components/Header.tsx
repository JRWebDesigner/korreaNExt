'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/our-work', label: 'Our work' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="relative w-full z-50 bg-[url(/fondoB.jpg)] bg-cover bg-center text-white">
      {/* Contenedor interno con padding y altura responsiva */}
      <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-8 min-h-[80px] md:min-h-[140px]">
        
        {/* Logo centrado en móvil, a la izquierda en desktop (opcional) */}
        <Link href="/" className="z-20 mx-auto md:mx-0">
          <img
            src="/logo_w.png"
            alt="Korrea Studio"
            className="h-12 sm:h-14 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Menú de escritorio (visible a partir de md) */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-lg lg:text-2xl font-medium tracking-wide z-20">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (solo visible en móvil) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden z-20 text-3xl sm:text-4xl p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all"
          aria-label="Abrir menú"
        >
          <FiMenu />
        </button>
      </div>

      {/* Overlay del menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-2xl sm:text-3xl text-white z-50"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl sm:text-5xl hover:scale-110 transition-transform"
              aria-label="Cerrar menú"
            >
              <FiX />
            </button>

            {/* Enlaces */}
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition-colors duration-200 border-b border-transparent hover:border-green-400 pb-1"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
