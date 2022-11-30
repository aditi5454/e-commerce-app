import React from "react";
import ShippingTruck from "./../../../../common/assets/icons/delivery-truck-icon.png";
import ReturnBox from "./../../../../common/assets/icons/shipping-box-icon.png";
import Cards from "./../../../../common/assets/icons/debit-icon.png";
import "./features.css";

const Features = () => {
    return <div className="feature-component">
        <div className="feature-container">

            <div className="first-div">
                <div className="features-image">
                    <img src={ShippingTruck} alt="shipping truck icon" className="features-logo"></img>
                </div>

                <div className="feature-info">
                    <h5 className="features-heading">FREE SHIPPING</h5>
                    <div className="para">Free shipping on order above &#x20B9;3000</div>
                </div>
            </div>

            <div className="second-div">
                <div className="features-image">
                    <img src={ReturnBox} alt="box icon" className="features-logo"></img>
                </div>

                <div className="features-info">
                    <h5 className="features-heading">30 DAYS RETURN</h5>
                    <div className="para">Simply return it within 30 days for an exchange</div>
                </div>
            </div>

            <div className="third-div">
                <div className="features-image">
                    <img src={Cards} alt="cards icon" className="features-logo"></img>
                </div>

                <div className="featues-info">
                    <h5 className="features-heading">100% PAYMENT SECURE</h5>
                    <div className="para">Secure payment with all online means</div>
                </div>
            </div>
        </div>
    </div>
}

export default Features;

