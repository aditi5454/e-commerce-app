import React from "react";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home");
    }

    const getProductList = (type) =>{
        navigate(`/product-list/${type}`);
    }
      
    return <div className="navbar-component">
        <button className="navbar-list-items" onClick={goToHomePage} >Home</button>
        <button className="navbar-list-items" onClick={() => getProductList("all-products")}>All</button>
        <button className="navbar-list-items" onClick={() => getProductList("top")}>Tops</button>
        <button className="navbar-list-items" onClick={() => getProductList("bottom")}>Bottom</button>
        <button className="navbar-list-items" onClick={() => getProductList("dresses")}>Dresses</button>
        <button className="navbar-list-items" onClick={() => getProductList("ethnic-wear")}>Ethnic Wear</button>
        <button className="navbar-list-items" onClick={() => getProductList("footwear")}>Footwear</button>
    </div>

}
export default Navbar;
