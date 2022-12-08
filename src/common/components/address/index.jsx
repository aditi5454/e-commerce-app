import React from "react";
import "./address.css";

const Address =() =>{
    return <div className="address-component">
    <div className="address-component-top">
    <h6 className="address-top-heading">Address</h6>
    <button className="address-apply-button">Apply</button>
    </div>
    <div className="address-component-bottom">
    <h6 className="address-owner-name">Aditi Garg</h6>
    <div className="literal-address"> 101, Acecity, Sector 1, Greater Noida West, Gautum Budh Nagar, Uttar Pradesh- 201306 </div>
    </div>   
    </div>
}

export default Address;