import React, { useState } from "react";
import "./ColorPicker.css";
const ColorPicker = () => {
  const [color, setcolor] = useState("black");
  return (
    <div>
      <div className="preview" style={{ backgroundColor: color }}></div>
      <input
        type="color"
        onInput={(event) => {
          setcolor(event.target.value);
        }}
      />
    </div>
  );
};

export default ColorPicker;
