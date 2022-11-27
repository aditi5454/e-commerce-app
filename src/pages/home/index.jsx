import React from "react";
import "./home.css"
import Header from "../../common/components/header"
import Navbar from "../../common/components/navbar"
import ImageSlider from "./components/Image-Slider/index"

const Home =() =>{
    return <div className="home-page">
    <Header /> 
    <Navbar />
    <ImageSlider />
    <section className=" common-section offers">popular offers</section>
    <section className= "common-section payment-means">payments</section>
    {/* <Footer />*/}
    </div>
}

export default Home;