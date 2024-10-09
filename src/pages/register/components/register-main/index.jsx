import React from "react";
import { useNavigate } from "react-router-dom";

const inputDivStyle =
  "my-2 w-full border-double border-b-[1px] border-gray-400 rounded-lg p-2";
const inputStyle =
  "focus:outline-none focus:ring-0 active:outline-none active:ring-0 w-full";

const RegisterMain = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className="h-full flex justify-center items-center w-3/5">
      <div className="flex flex-col">
        <h2 className="mb-6 tracking-[5px] text-black"> Create Account </h2>

        <div className={inputDivStyle}>
          <input
            type="text"
            placeholder="Full Name"
            className={inputStyle}
            required
          ></input>
        </div>
        <div className={inputDivStyle}>
          <input
            type="number"
            placeholder="Mobile Number"
            className={inputStyle}
            required
          ></input>
        </div>

        <div className={inputDivStyle}>
          <input
            type="email"
            placeholder="Email Address"
            className={inputStyle}
            required
          ></input>
        </div>
        <div className={inputDivStyle}>
          <input
            type="date"
            placeholder="Date of Birth "
            className={inputStyle}
          ></input>
        </div>

        <div className={inputDivStyle}>
          <input
            type="password"
            placeholder="Password"
            minlength="8"
            maxlength="10"
            required
            className={inputStyle}
          ></input>
        </div>

        <div className={inputDivStyle}>
          <input
            type="password"
            placeholder="Confirm Password"
            minlength="8"
            maxlength="10"
            required
            className={inputStyle}
          ></input>
        </div>

        <button className="mt-3 mb-4 bg-[#a9dcd9] font-light border-none py-2 rounded-md">
          Create Account
        </button>

        <div className="text-black font-semibold">
          <span>
            Already have an Account?
            <a
              href="/login"
              className="hover:text-[#f08080] text-[#0cc7bb] font-medium mx-2"
            >
              Login Here
            </a>
          </span>
        </div>

        <button
          className="text-[#f08080] font-bold underline my-2 text-lg hover:text-[#0cc7bb]"
          onClick={goToHome}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default RegisterMain;
