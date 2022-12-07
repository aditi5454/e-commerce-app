import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./breadcrumbs.css";

const BreadCrumbs = (props) => {
    const {productDetails}= props;
    const {brand="", type="", productname=""} = productDetails;
    return (
        <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item href="/home" className="breadcrumb-item">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="breadcrumb-item"> {brand}</Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="breadcrumb-item"> {type}</Breadcrumb.Item>
            <Breadcrumb.Item  className="breadcrumb-item" active>{productname}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumbs;