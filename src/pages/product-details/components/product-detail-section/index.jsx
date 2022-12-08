import React, { useEffect } from "react";
import "./product-detail-section.css";
import CheckBox from "./../../../../common/assets/icons/checkbox-blue.png";
import Return from "./../../../../common/assets/icons/return-blue.png";
import Truck from "./../../../../common/assets/icons/truck-blue.png";
import Whitebag from "./../../../../common/assets/icons/white-bag-coral.png";
import Wishlist from "./../../../../common/assets/icons/wishlist-empty-logo.png";
import ColorPicker from "./../color-picker";
import { product_images } from "./../../../../common/constants/images.js";
import SelectDropdown from "../../../../common/components/select-dropdown";

const ProductDetailSection = (props) => {

    useEffect(()=>{
        window.scrollTo({top:0, left: 0, behavior: "smooth"});
    },[]);

    const {productDetails, productId}= props;
    const {brand, productname, discount_price, original_price, discount} = productDetails;

    const selectedProductFeatures= product_images.find(product => product.key === parseInt(productId, 10));
    const {feature_1, feature_2, feature_3, feature_4} = selectedProductFeatures;

    return <div className="product-details-section">
        <h1 className="product-brandname">{brand} </h1>
        <div className="product-detail-name">{productname}</div>
        <div className="key-features">
            <h5 className="key-feature-text">key features</h5>
            <ul className="unordered-list">
                <li>{feature_1}</li>
                <li>{feature_2}</li>
                <li>{feature_3}</li>
                <li>{feature_4}</li>
            </ul>
        </div>

        <div className="color-picker">
            <h5 className="color-heading">Choose Colour</h5>
            <div className="color-picker-container" >
                <ColorPicker color="lightblue" />
                <ColorPicker color="aquamarine" />
                <ColorPicker color="lightgreen"/>
                <ColorPicker color="pink"/>
                <ColorPicker color="coral"/>
            </div>
        </div>

        <SelectDropdown />

        <div className="prices-and-taxes">
            <div className="prices-top">
                <div className="topitem-1">&#x20B9;{discount_price}</div>
                <div className="topitem-2">&#x20B9;{original_price}</div>
                <div className="topitem-3">{(discount)}</div>
            </div>
            <div className="prices-bottom">Inclusive of all taxes</div>
        </div>
        <div className="product-detail-buttons">
            <button className="add-to-bag">
                <img src={Whitebag} alt="white-bag" className="product-detail-button-logo" ></img>
                <div>ADD TO BAG</div>
            </button>
            <button className="add-to-wishlist">
                <img src={Wishlist} alt="heart" className="product-detail-button-logo"></img>
                <div>WISHLIST</div>
            </button>
        </div>
        <div className="some-app-features">
            <div className="app-feature1">
                <img src={Truck} alt="truck" className="product-detail-features-logo1" ></img>
                <div >
                    <div>Shipping Fee</div>
                    <div className="app-feature-info">FREE</div>
                </div>
            </div>
            <div className="app-feature2">
                <img src={Return} alt="circle" className="product-detail-features-logo2" ></img>
                <div >
                    <div>Return Policy</div>
                    <div className="app-feature-info">30 Days</div>
                </div>
            </div>
            <div className="app-feature3">
                <img src={CheckBox} alt="checkmark" className="product-detail-features-logo3"></img>
                <div >
                    <div>Cancellation</div>
                    <div className="app-feature-info">Allowed</div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetailSection;