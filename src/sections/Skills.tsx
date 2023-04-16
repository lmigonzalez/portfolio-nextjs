import React from 'react';

import { skills } from '../data/Data';

import SkillCard from '@/components/SkillCard';

const Skills: React.FC = () => {
  return (
    <div className="py-16 px-4 w-[1400px] max-w-full m-auto">
      <div className="m-auto mb-12">
        <div className="relative w-fit py-2 m-auto mb-4">
          <h3 className="">Skills</h3>
          <span
            className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
            style={{ width: '50%' }}
          ></span>
        </div>
        <p className="text-lg text-center">
          Your all-in-one web solution: versatile full-stack developer with a
          wide range of skills!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              imageUrl={skill.imageUrl}
              title={skill.title}
              description={skill.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
