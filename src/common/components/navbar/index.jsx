import React from "react";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = ({ getProductList}) => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home");
    }
    const goToProductPage = () => {
        navigate('/product-list');
    }
      
    return <div className="navbar-component">
        <button className="navbar-list-items" onClick={goToHomePage} >Home</button>
        <button className="navbar-list-items" onClick={() => getProductList("")}>All</button>
        <button className="navbar-list-items" onClick={() => getProductList("top")}>Tops</button>
        <button className="navbar-list-items" onClick={() => getProductList("bottom")}>Bottom</button>
        <button className="navbar-list-items" onClick={() => getProductList("dresses")}>Dresses</button>
        <button className="navbar-list-items" onClick={() => getProductList("ethnic-wear")}>Ethnic Wear</button>
        <button className="navbar-list-items" onClick={() => getProductList("footwear")}>Footwear</button>
    </div>

}
export default Navbar;

{/* <ul className="navbar-list">
    <li><a href="/home" className="navbar-list-items" >Home</a></li>
    <li><a href="/filtered-product/Tops" className="navbar-list-items" >Tops</a></li>
    <li><a href="/filtered-product/Bottom" className="navbar-list-items" >Bottom</a></li>
    <li><a href="/filtered-product/Dresses" className="navbar-list-items" >Dresses</a></li>
    <li><a href="/filtered-product/Ethnic-wear" className="navbar-list-items" >Ethnic Wear</a></li>
    <li><a href="/filtered-product/Footwear" className="navbar-list-items" >Footwear</a></li>
    <li><a href="/about" className="navbar-list-items" >About Us</a></li>
    </ul> 
*/}