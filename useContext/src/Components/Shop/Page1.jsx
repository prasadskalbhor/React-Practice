import React, { useContext } from "react";
import { CartContext } from "../ShoppingCart";
const Page1 = () => {
  const add = useContext(CartContext);
  return (
    <div>
      <h1>Page1 {add[0]}</h1>
    </div>
  );
};

export default Page1;
