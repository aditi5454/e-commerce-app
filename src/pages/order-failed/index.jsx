import React from "react";
import "./order-failed.css";
import Address from "./../../common/components/address";
import BillDetails from "./../../common/components/bill-details";
import ErrorLogo from "./../../common/assets/icons/error-red.png";

const OrderFailed = () => {
    return <div className="order-failed-component">
        <div className="order-failed-top">
            <h1 className="order-failed-store-heading"> SKY COLLECTION</h1>
        </div>
        <div className="order-failed-bottom">

            <div className="order-failed-left">
                <div className="order-failed-left-top">
                    <img src={ErrorLogo} alt="right" ></img>
                    <div className="order-failed-text">Uh Oh</div>
                    <h3 className="failure-message">Order Failed</h3>
                </div>
                <div className="order-failed-left-center"></div>
                <div className="order-failed-left-bottom">
                <button className="try-again">Try Again</button>
                </div>
            </div>

            <div className="order-failed-right">
                <div className="order-failed-right-top">
                    <Address heading={"Delivery To"} />
                </div>
                <div className="order-failed-right-bottom">
                    <BillDetails />
                </div>
            </div>

        </div>
    </div>
}

export default OrderFailed;