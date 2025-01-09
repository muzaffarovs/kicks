const HeroSlider = () => {
  return (
    <div className="h-[382px] relative border mt-20 w-full bg-cover bg-no-repeat bg-center md:h-[795px] flex items-end justify-between bg-hero-main p-12 rounded-3xl">
      <div className="absolute -rotate-90 rounded-b-2xl top-32 md:top-44 -left-[62.5px] md:-left-[85px] bg-black text-white j-[30px] md:h-[67px] w-[157px] md:w-[237px] p-2 md:p-6">
        <p className="text-xs md:text-base font-semibold">
          Nike product of the year
        </p>
      </div>
      <div className="w-full md:w-[510px]">
        <h2 className="text-2xl  lg:text-[74px] font-semibold text-white">
          NIKE AIR MAX
        </h2>
        <h3 className="text-white font-semibold text-base lg:text-2xl font-sans mt-6">
          Nike introducing the new air max for everyone's comfort
        </h3>
        <button className="py-2 px-8 bg-[#4a69e2] rounded-lg text-white mt-6">
          Shop
        </button>
      </div>
      <div className="grid gap-4">
        <img
          className="w-16 h-16 lg:w-[160px] lg:h-[160px]"
          src="/hero2.png"
          alt=""
        />
        <img
          className="w-16 h-16 lg:w-[160px] lg:h-[160px]"
          src="/hero1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSlider;
