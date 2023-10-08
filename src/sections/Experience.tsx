import PrimaryBtn from "@/components/PrimaryBtn";
import React from "react";

const Experience = () => {
  return (
    <div className="py-16  m-auto flex flex-col items-center w-[1400px] max-w-full px-4">
      <div className="m-auto mb-12 ">
        <div className="relative w-fit py-2 m-auto mb-4">
          <h3 className="">Experience</h3>
          <span
            className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
            style={{ width: "50%" }}
          ></span>
        </div>
        <p className="text-lg text-center">
          Years of experience honing my skills and delivering exceptional
          results - explore my work history and accomplishments here.
        </p>
      </div>

      <div className="flex items-center relative  w-full h-[450px] m-auto mb-16">
        <div className="w-1 h-[450px] bg-blue_color absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="border-blue_color border-[2px] w-12 h-12 bg-transparent rounded-full flex items-center justify-center absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="border-blue_color border-[2px] w-8 h-8 bg-transparent rounded-full flex items-center justify-center">
              <div className="relative bg-blue_color w-4 h-4  rounded-full"></div>
            </div>
          </div>

          <div className="border-blue_color border-[2px] w-12 h-12 bg-transparent rounded-full flex items-center justify-center absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="border-blue_color border-[2px] w-8 h-8 bg-transparent rounded-full flex items-center justify-center">
              <div className="relative bg-blue_color w-4 h-4  rounded-full"></div>
            </div>
          </div>

          <div className="border-blue_color border-[2px] w-12 h-12 bg-transparent rounded-full flex items-center justify-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="border-blue_color border-[2px] w-8 h-8 bg-transparent rounded-full flex items-center justify-center">
              <div className="relative bg-blue_color w-4 h-4  rounded-full"></div>
            </div>
          </div>

          <div className="border-blue_color border-[2px] w-12 h-12 bg-transparent rounded-full flex items-center justify-center absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="border-blue_color border-[2px] w-8 h-8 bg-transparent rounded-full flex items-center justify-center">
              <div className=" relative bg-blue_color w-4 h-4  rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between h-[337.5px] mt-auto">
          <div className="w-full h-20 pr-4">
            <div className="border-b-2 h-1/2 border-blue_color flex items-end">
              <p className="text-xl font-bold">Freelance Developer</p>
            </div>
            <p className="font-medium">Full Stack Web Developer</p>
            <p className="text-xs">Feb 2023 - Present</p>
          </div>
          <div className="w-full h-20 pr-4">
            <div className="border-b-2 h-1/2 border-blue_color flex items-end">
              <p className="text-xl font-bold">
                Ultimate Software Solutions, Inc.
              </p>
            </div>
            <p className="font-medium">Junior Web Developer</p>
            <p className="text-xs">Nov 2021 - Jan 2023</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-between h-[337.5px] mb-auto">
          <div className="w-full h-20 pl-4 text-end">
            <div className="border-b-2 h-1/2 border-blue_color flex items-end justify-end">
              <p className="text-xl font-bold">2M Mower & Tool LLC</p>
            </div>
            <p className="font-medium">Web Developer</p>
            <p className="text-xs">Jun 2023 - Present</p>
          </div>
          <div className="w-full h-20 pl-4 text-end mb-[5px]">
            <div className="border-b-2 h-1/2 border-blue_color flex items-end justify-end">
              <p className="text-xl font-bold">Orlando O Spencer I, Inc.</p>
            </div>
            <p className="font-medium">Full Stack Web Developer</p>
            <p className="text-xs">Jun 2022 - Jan 2023</p>
          </div>
        </div>
      </div>

      <PrimaryBtn text={"Learn more"} to={"/about"} />
    </div>
  );
};

export default Experience;
