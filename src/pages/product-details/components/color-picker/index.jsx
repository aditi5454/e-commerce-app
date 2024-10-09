import React from "react";

const ColorPicker = (props) => {
  const { color } = props;
  return (
    <div
      className="h-14 w-14 rounded-full mr-3 cursor-pointer hover:border-[1px] hover:border-white"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorPicker;
