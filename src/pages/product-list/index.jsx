import React, { useState } from "react";
import "./product-list.css";
import Header from "./../../common/components/header";
import Navbar from "./../../common/components/navbar";
import Footer from "./../../common/components/footer";
import Filter from "./components/filter";
import SingleProduct from "./../../common/components/single-product";
import { products } from "./../../common/constants/sample_clothes";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const ProductList = () => {
  const params = useParams();
  const { productType } = params;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (e, value) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentPage(value);
  };

  useEffect(() => {
    getFilteredProducts(productType);
  }, [productType]);

  const getFilteredProducts = (typeOfProduct) => {
    if (typeOfProduct === "all-products") {
      setFilteredProducts(products);
    } else {
      const FilteredProducts = products.filter((product) => {
        if (typeOfProduct) {
          return (
            product.type === typeOfProduct || product.brand === typeOfProduct
          );
        } else {
          return (
            product.productname
              .toLowerCase()
              .includes(typeOfProduct.toLowerCase()) ||
            product.type.toLowerCase().includes(typeOfProduct.toLowerCase())
          );
        }
      });
      setFilteredProducts(FilteredProducts);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header getFilteredProducts={getFilteredProducts} />

      <Navbar />

      <div className="flex justify-between p-10 bg-[#0cc7bb] w-full">
        <div className="w-1/4 bg-[#FAFBFC] h-[460px] rounded-md">
          <Filter
            getFilteredProducts={getFilteredProducts}
            typeOfProduct={productType}
          />
        </div>

        <div className="product-list-right ">
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
            {currentProducts.map((product) => (
              <SingleProduct productdata={product} key={product.key} />
            ))}
          </div>
          <Pagination
            defaultPage={1}
            page={currentPage}
            className="pagination"
            shape="rounded"
            size="large"
            onChange={paginate}
            count={Math.ceil(filteredProducts.length / productPerPage)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;

{
  /*

 if (brandName) {
                    return (product.type === typeOfProduct && product.brand === brandName)
                }
                else if(typeOfProduct){
                    return (product.type === typeOfProduct );
                }

*/
}
