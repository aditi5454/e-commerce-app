import React from "react";
import "./register-main.css"
import { useNavigate } from "react-router-dom";

const RegisterMain = () =>{
    const navigate = useNavigate();
    const goToHome = () =>{
        navigate("/home");
    }
    return <div className="register-main">
    <div className="register-container">

    <h2 className="main-heading mb-4"> Create Account </h2>

    <div className="input-div my-3">
    <input type="text" placeholder="Full Name" required className="input-box"></input>
    </div>
    <div className="input-div my-3">
    <input type="number" placeholder="Mobile Number" required className="input-box"></input>
    </div>

    <div className="input-div my-3">
        <input type="email" placeholder="Email Address" required className="input-box"></input>
    </div>
    <div className="input-div my-3">
        <input type="date" placeholder="Date of Birth " className="input-box"></input>
    </div>

    <div className="input-div my-3">
        <input type="password" placeholder="Password" minlength="8" maxlength="10" required className="input-box"></input>
    </div>

    <div className="input-div my-3">
        <input type="password" placeholder="Confirm Password" minlength="8" maxlength="10" required className="input-box"></input>
    </div>

    <button className="sign-up mt-2 mb-3 ">Create Account</button>

    <div className="input-text">
        <span> Already have an Account? 
        <a href="/login" className="old-account"> Login Here</a> </span>
    </div> 

    <button className="page-skip" onClick={goToHome}>Skip</button>
</div>
    </div>
}

export default RegisterMain;