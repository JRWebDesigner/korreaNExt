'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About us' },
    { href: '/what-we', label: 'What we do' },
    { href: '/our-work', label: 'Our work' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="absolute w-full z-50">
      <header
        className={`${
          scrolled ? 'bg-black/60 shadow-md' : 'bg-transparent'
        } text-white px-6 md:px-10 py-4 w-full flex justify-between items-center transition-all duration-500 ease-in-out flex-col gap-6 mt-10`}
      >
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-16" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className="hidden md:flex gap-8 text-2xl font-medium tracking-wide">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="hover:text-green-400 transition-colors">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <AnimatePresence>
  {menuOpen && (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 text-3xl text-white z-50"
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-4xl text-white"
      >
        <FiX />
      </button>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
          className="hover:text-green-400 transition-colors"
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
