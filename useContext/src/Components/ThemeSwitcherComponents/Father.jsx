import React, { useContext } from "react";
import Child2 from "./Child2";
import Child from "./Child";
import { LangContext } from "../LangSelector";

const Father = () => {
  const c = useContext(LangContext);

  return (
    <div style={{ backgroundColor: "yellow", width: "90%" }}>
      <h1>Father</h1>
      {c === "marathi" ? <h1>marathi</h1> : <h1>english</h1>}
      <Child />
      <Child2 />
    </div>
  );
};

export default Father;
