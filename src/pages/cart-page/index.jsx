import React from "react";
import "./cart-page.css";
import CartPageTop from "./../../common/components/cart-page-top";
import CartPageFooter from "./../../common/components/cart-page-footer";
import ApplyCoupen from "./../../common/components/apply-coupen";
import BillDetails from "./../../common/components/bill-details";
import Step1Logo from "./../../common/assets/icons/step1-coral.png";
import Step2Logo from "./../../common/assets/icons/step2-blue.png";
import Step3Logo from "./../../common/assets/icons/step3-blue.png";

const CartPage = () => {
    return <div className="cart-page-component">
        <div className="cart-page-top">
            <CartPageTop />
        </div>
        <div className="cart-page-container">
            <div className="cart-page-container-left">
                <div className="cart-page-container-left-top">
                    <img src={Step1Logo} alt="number-1" className="cart-page-step-logo"></img>
                    <div className="cart-page-steps-heading-active"> Shopping Cart</div>
                    <div className="line-between-steps">----------</div>
                    <img src={Step2Logo} alt="number-2" className="cart-page-step-logo"></img>
                    <div className="cart-page-steps-heading"> Select Address</div>
                    <div className="line-between-steps">----------</div>
                    <img src={Step3Logo} alt="number-3" className="cart-page-step-logo"></img>
                    <div className="cart-page-steps-heading"> Payment</div>
                </div>
                <div className="cart-page-container-left-bottom">
                    <h4 className="cart-page-shopping-cart-heading">Shopping Cart</h4>
                    <div className="cart-products">
                    
                    </div>
                </div>
            </div>
            <div className="cart-page-container-right">
                <div className="cart-page-container-right-top">
                    <ApplyCoupen />
                </div>
                <div className="cart-page-container-right-bottom">
                    <BillDetails />
                </div>
            </div>
        </div>
        <div className="cart-page-bottom">
            <CartPageFooter />
        </div>
    </div>
}

export default CartPage;