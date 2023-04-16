import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStateContext } from '@/context/StateContext';
const Footer = () => {
  const { theme } = useStateContext();



  return (
    <footer
      className={`${
        theme === 'light' ? 'text-black' : 'bg-black_color text-white'
      } mt-auto  px-4 py-10 text-center`}
    >
      <div className="m-auto flex justify-center gap-4 mb-8">
        <Link
          href="mailto:luisdev@luisgonzalezdev.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="mail.svg" alt="" width={40} height={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lmigonzalezs/"
          target="_blank"
          rel="noopener"
        >
          <Image src="linkedin.svg" alt="" width={40} height={40} />
        </Link>
        <Link
          href="https://github.com/lmigonzalez"
          target="_blank"
          rel="noopener"
        >
          <Image src="github.svg" alt="" width={40} height={30} />
        </Link>

      </div>
      <p>
        ©2023 Luis Gonzalez - All rights reserved | <Link href="">Terms</Link> |{' '}
        <Link href="">Privacy</Link>{' '}
      </p>
    </footer>
  );
};

export default Footer;
