import React from "react";
import "./home.css"
import Header from "../../common/components/header"
import Navbar from "../../common/components/navbar"
import ImageSlider from "./components/image-slider/index"
import Features from "./components/features/index"
import PapularOffers from "./components/popular-offers/index"
import PopularOffers from "./components/popular-offers/index";

const Home =() =>{
    return <div className="home-page">
    <Header /> 
    <Navbar />
    <ImageSlider />
    <Features />
    <PopularOffers />
    <section className= "common-section payment-means">payments</section>
    {/* <Footer />*/}
    </div>
}

export default Home;