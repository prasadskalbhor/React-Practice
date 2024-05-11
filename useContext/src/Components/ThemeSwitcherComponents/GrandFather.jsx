import React from "react";
import Father from "./Father";

const GrandFather = () => {
  return (
    <div style={{ backgroundColor: "green", width: " 90%" }}>
      <h1>GrandFather</h1>
      <Father />
    </div>
  );
};

export default GrandFather;
