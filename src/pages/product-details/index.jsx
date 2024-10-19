import React, { useEffect } from "react";
import { useState } from "react";
import "./product-details.css";
import Header from "./../../common/components/header";
import Footer from "./../../common/components/footer";
import Navbar from "./../../common/components/navbar";
import BreadCrumbs from "./components/breadcrumbs";
import Share from "./../../common/components/share";
import ProductPicture from "./components/product-picture";
import ProductDetailSection from "./components/product-detail-section";
import { products } from "./../../common/constants/sample_clothes";
import { useParams } from "react-router-dom";
import { product_images } from "./../../common/constants/images.js";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const [ProductDetails, setProductDetails] = useState({});

  const getProductDetails = (productId) => {
    const matchingProduct = products.find((product) => {
      return product.key === parseInt(productId, 10);
    });
    setProductDetails(matchingProduct);
  };

  useEffect(() => {
    getProductDetails(productId);
  }, [productId]);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="h-[1000px] bg-[#0cc6b9] py-7 px-16">
        <div className="product-detail-top">
          <BreadCrumbs productDetails={ProductDetails} />
        </div>
        <div className="bg-[#FAFBFC] h-[850px] flex w-full py-5 px-5">
          <div className="w-2/6">
            <ProductPicture productId={productId} />
          </div>
          <div className="w-3/6">
            <ProductDetailSection
              productDetails={ProductDetails}
              productId={productId}
            />
          </div>
          <div className="w-1/6">
            <Share />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
