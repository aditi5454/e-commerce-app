import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumbs = (props) => {
  const { productDetails } = props;
  const { brand = "", type = "", productname = "" } = productDetails;
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        href="/home"
        className="font-bold text-sm hover:text-white focus:text-white"
      >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item
        color="text-white"
        href="#"
        className="font-bold text-sm  hover:text-white"
      >
        {" "}
        {brand}
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" className="font-bold text-sm hover:text-white">
        {" "}
        {type}
      </Breadcrumb.Item>
      <Breadcrumb.Item
        className="font-bold text-sm text-white"
        active
        color="white"
      >
        {productname}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
