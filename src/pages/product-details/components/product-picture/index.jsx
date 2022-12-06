import React, { useState } from "react";
import "./product-picture.css";
import { product_images } from "./../../../../common/constants/images.js";

const ProductPicture = () => {
    const [product_images_features] = product_images;
    const{image, grid_image_1, grid_image_2, grid_image_3}= product_images_features;

    return <div className="product-picture-component">
        <div className="product-picture-top"></div>
        <div className="product-picture-bottom">
            <div className="product-picture-bottom-box">
                <img src={image} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_1} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_2} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={grid_image_3} alt="smthg" className="product-picture-thumbnails"></img>
            </div>

        </div>
    </div>
}



export default ProductPicture;

{/*

            <div className="product-picture-bottom-box">
                <img src={Photo1} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={Photo2} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={Photo3} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
            <div className="product-picture-bottom-box">
                <img src={Photo4} alt="smthg" className="product-picture-thumbnails"></img>
            </div>
*/}