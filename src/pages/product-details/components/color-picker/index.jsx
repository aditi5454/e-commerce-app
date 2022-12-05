import React from "react";
import "./color-picker.css";

const ColorPicker =(props) =>{
    const {color} = props;
    return <div className="color-picker-component" style={{backgroundColor: color}}>
    </div>
}

export default ColorPicker;