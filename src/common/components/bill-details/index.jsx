import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TaxInfo from "./../../assets/icons/tax-info.png";

const BillDetails = ({ buttonName }) => {
  useEffect(() => {
    getGoToPage(buttonName);
  }, [buttonName]);

  const navigate = useNavigate();
  const [goToPage, setGoToPage] = useState();

  const getGoToPage = (buttonName) => {
    if (buttonName === "Select Address") {
      setGoToPage("/cart-address");
    } else if (buttonName === "Proceed to Payment") {
      setGoToPage("/payment");
    } else {
      setGoToPage("/order-placed");
    }
  };

  const traversePage = () => {
    navigate(goToPage);
  };

  return (
    <div className="bg-white rounded-md p-5 w-[345px]">
      <h5 className="font-bold mb-4">Bill Details</h5>
      <div className="flex items-center justify-between my-1">
        <div>Item Total</div>
        <div>&#x20B9;3099.00</div>
      </div>
      <div className="flex items-center justify-between my-1 border-b-[1px] border-dashed pb-3 border-[#0cc6b9]">
        <div className="flex items-center justify-start">
          <div className="text-[#0cc6b9]">Tax & Charges</div>
          <img src={TaxInfo} alt="info" className="h-5 w-5 ml-1"></img>
        </div>
        <div className="text-[#0cc6b9]">&#x20B9;99.00</div>
      </div>

      <div className="flex items-center justify-between my-3">
        <div>Total Amount</div>
        <div>&#x20B9;3198.00</div>
      </div>

      {buttonName ? (
        <button
          className="h-10 w-full my-2 bg-[#0cc6b9] text-white font-bold rounded-md uppercase"
          onClick={traversePage}
        >
          {buttonName}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BillDetails;
