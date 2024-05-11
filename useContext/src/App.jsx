import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import UserAuth from "./Components/UserAuth";
import LangSelector from "./Components/LangSelector";
import GlobalDataMng from "./Components/GlobalDataMng";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useContext</h1>
      {/* <ThemeSwitcher />
      <hr />
      <UserAuth />
      <hr />
      <LangSelector />
      <hr />
      <GlobalDataMng />
      <hr /> */}
      <ShoppingCart />
    </>
  );
}

export default App;
