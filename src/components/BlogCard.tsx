import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
// interface BlogCardProps {
//   imageUrl: string;
//   blogTitle: string;
//   tags: string[];
// }

interface BlogCardProps {
  imageUrl: any;
  blogTitle: any;
  tags: any;
  slug: any;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  blogTitle,
  tags,
  slug,
}) => {
  const { theme } = useStateContext();
  return (
    <Link href={'/articles/' + slug}>
      <div
        className={`shadow-xl hover:shadow-2xl cursor-pointer max-w-[400px] h-[400px] rounded-md   ${
          theme === 'light' ? 'bg-white' : 'bg-black_color'
        }`}
      >
        <div className="w-full h-[250px]">
          <Image
            src={'https:' + imageUrl}
            alt=""
            width={400}
            height={450}
            className="rounded-t-md"
          />
        </div>
        <div className="relative px-4 py-8 space-y-4 h-[150px]">
          <h2 className="text-xl font-semibold">{blogTitle}</h2>
          <div className='absolute bottom-2'>
            <div className="flex space-x-2 text-xs text-black ">
              {tags?.map((item:any, index:number) => {
                return (
                  <p
                    key={index}
                    className="px-2 py-1 rounded-full bg-blue_color"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
