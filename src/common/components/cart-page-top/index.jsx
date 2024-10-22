import React from "react";
import SecurePayment from "./../../assets/icons/secure-pay-icon.svg";

const CartPageTop = () => {
  return (
    <div className="h-24 bg-[#f08080] flex items-center justify-between px-10">
      <h1 className="text-2xl font-bold">SKY COLLECTION</h1>
      <div className="flex items-center">
        <img
          src={SecurePayment}
          alt="secure-payment"
          className="h-7 w-7 m-2"
        ></img>
        <div>100% Secure Transaction</div>
      </div>
    </div>
  );
};

export default CartPageTop;
