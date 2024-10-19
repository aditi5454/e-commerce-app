import React, { useState } from "react";
import { product_images } from "./../../../../common/constants/images.js";

const ProductPicture = ({ productId }) => {
  const selectedProduct = product_images.find(
    (product_image) => product_image.key === parseInt(productId, 10)
  );
  const { image, grid_image_1, grid_image_2, grid_image_3 } = selectedProduct;
  const [mainPicture, setMainPicture] = useState(image);

  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={mainPicture} alt="product" className="h-[400px] w-auto"></img>
      </div>
      <div className="w-[300px] flex justify-center items-start flex-wrap my-5">
        <div className="h-28 border-2 border-[#0cc6b9] hover:border-[#f08080] m-2 p-1 rounded ">
          <img
            src={image}
            alt="smthg"
            className="h-[100px]"
            onClick={() => setMainPicture(image)}
          ></img>
        </div>
        <div className="h-28 border-2 border-[#0cc6b9] hover:border-[#f08080] m-2 p-1 rounded ">
          <img
            src={grid_image_1}
            alt="smthg"
            className="h-[100px]"
            onClick={() => setMainPicture(grid_image_1)}
          ></img>
        </div>
        <div className="h-28 border-2 border-[#0cc6b9] hover:border-[#f08080] m-2 p-1 rounded ">
          <img
            src={grid_image_2}
            alt="smthg"
            className="h-[100px]"
            onClick={() => setMainPicture(grid_image_2)}
          ></img>
        </div>
        <div className="h-28 border-2 border-[#0cc6b9] hover:border-[#f08080] m-2 p-1 rounded ">
          <img
            src={grid_image_3}
            alt="smthg"
            className="h-[100px]"
            onClick={() => setMainPicture(grid_image_3)}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProductPicture;
