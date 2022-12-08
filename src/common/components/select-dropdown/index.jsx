import React from "react";
import "./select-dropdown.css";

const SelectDropdown = () =>{
    return <div className="quantity">
    <label className="product-detail-quantity-label">Select Qty.</label>
    <select className="product-detail-select-dropdown">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</div>
}

export default SelectDropdown; 