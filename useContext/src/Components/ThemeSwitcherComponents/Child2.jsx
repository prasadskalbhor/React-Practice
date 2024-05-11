import React, { useContext } from "react";
import { AuthContext } from "../UserAuth";
import { LangContext } from "../LangSelector";

const Child2 = () => {
  const auth = useContext(AuthContext);
  const l = useContext(LangContext);
  console.log("data got in clild2 : ", auth);
  return (
    <div style={{ backgroundColor: "black", width: "80%" }}>
      <h1>Child2</h1>
      {auth ? <h4>Hightly imp data </h4> : <h3>less imp data</h3>}
      {l == "marathi" ? <h1>marathi</h1> : <h1>english</h1>}
    </div>
  );
};

export default Child2;
