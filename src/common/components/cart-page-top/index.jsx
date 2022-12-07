import React from "react";
import "./cart-page-top.css";
import SecurePayment from "./../../assets/icons/secure-pay-icon.svg";

const CartPageTop = () =>{
    return <div className="page-top">
            <h1 className="shop-name">SKY COLLECTION</h1>
            <div className="page-top-right">
                <img src={SecurePayment} alt="secure-payment" className="secure-payment-icon"></img>
                <div>100% Secure Transaction</div>
            </div>
        </div>
}

export default CartPageTop;