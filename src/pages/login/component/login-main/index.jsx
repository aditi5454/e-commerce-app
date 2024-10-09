import React from "react";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center w-3/5">
      <div className="flex flex-col">
        <h2 className="mb-6 tracking-[5px] text-black">
          Welcome to Sky Collections
        </h2>

        <div className="my-2 w-full border-double border-b-[1px] border-gray-400 rounded-lg p-2">
          <input
            type="email"
            placeholder="Email Address"
            className="focus:outline-none focus:ring-0 active:outline-none active:ring-0"
            required
          ></input>
        </div>

        <div className="my-2 w-full border-double border-b-[1px] border-gray-400 rounded-lg p-2">
          <input
            type="password"
            placeholder="Password"
            minlength="8"
            maxlength="10"
            className="focus:outline-none focus:ring-0 active:outline-none active:ring-0"
            required
          ></input>
        </div>

        <div>
          <a
            href="#"
            className="text-sm text-[#0cc7bb] flex justify-end hover:text-[#f08080]"
          >
            Forgot Password?
          </a>
        </div>

        <button className="mt-3 mb-4 bg-[#a9dcd9] font-light border-none w-2/5 py-2 rounded-md">
          Sign In
        </button>

        <div className="text-black font-semibold">
          <span>
            Don't have an Account?
            <a
              href="/register"
              className="hover:text-[#f08080] text-[#0cc7bb] font-medium mx-2"
            >
              Create New Account
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

export default LoginMain;
