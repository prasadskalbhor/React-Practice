import React, { useContext } from "react";
import { ThemeContext } from "../ThemeSwitcher";
const GrandChild = () => {
  const c = useContext(ThemeContext);
  console.log("this is in grand clild");
  return (
    <div style={c}>
      <h1>Grand Child </h1>
    </div>
  );
};

export default GrandChild;
