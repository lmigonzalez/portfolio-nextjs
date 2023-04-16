import React from 'react';
import Image from 'next/image';

import { useStateContext } from '@/context/StateContext';

const AmbientMode = () => {
	const {theme, changeTheme} = useStateContext()

  return (
    <button onClick={changeTheme} className="fixed z-30 bottom-10 right-6">
      {theme === 'light' ? (
        <div className='bg-[#2D2D2D] shadow-2xl p-3 rounded-md'>
          <Image
            src="/light.png"
            alt="Luis Gonzalez Logo"
            width={40}
            height={40}
          />
        </div>
      ) : (
        <div className='bg-white shadow-lg p-3 rounded-md'>
          <Image
            src="/dark.png"
            alt="Luis Gonzalez Logo"
            width={40}
            height={40}
          />
        </div>
      )}
    </button>
  );
};

export default AmbientMode;
