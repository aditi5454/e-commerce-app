import React from "react";
import "./header.css"
import Facebook from "../../assets/icons/facebook-lightcoral.png"
import Twitter from "../../assets/icons/twitter-lightcoral.png"
import Pinterest from "../../assets/icons/pinterest-lightcoral.png"
import Insta from "../../assets/icons/insta-lightcoral.png"
import User from "../../assets/icons/user-logo.png"
import Search from "../../assets/icons/search-lightcoral.png"
import ShoppingBag from "../../assets/icons/shopping-bag.png"
import WishlistEmpty from "../../assets/icons/wishlist-empty-logo.png"
import ContactLogo from "../../assets/icons/contact-logo-black.png"


const Header = () => {
    return <div className="header-component">

        <div className="header-top">
            <div className="top-left">
            <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="facebook-logo" className="logos"></img>
            </a>
            <a href="https://www.instagram.com/" target="_blank"><img src={Insta} alt="instagram-logo" className="logos"></img></a>
            <a href="https://twitter.com/" target="_blank"><img src={Twitter} alt="twitter-logo" className="logos"></img></a>  
            <a href="https://in.pinterest.com/" target="_blank"><img src={Pinterest} alt="pinterest-logo" className="logos"></img></a>  
            </div>
            <div className="top-right">
                <img src={Search} alt="pinterest-logo" className="logos"></img>
                <input type="text" placeholder="Enter item name here" className="search-input"></input>
            </div>
        </div>

        <div className="header-bottom">
            <div className="bottom-left">
                <img src={ContactLogo} alt="phone-image" className="phone-icon"></img>
                <div className="contact-info">
                    <div >Contact Us</div>
                    <div className="phone-no">(123) 456 7890</div>
                </div>
            </div>

            <div className="bottom-center"><h1>SKY COLLECTION</h1></div>

            <div className="bottom-right">
                <img src={WishlistEmpty} alt="user-logo" className="logos bottom-right-logos"></img>
                <img src={ShoppingBag} alt="user-logo" className="logos bottom-right-logos"></img>
                <img src={User} alt="user-logo" className="logos bottom-right-logos"></img>
            </div>

        </div>
    </div>
}

export default Header;