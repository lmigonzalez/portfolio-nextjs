import React from 'react';
import Image from 'next/image';
import { useStateContext } from '../context/StateContext';
interface BlogCardProps {
  imageUrl: string;
  blogTitle: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, blogTitle, tags }) => {
  const { theme } = useStateContext();
  return (
    <div
      className={`shadow-xl hover:shadow-2xl cursor-pointer max-w-[400px] rounded-md   ${
        theme === 'light' ? 'bg-white' : 'bg-black_color'
      }`}
    >
      <div className="w-full">
        <Image
          src={imageUrl}
          alt=""
          width={400}
          height={450}
          className="rounded-t-md"
        />
      </div>
      <div className="px-4 py-8 space-y-4">
        <h2 className="text-2xl font-semibold">{blogTitle}</h2>
        <div className="flex space-x-2 text-xs text-black">
          {tags.map((item, index) => {
            return (
              <p key={index} className="px-2 py-1 rounded-full bg-blue_color">{item}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
