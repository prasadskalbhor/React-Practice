import { createContext } from "react";
import Father from "./ThemeSwitcherComponents/Father";

export const LangContext = createContext();

const LangSelector = () => {
  // const c = useContext(MainContext);
  console.log("hello lang");
  // console.log("this is context in lang selector : ", c);
  return (
    <div>
      <h3>lang </h3>
      <LangContext.Provider value={"e"}>
        <Father />
      </LangContext.Provider>
    </div>
  );
};

export default LangSelector;
