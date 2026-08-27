'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/studio', label: 'Studio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="relative w-full z-50">
      <header className="relative bg-[url(/fondoB.jpg)] bg-cover bg-center text-white px-6 md:px-10 py-10 w-full flex justify-center items-center flex-col gap-3 min-h-[130px] md:min-h-[200px]">
        <Link href="/" className="flex flex-col items-center gap-3">
          <img src="/logo_w.png" alt="Logo" className="relative object-contain w-[80%] md:w-auto md:object-cover h-[50px] z-20 mx-auto" />
          <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-center">
            Set Design / Art Direction / Fabrication
          </p>
        </Link>

        <ul className="hidden gap-8 text-2xl font-medium tracking-wide">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="hover:text-red-500 transition-colors">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="fixed bottom-4 right-4 text-white">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl md:text-4xl hover:scale-110 p-3 bg-black rounded-full"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 text-3xl text-white z-90"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute bottom-4 text-4xl text-white hover:scale-110"
            >
              <FiX />
            </button>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
