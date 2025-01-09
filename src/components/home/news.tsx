import Image from "next/image";
import { title } from "process";
import React from "react";

export interface Shoe {
  title: string;
  url: string;
}

const shoes: Shoe[] = [
  {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    url: "/new-shoe1.png",
  },
  {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    url: "/new-shoe2.png",
  },
  {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    url: "/new-shoe3.png",
  },
  {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    url: "/new-shoe4.png",
  },
];

const News = () => {
  return (
    <div className="mt-[90px]">
      <div className="flex justify-between items-end text-left">
        <h2 className="text-xl md:text-2xl lg:text-7xl font-semibold text-wrap w-[172px] lg:w-[589px]">
          Don’t miss out new drops
        </h2>
        <button className="py-2 px-8 h-fit bg-[#4a69e2] rounded-lg text-white mt-6">
          Explore
        </button>
      </div>
      <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {shoes.map((shoe, index) => (
          <li key={index} className="p-0 w-full">
            <div className="rounded-[28px] p-2 bg-white w-full">
              <Image
                className="w-full h-full"
                src={shoe.url}
                width={200}
                height={200}
                alt={shoe.title}
              />
            </div>
            <h3 className="text-wrap my-4 w-full text-left font-semibold text-lg md:text-2xl">
              {shoe.title}
            </h3>
            <button className="py-2 px-8 h-fit bg-[#4a69e2] rounded-lg text-white mt-6 w-full">
              purchase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
