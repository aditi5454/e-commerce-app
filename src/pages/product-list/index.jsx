import React, { useState } from "react";
import "./product-list.css"
import Header from "./../../common/components/header"
import Navbar from "./../../common/components/navbar"
import Footer from "./../../common/components/footer"
import SingleProduct from "./../../common/components/single-product";
import { products } from "./../../common/constants/sample_clothes";
import Pagination from "./components/pagination";
import Filter from "./components/filter";
import {useEffect} from 'react';

const ProductList = () => {
    const [productList, setProductList] = useState(products);

    const getProductList = (type) => {
        if (type===""){
             setProductList(products);
        }
        else{
        const filteredProducts = products.filter(product => product.type === type);
        setProductList(filteredProducts);
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      
    return <div >
        <Header />
        <Navbar getProductList={getProductList}/>

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
                        productList.map(product => <SingleProduct productdata={product} key={product.key} />)
                    }
                </div>
                <Pagination />
            </div>
        </div>

        <Footer />
    </div>
}

export default ProductList;

