import React from "react";
import "./product-details.css";
import Header from "./../../common/components/header";
import Footer from "./../../common/components/footer";
import Navbar from "./../../common/components/navbar";

const ProductDetails =()=>{
    return <div className="product-detail-component"> 
    <Header />
    <Navbar />
    <div className="product-detail-container"> this is product details</div>
    <Footer />
    </div>
}

export default ProductDetails;