"use client";
import React, { useState } from "react";
import CategorySlider from "./category-slider";
import { EmblaOptionsType } from "embla-carousel";
import "@/css/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 16;

export interface Shoe {
  title: string;
  url: string;
  bg: string;
}

const SLIDES: Shoe[] = [
  {
    title: "Lifestyle Shoes",
    url: "/category-shoe1.png",
    bg: "#eceef0",
  },
  {
    title: "Basketball Shoes",
    url: "/category-shoe2.png",
    bg: "#f6f6f6",
  },
  {
    title: "Lifestyle Shoes",
    url: "/category-shoe1.png",
    bg: "#eceef0",
  },
  {
    title: "Basketball Shoes",
    url: "/category-shoe2.png",
    bg: "#f6f6f6",
  },
  {
    title: "Lifestyle Shoes",
    url: "/category-shoe1.png",
    bg: "#eceef0",
  },
  {
    title: "Basketball Shoes",
    url: "/category-shoe2.png",
    bg: "#f6f6f6",
  },
  {
    title: "Lifestyle Shoes",
    url: "/category-shoe1.png",
    bg: "#eceef0",
  },
];

const Categories = () => {
  const [side, setSide] = useState<boolean>(true);
  return (
    <div className="mt-[128px] bg-[#232321] pl-4 md:pl-[60px] pt-[90px] h-full">
      <div className="flex justify-between mb-[64px] items-end pr-4 md:pr-[60px]">
        <h2 className="text-xl md:text-2xl lg:text-7xl font-semibold text-wrap w-[172px] lg:w-[589px] text-white">
          CATEGORIES
        </h2>
      </div>

      <div className="h-full">
        <CategorySlider slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Categories;
