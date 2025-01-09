import React from "react";
import HeroSlider from "./hero-slider";

const Hero = () => {
  return (
    <section>
      <div className="mt-20">
        <img className="w-full" src="/herotext.png" alt="" />
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
