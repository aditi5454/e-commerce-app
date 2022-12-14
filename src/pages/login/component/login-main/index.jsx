import React from "react";
import "./login-main.css"
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
    const navigate = useNavigate();
    const goToHome = () =>{
        navigate("/home");
    }
    
    return <div className="login-main">
        <div className="login-container">

            <h2 className="main-heading "> Welcome to Sky Collections </h2>

            <div className="input-div my-2">
                <input type="email" placeholder="Email Address" required className="input-box"></input>
            </div>

            <div className="input-div ">
                <input type="password" placeholder="Password" minlength="8" maxlength="10" required className="input-box"></input>
            </div>

            <div>
                <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            
            <button className="sign-in mt-3 mb-4">Sign In</button>

            <div className="input-text">
                <span> Don't have an Account? 
                <a href="/register" className="new-account"> Create New Account</a> </span>
            </div> 

            <button className="page-skip" onClick={goToHome}>Skip</button>
        </div>
    </div>
}

export default LoginMain;