import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
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
    <Link href={"/articles/" + slug}>
      <div
        className={`shadow-xl hover:shadow-2xl cursor-pointer rounded-md   ${
          theme === "light" ? "bg-white" : "bg-black_color"
        }`}
      >
        <div className="relative p-4 space-y-4">
          <h2 className="text-lg font-light">{blogTitle}</h2>
          <div className="">
            <div className="flex space-x-2 text-xs text-black ">
              {tags?.map((item: any, index: number) => {
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
