import React from "react";
import "./filter.css"
import { brandsOptions } from "./../../../../common/constants/products_count";
import Form from 'react-bootstrap/Form';

const Filter = ({getFilteredProducts,typeOfProduct}) => {

    return <div className="filter-component">

        <h4 className="filter-heading">Filters</h4>
        <div className="brands-filter">
            <div className="brands-filter-top">
                <h5>Brands</h5>
                <a href="#" className="view-all-anchor" >View All</a>
            </div>

            <div className="brands-filter-bottom">
                {
                    brandsOptions.map(brandOption => {
                        return (
                            <div className="brand-name-option">
                                <div classname="brandname-option-left">
                                    <label for={brandOption.id}>
                                        <input type="checkbox" name="brandname" id={brandOption.id} onClick={()=>getFilteredProducts(typeOfProduct,brandOption.name)}></input>
                                        <span className="brandname-text">{brandOption.name}</span>
                                    </label>
                                </div>
                                <div className="brand-option-right">{brandOption.count}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <hr />
        <div className="price-filter">
            <div className="price-filter-top">
                <h5>Price</h5>
            </div>
            <div className="price-filter-bottom">
            <Form.Label>&#x20B9;599 - &#x20B9;7000</Form.Label>
            <Form.Range />
            </div>
        </div>

    </div>
}

export default Filter;