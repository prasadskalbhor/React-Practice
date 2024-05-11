import React, { createContext } from "react";
import GrandFather from "./ThemeSwitcherComponents/GrandFather";

export const AuthContext = createContext();
const UserAuth = () => {
  console.log("user auth render");
  return (
    <div>
      auth
      <AuthContext.Provider value={true}>
        <GrandFather />
      </AuthContext.Provider>
    </div>
  );
};

export default UserAuth;
