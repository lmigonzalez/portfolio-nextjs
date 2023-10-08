import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import { testimonials } from "../data/Data";
const Testimonials = () => {
  return (
    <div className="py-16 px-4 w-[1400px] max-w-full m-auto">
      <div className="m-auto mb-12 w-[1400px] max-w-full">
        <div className="relative w-fit py-2 m-auto mb-4">
          <h3 className="">Testimonials</h3>
          <span
            className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
            style={{ width: "50%" }}
          ></span>
        </div>

        <h4 className="text-center mt-4 text-xl">
          Completed over 40 tasks on Fiverr with a stellar 5-star rating.
        </h4>

        <div className="flex justify-center items-center my-5 gap-2">
          <Image src={"/star.svg"} alt="" width={30} height={30} />
          <Image src={"/star.svg"} alt="" width={30} height={30} />
          <Image src={"/star.svg"} alt="" width={30} height={30} />
          <Image src={"/star.svg"} alt="" width={30} height={30} />
          <Image src={"/star.svg"} alt="" width={30} height={30} />
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((item, index) => {
          return (
            <TestimonialCard
              key={index}
              message={item.message}
              source={item.source}
              stars={item.stars}
              name={item.name}
              gender={item.gender}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
