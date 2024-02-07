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

const BlogCard: React.FC<BlogCardProps> = ({ blogTitle, tags, slug }) => {
  const { theme } = useStateContext();
  return (
    <Link href={"/articles/" + slug}>
      <div
        className={`shadow-xl hover:shadow-2xl cursor-pointer rounded-md min-h-[120px] flex border-2 ${
          theme === "light" ? "bg-white border" : "bg-gray-600 border-black "
        } relative`} // Added relative positioning to the parent container
      >
        <div className="p-4 flex flex-1 flex-col h-full absolute top-0 left-0 w-full">
          {" "}
          {/* Added absolute positioning */}
          <h2 className="text-lg font-light">{blogTitle}</h2>
          <div className="mt-auto">
            <div className="flex space-x-2 text-xs text-black">
              {tags?.map((item: any, index: number) => {
                return (
                  <p
                    key={index}
                    className="px-2 py-1 rounded-full bg-slate-700 text-white"
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
