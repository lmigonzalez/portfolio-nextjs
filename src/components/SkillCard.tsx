import React from 'react';
import Image from 'next/image';
import { useStateContext } from '@/context/StateContext';
interface MyProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<MyProps> = ({ imageUrl, title, description }) => {
  const { theme } = useStateContext();
  return (
    
      <div
        className={`text-black bg-blue_color   px-4 py-8 rounded-md flex flex-col justify-center items-center text-center space-y-3`}
      >
        <Image src={imageUrl} alt="skill image" width={40} height={40} />
        <strong>{title}</strong>
        <p className="leading-7">{description}</p>
      </div>

  );
};

export default SkillCard;
