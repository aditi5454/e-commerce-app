import React from "react";
import PaymentMethod from "./../../assets/icons/payment-icons.svg";

const CartPageFooter =() =>{
    return <div className="bg-[#0cc6b9] w-full h-fit pt-1">
    <img src={PaymentMethod} alt="payment-methods"></img>
    </div>
}

export default CartPageFooter;