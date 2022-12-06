import React from "react";
import "./home.css"
import Header from "../../common/components/header"
import Navbar from "../../common/components/navbar"
import ImageSlider from "./components/image-slider/index"
import Features from "./components/features/index"
import Footer from "../../common/components/footer";
import PopularOffers from "./components/popular-offers/index";

const Home =() =>{
    return <div className="home-page">
    <Header />
    <div className="navbar-replacement">There Is Something For Everyone...Happy Shopping...</div> 
    <ImageSlider />
    <Features />
    <PopularOffers />
    <Footer />
    </div>
}

export default Home;