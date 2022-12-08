import React from "react";
import "./payment.css";
import CartPageTop from "./../../common/components/cart-page-top";
import CartPageFooter from "./../../common/components/cart-page-footer";
import ApplyCoupen from "./../../common/components/apply-coupen";
import BillDetails from "./../../common/components/bill-details";
import DoneLogo from "./../../common/assets/icons/successful-coral.png";
import Step3Logo from "./../../common/assets/icons/step3-blue.png";
import Address from "./../../common/components/address";

const PaymentPage = () => {
    return <div classsName="payment-component">
        <div className="cart-page-top">
            <CartPageTop />
        </div>

        <div className="payment-container">
            <div className="payment-container-left">
                <div className="payment-container-left-top">
                    <img src={DoneLogo} alt="number-1" className="payment-page-step-logo"></img>
                    <div className="payment-page-steps-heading"> Shopping Cart</div>
                    <div className="line-between-steps">----------</div>
                    <img src={DoneLogo} alt="number-2" className="payment-page-step-logo"></img>
                    <div className="payment-page-steps-heading"> Select Address</div>
                    <div className="line-between-steps">----------</div>
                    <img src={Step3Logo} alt="number-3" className="payment-page-step-logo"></img>
                    <div className="payment-page-steps-heading-active"> Payment</div>
                </div>
                <div className="payment-container-left-bottom">
                    <h4 className="payment-container-payment-heading">Payment</h4>
                    <label for="cash-method" className="label-for-cash-method">
                        <input type="checkbox" id="cash-method"></input>
                        <span className="cash-method-text">Cash on delivery</span>
                    </label>
                </div>
            </div>

            <div className="payment-container-right">

                <div className="payment-container-right-top">
                    <Address heading={"Address"}/>
                </div>
                <div className="payment-container-right-center">
                    <ApplyCoupen />
                </div>
                <div className="payment-container-right-bottom">
                    <BillDetails buttonName={"Place Order"}/>
                </div>
            </div>
        </div>

        <div className="cart-page-bottom">
            <CartPageFooter />
        </div>
    </div>
}

export default PaymentPage;