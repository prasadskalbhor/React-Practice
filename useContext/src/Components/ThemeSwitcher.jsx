import { createContext } from "react";
import GrandFather from "./ThemeSwitcherComponents/GrandFather";

export const ThemeContext = createContext();
const ThemeSwitcher = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Theme Changer App </h1>
      <ThemeContext.Provider
        value={{ backgroundColor: "orange", width: "90%" }}
      >
        <GrandFather />
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeSwitcher;
