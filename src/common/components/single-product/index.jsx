import React from "react";
import WishListEmpty from "./../../assets/icons/wishlist-empty-logo.png";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ productdata }) => {
  const {
    image,
    brand,
    productname,
    discount_price,
    original_price,
    discount,
    key,
  } = productdata;

  const navigate = useNavigate();
  const goToProductDetails = () => {
    const productName = productname.replaceAll(" ", "-");
    navigate(`/product-list/${productName}/${key}`);
  };

  return (
    <div
      className="h-[400px] w-[276px] border border-black px-2 py-2 m-2 cursor-pointer flex flex-col text-center gap-1 relative"
      onClick={goToProductDetails}
    >
      <div className="h-[200px] w-auto flex items-center justify-center">
        <img src={image} alt="product"></img>
      </div>
      <div className="text-lg font-bold">{brand}</div>
      <div className="text-sm">{productname}</div>
      <div className="flex justify-center gap-1 items-center text-lg">
        <div className="font-bold">&#x20B9;{discount_price}</div>
        <div className="line-through">&#x20B9;{original_price}</div>
        <div className="text-[#f08080]">({discount})</div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#f08080] border border-gray-400 text-white text-sm rounded flex items-center justify-center py-2 gap-1 absolute bottom-5 w-[90%]">
          <img src={WishListEmpty} alt="heart" className="h-4 w-4"></img>
          <div>WISHLIST</div>
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
