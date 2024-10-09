import React from "react";
import ShareLogo from "./../../assets/icons/share-logo.png";

const Share = () => {
  return (
    <div>
      <button className="bg-[#FAFBFC] rounded-md flex justify-around items-center">
        <img
          src={ShareLogo}
          alt="share-icon"
          className="h-4 w-4 my-[3px] mx-[5px] "
        ></img>
        <div className="font-bold mr-2">Share</div>
      </button>
    </div>
  );
};

export default Share;
