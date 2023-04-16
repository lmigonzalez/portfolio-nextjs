import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface projectCardProps {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
  tech: string[];
  code: string;
  website: string;
  underConstruction: boolean;
}

const ProjectCard: React.FC<projectCardProps> = ({
  imageUrl,
  projectName,
  projectDescription,
  tech,
  code,
  website,
  underConstruction,
}) => {
  return (
    <div className="bg-black_color text-white flex flex-col lg:flex-row w-full border-[2px] border-[black] rounded-b-xl lg:rounded-r-xl lg:rounded-l-none shadow-lg transition-all hover:shadow-2xl">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={` bg-cover bg-top bg-no-repeat h-[400px] w-full lg:w-6/12  transition-all ease-linear duration-[5s] hover:bg-bottom cursor-pointer`}
      >
        {underConstruction && (
          <div className="bg-white bg-opacity-90 flex justify-between items-center px-4">
            <Image
              src="/under-construction-1--unscreen.gif"
              alt="under construction gif"
              width={50}
              height={50}
              className=""
            />
            <p className="text-orange_color text-2xl font-bold">
              Under Construction
            </p>
          </div>
        )}
      </div>

      <div className=" flex flex-col w-full lg:w-8/12 max-h-full p-4 gap-4 ">
        <h4 className="text-2xl">{projectName}</h4>
        <p className="mb-8 lg:mb-4">{projectDescription}</p>
        <div className=" mt-auto">
          <div className="flex space-x-2 text-xs text-black mb-4">
            {tech.map((item, index) => {
              return (
                <p className="px-2 py-1 rounded-full bg-blue_color" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="space-x-4 flex justify-end ">
            <Link
              className="border-2 text-orange_color border-orange_color px-6 py-2 text-xl rounded-md"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Link>

            <Link
              className="border-2 border-orange_color bg-orange_color text-white px-6 py-2 text-xl rounded-md"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
