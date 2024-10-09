import React from "react";
import Banner from "../../common/components/banner";
import RegisterMain from "./components/register-main";

const Register = () => {
  return (
    <div className="register-page flex justify-between h-full ">
      <Banner />
      <RegisterMain />
    </div>
  );
};

export default Register;
