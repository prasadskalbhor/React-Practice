import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div style={{ backgroundColor: "blue", width: "90%" }}>
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
};

export default Child;
