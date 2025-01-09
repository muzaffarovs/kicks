import Categories from "@/components/home/categories";
import Hero from "@/components/home/hero";
import News from "@/components/home/news";
import Reviews from "@/components/home/reviews";
import React from "react";

const page = () => {
  return (
    <main className="h-full w-full">
      <div className="px-4 md:px-[60px]">
        <Hero />
        <News />
      </div>
      <Categories />
      <div className="px-4 md:px-[60px]">
        <Reviews />
      </div>
    </main>
  );
};

export default page;
