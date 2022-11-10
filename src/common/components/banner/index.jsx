import React from "react";
import "./banner.css"
import LadySketch from "../../assets/images/banner-image.jpg"

const Banner = () => {
    return <div className="app-banner">
    <img src={LadySketch} alt="sketch of a woman" className="LadySketch"></img>
    <h1 className="heading-main"> SKY COLLECTIONS </h1>
    </div>
}

export default Banner;