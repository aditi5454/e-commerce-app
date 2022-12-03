import React from "react";
import "./navbar.css"

const Navbar=()=>{
    return <div className="navbar-component">
    <ul className="navbar-list">
    <li><a href="/home" className="navbar-list-items" >Home</a></li>
    <li><a href="#" className="navbar-list-items" >Tops</a></li>
    <li><a href="#" className="navbar-list-items" >Bottom</a></li>
    <li><a href="#" className="navbar-list-items" >Dresses</a></li>
    <li><a href="#" className="navbar-list-items" >Ethnic Wear</a></li>
    <li><a href="#" className="navbar-list-items" >Footwear</a></li>
    <li><a href="/about" className="navbar-list-items" >About Us</a></li>
    </ul>
    </div>
}
export default Navbar; 
