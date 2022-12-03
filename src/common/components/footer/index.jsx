import React from "react";
import "./footer.css"
import Facebook from "./../../assets/icons/footer-facebook.png"
import Insta from "./../../assets/icons/footer-insta.png"
import Pinterest from "./../../assets/icons/footer-pinterest.png"
import Twitter from "./../../assets/icons/footer-twitter.png"
import YouTube from "./../../assets/icons/footer-youtube.png"
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate= useNavigate();
    const goToAboutPage=()=>{
        navigate("/about");
    }
    const goToTop =()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return <div className="footer-component">
        <div className="footer-container">
            <div className="footer-div1">
                <h5 className="footer-headings">SKY COLLECTION</h5>
                <div className="footer-info">(123)-456-7890</div>
                <div className="footer-info">Support@skycollection121.com</div>
            </div>
            <div className="footer-div2">
                <h6 className="footer-headings">SKY COLLECTION</h6>
                <ul>
                <li className="footer-li" onClick={goToTop}>Home</li>
                <a href="#" className="footer-anchor-li"><li className="footer-li">Tops</li></a>
                <a href="#" className="footer-anchor-li"><li className="footer-li">Bottom</li></a>
                <a href="#" className="footer-anchor-li"><li className="footer-li">Dresses</li></a>
                <a href="#" className="footer-anchor-li"><li className="footer-li">Ethnic Wear</li></a>
                <a href="#" className="footer-anchor-li"><li className="footer-li">Footwear</li></a>
                <li className="footer-li" onClick={goToAboutPage}>About Us</li>
                </ul>
                
            </div>
            <div className="footer-div3">
                <h6 className="footer-headings">customer service</h6>
                <ul>
                <a href="#" className="footer-anchor-li"><li className="footer-li">my cart</li></a>
                <a href="#" className="footer-anchor-li"><li className="footer-li">shipping</li></a>
                <li className="footer-li">return policy</li>
                <li className="footer-li">FAQ</li>
                <li className="footer-li">contact</li>
                </ul>
            </div>
            <div className="footer-div4">
                <h6 className="footer-headings">social</h6>
                <div className="footer-logos">
                    <a href="https://www.facebook.com/" ><img src={Facebook} alt="facebook-logo" className="logos"></img>
                    </a>
                    <a href="https://www.instagram.com/" ><img src={Insta} alt="instagram-logo" className="logos"></img></a>
                    <a href="https://twitter.com/" ><img src={Twitter} alt="twitter-logo" className="logos"></img></a>
                    <a href="https://in.pinterest.com/" ><img src={Pinterest} alt="pinterest-logo" className="logos"></img></a>
                    <a href="https://www.youtube.com/" ><img src={YouTube} alt="youtube-logo" className="logos"></img></a>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;