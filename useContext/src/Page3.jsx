import React, { useContext, useState } from "react";
import { CartContext } from "./Components/ShoppingCart";
import Page1 from "./Components/Shop/Page1";
const Page3 = () => {
  const receive = useContext(CartContext);
  const [showPage, setShow] = useState(false);
  return (
    <div>
      <h1>page3</h1>

      <button
        onClick={() => {
          add("laptop");
        }}
      >
        add laptop
      </button>
      <h2>received value : {receive[0]}</h2>
      {showPage ? <Page1 /> : null}
      <button onClick={() => setShow(true)}>show</button>
    </div>
  );
};

export default Page3;
