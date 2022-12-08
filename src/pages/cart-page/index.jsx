import React from "react";
import "./cart-page.css";
import CartPageTop from "./../../common/components/cart-page-top";
import CartPageFooter from "./../../common/components/cart-page-footer";
import ApplyCoupen from "./../../common/components/apply-coupen";
import BillDetails from "./../../common/components/bill-details";
import Step1Logo from "./../../common/assets/icons/step1-coral.png";
import Step2Logo from "./../../common/assets/icons/step2-blue.png";
import Step3Logo from "./../../common/assets/icons/step3-blue.png";
import Heels from "./../../common/assets/images/heels-discount-poster.jpg"

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
                    <div className="cart-page-steps-heading" > Payment</div>
                </div>

                <div className="cart-page-container-left-bottom">
                    <h4 className="cart-page-shopping-cart-heading">Shopping Cart</h4>
                    
                    <div className="cart-products">
                        <div className="cart-product-picture-box">
                            <img src={Heels} alt="top" className="dummy-cart-product-image"></img>
                        </div>
                        <div className="cart-product-dummy-details">
                            <div className="dummy-cart-product-name">Bugatti Black Leather Stiletto Heels</div>
                            <div className="dummy-cart-product-price">&#x20B9;3099</div>
                            <div className="dummy-cart-product-text">Inclusive of all taxes</div>
                        </div>
                        <div className="cart-select-dummy-dropdown">
                        <div><label className="dummy-cart-quantity-text">Qty.</label></div>
                            <select className="dummy-cart-select-dropdown">
                                <option value="1" className="select-quantity-option">1</option>
                                <option value="2" className="select-quantity-option">2</option>
                                <option value="3" className="select-quantity-option">3</option>
                                <option value="4" className="select-quantity-option">4</option>
                            </select>
                        </div>
                        <div className="dummy-color-dropdown">
                        <div className="cart-dummy-color-select-dropdown-text">Color</div>
                        <select className="cart-dummy-color-select-dropdown">
                            <option className="select-color-option">lightblue</option>
                            <option className="select-color-option">aquamarine</option>
                            <option className="select-color-option">pink</option>
                            <option className="select-color-option">coral</option>
                        </select></div>
                        <div className="remove-button-container"><button className="remove-cart-item">Remove</button></div>
                    </div>

                </div>
                
            </div>

            <div className="cart-page-container-right">
                <div className="cart-page-container-right-top">
                    <ApplyCoupen />
                </div>
                <div className="cart-page-container-right-bottom">
                    <BillDetails buttonName={"Select Address"}/>
                </div>
            </div>
        </div>
    
        <div className="cart-page-bottom">
            <CartPageFooter />
        </div>
    </div>
}

export default CartPage;