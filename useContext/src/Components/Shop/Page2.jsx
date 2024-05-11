import React, { useContext } from "react";
import { CartContext } from "../ShoppingCart";
import PageN from "./PageN";
const Page2 = () => {
  const add = useContext(CartContext);
  return (
    <div>
      <h2>Page2</h2>
      <button
        onClick={() => {
          add("tab");
        }}
      >
        add tab
      </button>
      <PageN />
    </div>
  );
};

export default Page2;
