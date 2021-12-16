import React, { createContext } from "react";
import { useToggle } from "../hooks/UseToggle";
import data from "./data";
const CustomContext = createContext(null);
const Context = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useToggle();
  const contextData = {
    data,
    isOpenMenu,
    setIsOpenMenu,
  };

  return (
    <CustomContext.Provider value={contextData}>
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContext, Context };
