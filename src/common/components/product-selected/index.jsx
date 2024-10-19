import React from "react";
import Heels from "./../../assets/images/heels-discount-poster.jpg";

const ProductSelected = () => {
  return (
    <div className="flex items-start justify-start w-full">
      <div className="h-30 w-30 border-2 border-gray-300 p-2 rounded">
        <img src={Heels} alt="top" className="h-24 w-24"></img>
      </div>
      <div className="w-56 text-left px-3">
        <div className="font-bold text-md text-[#0cc7bb]">
          Bugatti Black Leather Stiletto Heels
        </div>
        <div className="text-lg font-bold">&#x20B9;3099</div>
        <div className="text-gray-500">Inclusive of all taxes</div>
      </div>
    </div>
  );
};

export default ProductSelected;
