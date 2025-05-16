// components/Header.js
'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50">
      <header
        className={`${
          scrolled ? 'bg-gray-900/30 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        } text-white px-4 md:px-10 py-4 w-full flex flex-col md:flex-row justify-between items-center m-auto rounded-none duration-500 transition-all ease-in-out`}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className='h-16'/>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex md:w-1/2 w-full mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row justify-around items-center text-3xl md:text-xl font-semibold w-full">
            <li className="transition-colors duration-100 hover:text-green-400">
              <Link href="/">Home</Link>
            </li>
            <li className="transition-colors duration-100 hover:text-green-400">
              <Link href="/about-us">About us</Link>
            </li>
            <li className="transition-colors duration-100 hover:text-green-400">
              <Link href="/what-we">What we do</Link>
            </li>
            <li className="transition-colors duration-100 hover:text-green-400">
              <Link href="/our-work">Our work</Link>
            </li>
            <li className="transition-colors duration-100 hover:text-green-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

