import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryBtn from '@/components/PrimaryBtn';

import { projects } from '@/data/Projects';
import ProjectCard from '@/components/ProjectCard';

interface ImagesObj {
  id: number;
  url: string;
  alt: string;
}

const Projects: React.FC = () => {
  const reducedProjects = projects.slice(0, 3);

  console.log(reducedProjects)

  return (
    <div className="py-16 flex flex-col items-center justify-center w-[1400px] max-w-full px-4 m-auto">
      <div className="m-auto mb-12 ">
        <div className="relative w-fit py-2 m-auto mb-4">
          <h3 className="">Projects</h3>
          <span
            className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
            style={{ width: '50%' }}
          ></span>
        </div>
        <p className="text-lg text-center">
          Check out some of my latest projects that showcase my creativity,
          problem-solving skills, and attention to detail.
        </p>
      </div>

      <div className="m-auto space-y-8 mb-16">
        {reducedProjects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              imageUrl={item.imageUrl}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              tech={item.tech}
              code={item.code}
              website={item.website}
              underConstruction={item.underConstruction}
            />
          );
        })}
      </div>

      <PrimaryBtn text={'More projects'} to={'/projects'} />
    </div>
  );
};

export default Projects;
