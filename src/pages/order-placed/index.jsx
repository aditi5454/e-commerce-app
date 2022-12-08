import React from "react";
import "./order-placed.css";
import Address from "./../../common/components/address";
import BillDetails from "./../../common/components/bill-details";
import Successful from "./../../common/assets/icons/successful.png";

const OrderPlaced = () => {
    return <div className="order-placed-component">
        <div className="order-placed-top">
            <h1 className="order-placed-store-heading"> SKY COLLECTION</h1>
        </div>
        <div className="order-placed-bottom">

            <div className="order-placed-left">
                <div className="order-placed-left-top">
                    <img src={Successful} alt="right" ></img>
                    <div className="order-placed-congratulations-text">Congratulations!!!</div>
                    <h3 className="successful-message">Order Placed Successfully</h3>
                </div>
                <div className="order-placed-left-center"></div>
                <div className="order-placed-left-bottom">
                <button className="continue-shopping">Continue Shopping</button>
                </div>
            </div>

            <div className="order-placed-right">
                <div className="order-placed-right-top">
                    <Address heading={"Delivery To"} />
                </div>
                <div className="order-placed-right-bottom">
                    <BillDetails />
                </div>
            </div>

        </div>
    </div>
}

export default OrderPlaced;