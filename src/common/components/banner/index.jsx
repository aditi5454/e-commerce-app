import React from "react";
import LadySketch from "../../assets/images/banner-image.jpg";

const Banner = () => {
  return (
    <div className="h-full w-2/5 bg-[#a9dcd9] flex flex-col items-center">
      <img src={LadySketch} alt="sketch of a woman" className="mt-20"></img>
      <h1 className="my-14 tracking-[8px] text-black font-extrabold text-4xl">
        SKY COLLECTIONS
      </h1>
    </div>
  );
};

export default Banner;
