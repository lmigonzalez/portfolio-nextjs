import React, { ReactNode } from 'react';
const roboto = Roboto({weight: ['100','300','400','500','700','900'], subsets: ['latin'] });
import { useStateContext } from '../../context/StateContext';
import { Roboto } from 'next/font/google';
import Navbar from './Navbar';
import AmbientMode from '../AmbientMode';
import Footer from './Footer';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useStateContext();
  return (
    <div
      className={`${roboto.className} flex flex-col h-full ${
        theme === 'light' ? 'bg-white' : 'bg-[#282A3A] text-white'
      }`}
    >
      <Navbar />
      <main className="relative">
        {children}
        <AmbientMode />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
