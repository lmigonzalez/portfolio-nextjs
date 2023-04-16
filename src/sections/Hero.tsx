import React from 'react';
import Image from 'next/image';

import PrimaryBtn from '@/components/PrimaryBtn';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-32 px-4 text-center w-[1400px] max-w-full m-auto">
      <h1 className="text-orange_color">Luis Gonzalez</h1>
      <h2 className="text-4xl">Full-Stack Web Developer</h2>
      <p>"Creating seamless user experiences through the power of code"</p>

      <Image
        src="/new-logo.svg"
        alt="luis gonzalez logo"
        width={225}
        height={225}
      />

      <PrimaryBtn text={"Let's talk"} to={'/contact'} />
    </div>
  );
};

export default Hero;
