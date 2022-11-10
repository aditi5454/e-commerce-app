import React from "react";
import Banner from "../../common/components/banner"
import LoginMain from "./component/login-main"
import "./login.css"

const Login = () =>{
    return <div className="login-page">
    <Banner />
    <LoginMain />
    </div>
}

export default Login;