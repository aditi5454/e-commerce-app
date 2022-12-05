import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./breadcrumbs.css";

const BreadCrumbs = () => {
    return (
        <Breadcrumb className="breadcrumb-container">
            <Breadcrumb.Item href="/home" className="breadcrumb-item">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="breadcrumb-item"> SASSAFRAS</Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="breadcrumb-item"> Tops</Breadcrumb.Item>
            <Breadcrumb.Item  className="breadcrumb-item" active>SASSAFRAS Women Black Ribbed T-shirt</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumbs;