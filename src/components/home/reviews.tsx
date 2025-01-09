import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Comment {
  thumbUrl: string;
  profileUrl: string;
}

const comments: Comment[] = [
  {
    thumbUrl: "/review-thumb1.png",
    profileUrl: "/review-profile1.png",
  },
  {
    thumbUrl: "/review-thumb2.png",
    profileUrl: "/review-profile2.png",
  },
  {
    thumbUrl: "/review-thumb3.png",
    profileUrl: "/review-profile3.png",
  },
];

const Reviews = () => {
  return (
    <div className="my-[128px]">
      <div className="flex justify-between items-end text-left">
        <h2 className="text-2xl lg:text-7xl font-semibold text-wrap w-[172px] lg:w-[589px] uppercase">
          Reviews
        </h2>
        <button className="py-2 px-8 h-fit bg-[#4a69e2] rounded-lg text-white mt-6">
          Show more
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {comments.map((com, index) => (
          <li
            key={index}
            className={`rounded-[32px] bg-white w-fit p-0 mx-auto ${
              index == 2 && "hidden lg:block"
            } ${index == 1 && "hidden md:block"}`}
          >
            <div className="p-8 flex justify-between items-start">
              <div className="grid">
                <h4 className="text-lg md:text-2xl font-semibold">
                  Good Quality
                </h4>
                <p className="text-sm md:text-[16px] text-[#232321] font-normal lg:w-[90%]">
                  I highly recommend shopping from kicks
                </p>
                <div className="flex mt-3 gap-2 items-center">
                  <Star className=" text-yellow-400 w-[10px] h-[10px] md:w-4 md:h-4 fill-yellow-400" />
                  <Star className=" text-yellow-400 w-[10px] h-[10px] md:w-4 md:h-4 fill-yellow-400" />
                  <Star className=" text-yellow-400 w-[10px] h-[10px] md:w-4 md:h-4 fill-yellow-400" />
                  <Star className=" text-yellow-400 w-[10px] h-[10px] md:w-4 md:h-4 fill-yellow-400" />
                  <Star className=" text-yellow-400 w-[10px] h-[10px] md:w-4 md:h-4 fill-yellow-400" />
                  <p className="text-sm">5.0</p>
                </div>
              </div>
              <Image
                className="w-12 h-12 md:w-16 md:h-16"
                src={com.profileUrl}
                width={500}
                height={500}
                alt="profile"
              />
            </div>
            <Image
              className="rounded-b-[32px]"
              src={com.thumbUrl}
              width={500}
              height={500}
              alt="thumbmnail"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
