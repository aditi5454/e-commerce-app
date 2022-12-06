import React from "react";
import "./product-details.css";
import Header from "./../../common/components/header";
import Footer from "./../../common/components/footer";
import Navbar from "./../../common/components/navbar";
import BreadCrumbs from "./components/breadcrumbs"; 
import Share from "./../../common/components/share";
import ProductPicture from "./components/product-picture";
import ProductDetailSection from "./components/product-detail-section";

const ProductDetails = () => {
    return <div className="product-detail-component">
        <Header />
        <Navbar />
        <div className="product-detail-container">
            <div className="product-detail-top">
                <BreadCrumbs />
            </div>
            <div className="product-detail-bottom">
                <div className="product-detail-bottom-left">
                <ProductPicture />
                </div>
                <div className="product-detail-bottom-center">
                <ProductDetailSection />
                </div>
                <div className="product-detail-bottom-right">
                <Share />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default ProductDetails;