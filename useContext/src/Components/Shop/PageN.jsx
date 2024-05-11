import React, { useContext, useRef } from "react";
import { CartContext } from "../ShoppingCart";

const PageN = () => {
  const send = useContext(CartContext);

  return (
    <div>
      <h1>page N</h1>
      <input
        type="text"
        onInput={(e) => {
          send[1](e.target.value);
        }}
      />
    </div>
  );
};

export default PageN;
