import React from "react";
import "./product-selected.css";
import Heels from "./../../assets/images/heels-discount-poster.jpg"

const ProductSelected = () => {
    return <div className="product-selected-component">
        <div className="product-selected-picture-box">
            <img src={Heels} alt="top" className="product-selected-image"></img>
        </div>
        <div className="product-selected-details">
            <div className="product-selected-name">Bugatti Black Leather Stiletto Heels</div>
            <div className="product-selected-price">&#x20B9;3099</div>
            <div className="product-selected-text">Inclusive of all taxes</div>
        </div>
    </div>
}

export default ProductSelected;