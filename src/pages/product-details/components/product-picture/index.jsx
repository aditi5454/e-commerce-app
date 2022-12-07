import React, {useState} from "react";
import "./product-picture.css";
import { product_images } from "./../../../../common/constants/images.js";

const ProductPicture = ({productId}) => {

    const selectedProduct = product_images.find(product_image => product_image.key=== parseInt(productId ,10));
    const{image, grid_image_1, grid_image_2, grid_image_3} = selectedProduct;
    const [mainPicture, setMainPicture ] = useState(image);

    return <div className="product-picture-component">
    <div className="product-picture-top">
    <img src={mainPicture} alt="product" className="main-picture" ></img>
    </div>
        <div className="product-picture-bottom">
            <div className="product-picture-bottom-box">
                <img src={image} alt="smthg" className="product-picture-thumbnails" onClick={()=> setMainPicture(image)}></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_1} alt="smthg" className="product-picture-thumbnails" onClick={()=> setMainPicture(grid_image_1)}></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_2} alt="smthg" className="product-picture-thumbnails" onClick={()=> setMainPicture(grid_image_2)}></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_3} alt="smthg" className="product-picture-thumbnails" onClick={()=> setMainPicture(grid_image_3)}></img>
            </div>

        </div>
    </div>
}

export default ProductPicture;
