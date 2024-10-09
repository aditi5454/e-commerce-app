import React from "react";

const SelectDropdown = () => {
  return (
    <div>
      <label className="text-[#0cc6b9] font-bold mr-3">Select Qty.</label>
      <select className="border-2 border-[#808080] rounded-md text-xl w-1/8 px-1 text-[#808080] font-bold hover:outline-none hover:ring-0">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default SelectDropdown;
