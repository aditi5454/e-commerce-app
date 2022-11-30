import React from "react";
import "./product-list.css"
import Header from "./../../common/components/header"
import Navbar from "./../../common/components/navbar"
import Footer from "./../../common/components/footer"

const ProductList =()=>{
    return <div >
    <Header />
    <Navbar />
    <div className="product-list-component" >this is product list</div>
    <Footer />
    </div>
}

export default ProductList;