import React from "react";
import "./single-product.css"
import WishListEmpty from "./../../assets/icons/wishlist-empty-logo.png";

const SingleProduct = ({productdata}) => {
    const {image, brand, productname, discount_price, original_price, discount}  = productdata ;

    return <div className="single-product-container">
        <img src={image}></img>
        <div className="brand-name">{brand}</div>
        <div className="product-name">{productname}</div>
        <div className="product-price-info">
            <div className="discount-price">&#x20B9;{discount_price}</div>
            <div className="original-price">&#x20B9;{original_price}</div>
            <div className="discount">({discount})</div>
        </div>
        <button className="wishlist-button" ><img src={WishListEmpty} alt="heart" className="wishlist-emptyheart-logo" >
        </img> WISHLIST</button>
    </div>
}

export default SingleProduct;