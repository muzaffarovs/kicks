import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Shoe } from "./categories";

type PropType = {
  slides: Shoe[];
  options?: EmblaOptionsType;
};

const CategorySlider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla bg-[#eceef0] rounded-tl-[64px] overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((item, index) => (
            <div
              className={`embla__slide block px-12 pb-8 bg-[${item.bg}] `}
              key={index}
            >
              <div className="text-black lg:px-[105px]">
                <Image
                  className="ld:h-[600px] lg:w-[480px] object-cover "
                  src={item.url}
                  width={700}
                  height={600}
                  alt={item.title}
                />
              </div>
              <h3 className="text-xl md:text-4xl font-semibold max-w-[191px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
