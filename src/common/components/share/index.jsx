import React from "react";
import "./share.css";
import ShareLogo from "./../../assets/icons/share-logo.png"

const Share = () => {
    return <div className="share-component">
    <button className="share-button">
    <img src={ShareLogo} alt="share-icon" className="share-logo"></img>
    <div className="share-text">Share</div>
    </button>
    </div>
}

export default Share;