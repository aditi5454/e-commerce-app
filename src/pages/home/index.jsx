import React from "react";
import Header from "../../common/components/header"
import Navbar from "../../common/components/navbar"
import ImageSlider from "./components/Image-Slider/index"
import Features from "./components/features/index"
import Footer from "../../common/components/footer";
import PopularOffers from "./components/popular-offers/index";

const Home =() =>{
    return <div>
    <Header />
    <Navbar />
    <ImageSlider />
    <Features />
    <PopularOffers />
    <Footer />
    </div>
}

export default Home;
