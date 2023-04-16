import React from 'react';
import Image from 'next/image';
import {useStateContext} from '../context/StateContext'
interface TestimonialCardProps {
  message: string;
  source: string;
  stars: number;
  name: string;
  gender: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  message,
  source,
  stars,
  name,
  gender,
}) => {
  const {theme} = useStateContext()
  const starsComponent = calculateStars();

  function calculateStars() {
    const starsContainer = [];

    for (let i = 0; i < stars; i++) {
      starsContainer.push(
        <Image src="/star.svg" alt="star image" width={20} height={20} />
      );
    }

    return starsContainer;
  }

  return (
    <div className= {`relative px-4 pt-4 pb-16 shadow-lg border-[1px] ${theme === 'light' ? 'bg-white border-black_color': 'bg-black_color border-white'}  rounded-md h-52`}>
      <div>
        <div className="flex mb-3">
          {starsComponent.map((item, index) => {
            return( <div key={index}> {item} </div> )
          })}
        </div>

        <p>{message}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center mt-4 p-2 text-white">
        <div className="flex gap-2">
          <div>
            <Image
              src={gender === 'man' ? '/man.png' : '/women.png'}
              alt="user avatar"
              width={25}
              height={25}
            />
          </div>

          <p className="">{name}</p>
        </div>
        <div>
          <p className="font-semibold bg-blue_color px-2 py-1 rounded-md text-black">
            {source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
