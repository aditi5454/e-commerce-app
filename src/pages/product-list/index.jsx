import React from "react";
import "./product-list.css"
import Header from "./../../common/components/header"
import Navbar from "./../../common/components/navbar"
import Footer from "./../../common/components/footer"
import SingleProduct from "./../../common/components/single-product";
import { products } from "./../../common/constants/sample_clothes";
import Pagination from "./components/pagination";
import Filter from "./components/filter";

const ProductList = () => {
    return <div >
        <Header />
        <Navbar />

        <div className="product-list-component" >

            <div className="product-list-left">
                <Filter />
            </div>

            <div className="product-list-right">
                <div className="product-list-top">
                    <h4 className="product-list-heading">All Products</h4>
                    <div className="sort-by">
                        <span className="sortby-text">Sort by</span>
                        <select className="select-button">
                            <option value="low to high">Price- Low to High</option>
                            <option value="high to low">Price- High to Low</option>
                            <option value="popularity">Popularity</option>
                            <option value="ratings">Ratings</option>
                        </select>
                    </div>
                </div>

                <div className="products-component">
                    {
                        products.map(product => <SingleProduct productdata={product} key={product.key} />)
                    }
                </div>
                <Pagination />
            </div>
        </div>

        <Footer />
    </div>
}

export default ProductList;

