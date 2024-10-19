import React from "react";
import { useNavigate } from "react-router-dom";
import AndPoster from "./../../../../common/assets/images/and-poster.jpg";
import BootsDiscount from "./../../../../common/assets/images/boots-discount-poster.jpg";
import DressDiscount from "./../../../../common/assets/images/dresses-discount-poster.jpg";
import EthnicwearDiscount from "./../../../../common/assets/images/ethnic-wear-discount-poster.jpg";
import Forever21 from "./../../../../common/assets/images/forever21-poster.jpg";
import HeelsDiscount from "./../../../../common/assets/images/heels-discount-poster.jpg";
import LeviPoster from "./../../../../common/assets/images/levi-poster.jpg";
import PheetaDiscount from "./../../../../common/assets/images/pheeta-ethnics-discount-poster.jpg";
import PumaPoster from "./../../../../common/assets/images/puma-poster.jpg";
import WesternwearDiscount from "./../../../../common/assets/images/wester-wear-discount-poster.jpg";

const PopularOffers = () => {
  const navigate = useNavigate();
  const goToProductList = () => {
    navigate("/product-list/all-products");
  };

  return (
    <div className="bg-[#FAFBFC] flex flex-col gap-4 py-5">
      <div>
        <h1 className="font-bold text-center text-3xl">Deals Of The Day</h1>
        <div className="flex items-center gap-3 justify-center my-4">
          <img
            src={WesternwearDiscount}
            alt="western wear clothes"
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={DressDiscount}
            alt="dress  "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={EthnicwearDiscount}
            alt="ethnics wear clothes  "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-3xl">
          Best Of Sky Collection's Exclusive Brands
        </h1>
        <div className="flex items-center gap-3 justify-center my-4">
          <img
            src={Forever21}
            alt="forever21 offer "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={AndPoster}
            alt="and brand deals "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={LeviPoster}
            alt="levi offer "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={PheetaDiscount}
            alt="pheetabrand offer "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-3xl">
          Special Deals On Footwear
        </h1>
        <div className="flex items-center gap-3 justify-center my-4">
          <img
            src={PumaPoster}
            alt="puma shoes "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={HeelsDiscount}
            alt="heels "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
          <img
            src={BootsDiscount}
            alt="boots "
            className="m-2 border-2 border-gray-300 rounded-md shadow-lg text-center cursor-pointer hover:transform hover:scale-110"
            onClick={goToProductList}
          ></img>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#645656] text-white text-sm px-3 py-2 border border-[#645656] rounded font-bold w-fit"
          onClick={goToProductList}
        >
          DISCOVER ALL
        </button>
      </div>
    </div>
  );
};

export default PopularOffers;
