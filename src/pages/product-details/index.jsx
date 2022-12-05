import React from "react";
import "./product-details.css";
import Header from "./../../common/components/header";
import Footer from "./../../common/components/footer";
import Navbar from "./../../common/components/navbar";
import BreadCrumbs from "./components/breadcrumbs"; 
import Share from "./../../common/components/share";

const ProductDetails = () => {
    return <div className="product-detail-component">
        <Header />
        <Navbar />
        <div className="product-detail-container">
            <div className="product-detail-top">
                <BreadCrumbs />
            </div>
            <div className="product-detail-bottom">
                <div className="product-detail-bottom-left">part-1</div>
                <div className="product-detail-bottom-center">part 2</div>
                <div className="product-detail-bottom-right">
                <Share />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default ProductDetails;