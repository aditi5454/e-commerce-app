import React, { useEffect } from "react";
import {useState} from "react";
import "./product-details.css";
import Header from "./../../common/components/header";
import Footer from "./../../common/components/footer";
import Navbar from "./../../common/components/navbar";
import BreadCrumbs from "./components/breadcrumbs"; 
import Share from "./../../common/components/share";
import ProductPicture from "./components/product-picture";
import ProductDetailSection from "./components/product-detail-section";
import {products} from "./../../common/constants/sample_clothes";
import {useParams} from "react-router-dom";
import { product_images } from "./../../common/constants/images.js";

const ProductDetails = () => {
    const params= useParams();
    const {productId} = params;
    const [ProductDetails, setProductDetails]= useState({});

    const getProductDetails = (productId) =>{
        const matchingProduct = products.find(product=> {
            return product.key === parseInt(productId, 10);
    })
    setProductDetails(matchingProduct);
    } 
    
    useEffect(()=>{
        getProductDetails(productId);
    },[productId]);

    return <div className="product-detail-component">
        <Header />
        <Navbar />
        <div className="product-detail-container">
            <div className="product-detail-top">
                <BreadCrumbs productDetails ={ProductDetails}/>
            </div>
            <div className="product-detail-bottom">
                <div className="product-detail-bottom-left">
                 <ProductPicture  productId={productId} />
               
                </div>
                <div className="product-detail-bottom-center">
                <ProductDetailSection productDetails ={ProductDetails} productId={productId} />
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

