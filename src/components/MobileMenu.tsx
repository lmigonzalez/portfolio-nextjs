import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const MobileMenu = () => {

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className=" bg-black_color backdrop-blur-md bg-opacity-20 absolute top-0 left-0 w-full h-screen z-40 flex justify-end md:hidden">

      <ul className="flex flex-col items-center justify-center text-xl font-light text-black bg-white h-full w-2/3 space-y-4">
      <li className= {`${currentRoute==='/'? 'text-orange_color': 'text-black'} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${currentRoute==='/services'? 'text-orange_color': 'text-black'} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/services">Services</Link>
        </li>
        <li className={`${currentRoute==='/projects'? 'text-orange_color': 'text-black'} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={`${currentRoute==='/about'? 'text-orange_color': 'text-black'} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${currentRoute.startsWith('/blog')? 'text-orange_color': 'text-black'} cursor-pointer hover:text-orange_color transition-colors`}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className="gradient-color text-white px-3 py-1 rounded-md cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
