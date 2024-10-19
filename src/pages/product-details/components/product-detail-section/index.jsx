import React, { useEffect } from "react";
import CheckBox from "./../../../../common/assets/icons/checkbox-blue.png";
import Return from "./../../../../common/assets/icons/return-blue.png";
import Truck from "./../../../../common/assets/icons/truck-blue.png";
import Whitebag from "./../../../../common/assets/icons/white-bag-coral.png";
import Wishlist from "./../../../../common/assets/icons/wishlist-empty-logo.png";
import ColorPicker from "./../color-picker";
import { product_images } from "./../../../../common/constants/images.js";
import SelectDropdown from "../../../../common/components/select-dropdown";
import { useNavigate } from "react-router-dom";

const ProductDetailSection = (props) => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart-page");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { productDetails, productId } = props;
  const { brand, productname, discount_price, original_price, discount } =
    productDetails;

  const selectedProductFeatures = product_images.find(
    (product) => product.key === parseInt(productId, 10)
  );
  const { feature_1, feature_2, feature_3, feature_4 } =
    selectedProductFeatures;

  return (
    <div className="flex flex-col items-start ">
      <h1 className="font-bold text-lg text-[#0cc6b9]">{brand} </h1>
      <div className="text-[#f08080] font-bold">{productname}</div>
      <div className="my-7">
        <h5 className="text-[#0cc6b9] font-bold mb-1">Key features</h5>
        <ul className="text-gray-500">
          <li>{feature_1}</li>
          <li>{feature_2}</li>
          <li>{feature_3}</li>
          <li>{feature_4}</li>
        </ul>
      </div>

      <div className="flex flex-col items-start">
        <h5 className="text-[#f08080] font-bold">Choose Colour</h5>
        <div className="flex items-center justify-evenly my-3">
          <ColorPicker color="lightblue" />
          <ColorPicker color="aquamarine" />
          <ColorPicker color="lightgreen" />
          <ColorPicker color="pink" />
          <ColorPicker color="coral" />
        </div>
      </div>

      <SelectDropdown />

      <div className="my-7">
        <div className="flex items-center gap-2 font-bold">
          <div className="text-4xl mr-2">&#x20B9;{discount_price}</div>
          <div className="mr-2 line-through text-[#0cc6b9] text-2xl">
            &#x20B9;{original_price}
          </div>
          <div className="text-[#f08080] font-bold text-2xl">{discount}</div>
        </div>
        <div className="text-gray-500">Inclusive of all taxes</div>
      </div>
      <div className="flex items-center justify-start">
        <button
          className="bg-[#f08080] w-fit flex items-center justify-center gap-2 rounded border border-gray-400 px-4 py-2 text-white"
          onClick={goToCart}
        >
          <img src={Whitebag} alt="white-bag" className="h-5 w-5"></img>
          <div>ADD TO BAG</div>
        </button>
        <button className="ml-5 bg-[#f08080] w-fit flex items-center justify-center gap-2 rounded border border-gray-400 px-4 py-2 text-white">
          <img src={Wishlist} alt="heart" className="h-5 w-5"></img>
          <div>WISHLIST</div>
        </button>
      </div>
      <div className="my-8 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img src={Truck} alt="truck"></img>
          <div>
            <div>Shipping Fee</div>
            <div className="font-bold">FREE</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={Return} alt="circle"></img>
          <div>
            <div>Return Policy</div>
            <div className="font-bold">30 Days</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={CheckBox} alt="checkmark"></img>
          <div>
            <div>Cancellation</div>
            <div className="font-bold">Allowed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
