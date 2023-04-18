import React from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { useStateContext } from '@/context/StateContext';
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

import Layout from '@/components/layout/Layout';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Testimonials from '@/sections/Testimonials';
export default function Home() {
  const { theme } = useStateContext();

  return (
    <>
      <Head>
        <title>Luis Gonzalez | Home</title>

        <meta
          name="description"
          content="Welcome to my website, where you can learn more about my services, projects, and Blog."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <div
          className={`${roboto.className} relative transition-all ${
            theme === 'light' ? 'bg-white' : 'bg-[#282A3A] text-white'
          }`}
        >
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
}
