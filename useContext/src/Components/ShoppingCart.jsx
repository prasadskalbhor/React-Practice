import { createContext, useState } from "react";
import Page1 from "./Shop/Page1";
import Page2 from "./Shop/Page2";
import Page3 from "../Page3";
export const CartContext = createContext();
const ShoppingCart = () => {
  const [mycart, setMycart] = useState([23, 234, 34]);
  const arr = useState(null);

  return (
    <div>
      <h1>shopping</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {mycart.map((elm, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{elm}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CartContext.Provider value={arr}>
        {/* <Page1 /> */}
        <Page2 />
        <Page3 />
      </CartContext.Provider>
    </div>
  );
};

export default ShoppingCart;
// import { createContext, useState } from "react";
// import Page1 from "./Shop/Page1";
// import Page2 from "./Shop/Page2";
// import Page3 from "../Page3";
// export const CartContext = createContext();
// const ShoppingCart = () => {
//   const [mycart, setMycart] = useState([23, 234, 34]);
//   function addToCart(item) {
//     console.log(item);
//     console.log("this is my cart : ", mycart);
//     let arr = [...mycart];
//     console.log("copied now : ", arr);
//     arr.push(item);
//     console.log("pushed new : ", arr);
//     setMycart(arr);
//   }
//   return (
//     <div>
//       <h1>shopping</h1>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Sr no</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mycart.map((elm, index) => (
//             <tr key={index}>
//               <td>{index + 1}.</td>
//               <td>{elm}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <CartContext.Provider value={addToCart}>
//         <Page1 />
//         <Page2 />
//         <Page3 />
//       </CartContext.Provider>
//       <button onClick={() => addToCart(90)}>in add</button>
//     </div>
//   );
// };

// export default ShoppingCart;
