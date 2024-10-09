import React from "react";
import Banner from "../../common/components/banner";
import LoginMain from "./component/login-main";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <Banner />
      <LoginMain />
    </div>
  );
};

export default Login;
