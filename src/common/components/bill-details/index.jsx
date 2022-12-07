import React from "react";
import TaxInfo from "./../../assets/icons/tax-info.png";
import "./bill-details.css";

const BillDetails = () => {
    return <div className="bill-details-component">
        <h5 className="bill-details-heading">Bill Details</h5>
        <div className="bill-details-container">
            <div className="bill-amount-heading">Item Total</div>
            <div className="bill-amount">&#x20B9;3099.00</div>
        </div>
        <div className="bill-details-container">
        <div className="tax-heading-and-logo">
        <div className="taxes-amount-heading">Tax & Charges</div>
        <img src={TaxInfo} alt="info" className="tax-info-logo"></img>
        </div>
        <div className="taxes-amount">&#x20B9;99.00</div>
        </div>
        <div className="dotted-line">---------------------------------------</div>
        <div className="bill-details-container">
        <div className="total-amount-heading">Total Amount</div>
        <div className="total-amount">&#x20B9;3198.00</div>
        </div>
        <button className="select-address-button">Select Address</button>
    </div>
}

export default BillDetails;