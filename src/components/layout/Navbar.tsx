import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStateContext } from '../../context/StateContext';

import MobileMenu from '../MobileMenu';
const Navbar: React.FC = () => {
  const { theme } = useStateContext();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav
      className={`w-full flex items-center justify-between px-4 py-2 relative${
        theme === 'light' ? 'bg-white text-black' : 'bg-[#282A3A] text-white'
      }`}
    >
      <Link href="/">
        <Image
          src="/new-logo.svg"
          alt="Luis Gonzalez Logo"
          width={50}
          height={50}
        />
      </Link>

      <ul className="hidden md:flex items-center text-xl space-x-6 font-light">
        <li className= {`${currentRoute==='/'? 'text-orange_color': ''} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${currentRoute==='/services'? 'text-orange_color': ''} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/services">Services</Link>
        </li>
        <li className={`${currentRoute==='/projects'? 'text-orange_color': ''} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={`${currentRoute==='/about'? 'text-orange_color': ''} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${currentRoute.startsWith('/blog')? 'text-orange_color': ''} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className="gradient-color text-white px-3 py-1 rounded-md cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`block md:hidden w-12 h-12 bg-orange_color rounded-full relative z-50`}
      >
        <div
          className={`transition-all duration-200 w-6 h-[3px] bg-white rounded-full absolute  ${
            showMenu
              ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45'
              : 'top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3'
          }`}
        ></div>

        <div
          className={`transition-all duration-200 w-8 h-[3px] bg-white rounded-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            showMenu ? 'hidden' : 'absolute'
          }`}
        ></div>

        <div
          className={`transition-all duration-200 w-6 h-[3px] bg-white rounded-full absolute  ${
            showMenu
              ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45'
              : 'top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3'
          }`}
        ></div>
      </button>
      {showMenu && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
