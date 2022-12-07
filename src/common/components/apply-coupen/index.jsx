import React from "react";
import CoupenLogo from "./../../assets/icons/coupon-code.png";
import "./apply-coupen.css";

const ApplyCoupen =() =>{
    return <div className="apply-coupen-component"> 
    <h6 className="apply-coupen-heading">Apply Coupen</h6>
    <div className="coupen-input-container">
    <img src={CoupenLogo} alt="tag" className="coupen-logo" ></img>
    <input type="text" placeholder="Enter Coupen Code" className="coupen-input-box"></input>
    <button className="coupen-apply-button">Apply</button>
    </div>
    </div>
}

export default ApplyCoupen;