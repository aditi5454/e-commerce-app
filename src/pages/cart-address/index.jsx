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

                <div className="cart-address-container-left-center">
                    <div className="cart-address-heading">
                        <h5 className="select-address-heading">Select Delivery Address</h5>
                        <button className="add-new-address-button">Add New Address</button>
                    </div>
                    <div className="all-address-container">
                        <div className="cart-address-value">
                            <label for="select-this-address" className="select-this-address">
                                <input type="checkbox" id="select-this-address" /> Aditi Garg
                            </label>
                            <div className="address-value"> 101, Acecity, Sector 1, Greater Noida West, Gautum Budh Nagar, Uttar Pradesh - 201306 </div>
                        </div>
                    </div>
                </div>

                <div className="cart-address-container-left-bottom">
                    <div className="create-new-address-heading">or Create New Delivery Address</div>
                    <div className="user-address-input">
                    <input type="text" placeholder="Address Name" className="user-address-input-value"></input>
                    <input type="tel" placeholder="Mobile Number" className="user-address-input-value"></input>
                    <input type="text" placeholder="Address 1" className="user-address-input-value"></input>
                    <input type="text" placeholder="Address 2" className="user-address-input-value"></input>
                    <input type="text" placeholder="Pincode" className="user-address-input-value"></input>
                    <input type="text" placeholder="State" className="user-address-input-value"></input>
                    <input type="text" placeholder="City" className="user-address-input-value"></input>
                    </div>
                </div>
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
        <div className="cart-address-bottom">
            <CartPageFooter />
        </div>
    </div>
}

export default CartAddress;
