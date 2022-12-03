import React from "react";
import "./product-list.css"
import Header from "./../../common/components/header"
import Navbar from "./../../common/components/navbar"
import Footer from "./../../common/components/footer"
import SingleProduct from "./../../common/components/single-product";
import { products } from "./../../common/constants/sample_clothes";
import Pagination from 'react-bootstrap/Pagination';

const ProductList = () => {
    return <div >
        <Header />
        <Navbar />

        <div className="product-list-component" >

            <div className="product-list-left">
                <div className="filter-component">this is filter</div>
            </div>

            <div className="product-list-right">
                <div className="products-component">
                    {
                        products.map(product => <SingleProduct productdata={product} key={product.key} />)
                    }
                </div>
                <div className="pagination">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />

                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>

                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default ProductList;

