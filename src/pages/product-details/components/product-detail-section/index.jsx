import React from "react";
import "./product-detail-section.css";
import CheckBox from "./../../../../common/assets/icons/checkbox-blue.png";
import Return from "./../../../../common/assets/icons/return-blue.png";
import Truck from "./../../../../common/assets/icons/truck-blue.png";
import Whitebag from "./../../../../common/assets/icons/white-bag-coral.png";
import Wishlist from "./../../../../common/assets/icons/wishlist-empty-logo.png";
import ColorPicker from "./../color-picker";

const ProductDetailSection = () => {
    return <div className="product-details-section">
        <h1 className="product-brandname">SASSAFRAS </h1>
        <div className="product-name">Women Black Ribbed T-shirt</div>
        <div className="key-features">
            <h5 className="key-feature-text">key features</h5>
            <ul className="unordered-list">
                <li>Olive green and black regular top</li>
                <li>Ethnic motifs print</li>
                <li>Mandarin collar, three-quarter, roll-up sleeves</li>
                <li>Woven, Button closure</li>
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

        <div className="quantity">
            <label className="product-detail-quantity-label">Select Qty.</label>
            <select className="product-detail-select-dropdown">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className="prices-and-taxes">
            <div className="prices-top">
                <div className="topitem-1">₹599</div>
                <div className="topitem-2">MRP ₹1499</div>
                <div className="topitem-3">(60% OFF)</div>
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