import React from "react";
import "./cart-address.css";
import CartPageTop from "./../../common/components/cart-page-top";
import CartPageFooter from "./../../common/components/cart-page-footer";
import ApplyCoupen from "./../../common/components/apply-coupen";
import BillDetails from "./../../common/components/bill-details";
import Logo1 from "./../../common/assets/icons/successful-coral.png";
import Logo2 from "./../../common/assets/icons/step-2-coral.png";
import Logo3 from "./../../common/assets/icons/step3-blue.png";

const CartAddress = () => {
    return <div className="cart-address-component">

        <div className="cart-address-page-top">
            <CartPageTop />
        </div>

        <div className="cart-address-container">

            <div className="cart-address-container-left">
            <div className="cart-address-container-left-top">
                    <img src={Logo1} alt="number-1" className="cart-page-step-logo"></img>
                    <div className="cart-address-steps-heading"> Shopping Cart</div>
                    <div className="line-between-steps">----------</div>
                    <img src={Logo2} alt="number-2" className="cart-page-step-logo"></img>
                    <div className="cart-address-steps-heading-active"> Select Address</div>
                    <div className="line-between-steps">----------</div>
                    <img src={Logo3} alt="number-3" className="cart-page-step-logo"></img>
                    <div className="cart-address-steps-heading" > Payment</div>
            </div>
            <div className="cart-address-container-left-center"></div>
            <div className="cart-address-container-left-bottom"></div>
            </div>

            <div className="cart-address-container-right">
                <div className="cart-address-container-right-top">
                    <ApplyCoupen />
                </div>
                <div className="cart-address-container-right-bottom">
                    <BillDetails buttonName={"Proceed to Payment"} />
                </div>
            </div>

        </div>

        <div className="cart-address-page-bottom">
            <CartPageFooter />
        </div>

    </div>
}

export default CartAddress;
