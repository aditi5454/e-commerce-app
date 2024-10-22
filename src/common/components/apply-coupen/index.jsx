import React from "react";
import CoupenLogo from "./../../assets/icons/coupon-code.png";

const ApplyCoupen = () => {
  return (
    <div className="h-32 w-[345px] rounded-md bg-white py-3 px-4">
      <h6 className="text-left font-bold">Apply Coupen</h6>
      <div className="border-2 border-[#dedcdc] flex items-center justify-between h-10 my-3 rounded-md py-1 px-3">
        <div className="flex items-center gap-2">
          <img src={CoupenLogo} alt="tag" className="h-5 w-5"></img>
          <input
            type="text"
            placeholder="Enter Coupen Code"
            className="bg-white text-md text-gray-400 focus:outline-none focus:ring-0 border-none"
          ></input>
        </div>
        <button className="bg-white text-md text-[#f08080] focus:outline-none focus:ring-0 border-none hover:text-[#0cc6b9]">
          Apply
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupen;
