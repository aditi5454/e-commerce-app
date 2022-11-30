import React from "react";
import "./popular-offers.css";
import AndPoster from "./../../../../common/assets/images/and-poster.jpg"
import BootsDiscount from "./../../../../common/assets/images/boots-discount-poster.jpg"
import DressDiscount from "./../../../../common/assets/images/dresses-discount-poster.jpg"
import EthnicwearDiscount from "./../../../../common/assets/images/ethnic-wear-discount-poster.jpg"
import Forever21 from "./../../../../common/assets/images/forever21-poster.jpg"
import HeelsDiscount from "./../../../../common/assets/images/heels-discount-poster.jpg"
import LeviPoster from "./../../../../common/assets/images/levi-poster.jpg"
import PheetaDiscount from "./../../../../common/assets/images/pheeta-ethnics-discount-poster.jpg"
import PumaPoster from "./../../../../common/assets/images/puma-poster.jpg"
import WesternwearDiscount from "./../../../../common/assets/images/wester-wear-discount-poster.jpg"
import { Button } from "react-bootstrap";

const PopularOffers = () => {
    return <div className="popular-offers-component">
        <div className="offers-division1">
            <h1 className="offers-heading">Deals Of The Day</h1>
            <img src={WesternwearDiscount} alt="western wear clothes  " className="posters"></img>
            <img src={DressDiscount} alt="dress  " className="posters"></img>
            <img src={EthnicwearDiscount} alt="ethnics wear clothes  " className="posters"></img>
        </div>
        <div className="offers-division2">
            <h1 className="offers-heading">Best Of Sky Collection's Exclusive Brands</h1>
            <img src={Forever21} alt="forever21 offer " className="posters"></img>
            <img src={AndPoster} alt="and brand deals " className="posters"></img>
            <img src={LeviPoster} alt="levi offer " className="posters"></img>
            <img src={PheetaDiscount} alt="pheetabrand offer " className="posters"></img>
        </div>
        <div className="offers-division3">
            <h1 className="offers-heading">Special Deals On Footwear</h1>
            <img src={PumaPoster} alt="puma shoes " className="posters"></img>
            <img src={HeelsDiscount} alt="heels " className="posters"></img>
            <img src={BootsDiscount} alt="boots " className="posters"></img>
        </div>
        <button className="offers-button">DISCOVER ALL</button>
    </div>
}

export default PopularOffers;