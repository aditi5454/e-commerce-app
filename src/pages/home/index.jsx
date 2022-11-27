import React from "react";
import "./home.css"
import Header from "../../common/components/header"
import Navbar from "../../common/components/navbar"

const Home =() =>{
    return <div className="home-page">
    <Header /> 
    <Navbar />
    <section className=" common-section image-slider">Image Slider</section>
    <section className=" common-section offers">popular offers</section>
    <section className= "common-section payment-means">payments</section>
    {/* <Footer />*/}
    </div>
}

export default Home;