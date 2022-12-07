import React from "react";
import "./cart-page-footer.css";
import PaymentMethod from "./../../assets/icons/payment-icons.svg";

const CartPageFooter =() =>{
    return <div className="page-footer">
    <img src={PaymentMethod} alt="payment-methods"></img>
    </div>
}

export default CartPageFooter;