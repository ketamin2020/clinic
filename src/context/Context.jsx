import React, { createContext } from "react";
import { useToggle } from "../hooks/UseToggle";
import data from "./data";
const CustomContext = createContext(null);
const Context = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useToggle();
  const [isOpenModal, setIsOpenModal] = useToggle();
  const [isOpenMaker, setIsOpenMaker] = useToggle();
  const [isCallBack, setIsCallBack] = useToggle();
  const onOpenHeandler = () => {
    setIsOpenModal((prev) => !prev);
  };
  const onOpenMakerHeandler = () => {
    setIsOpenMaker((prev) => !prev);
  };
  const onOpenCallBackHeandler = () => {
    setIsCallBack((prev) => !prev);
  };

  const contextData = {
    data,
    isOpenMenu,
    setIsOpenMenu,
    isOpenModal,
    isOpenMaker,
    isCallBack,
    onOpenHeandler,
    onOpenMakerHeandler,
    onOpenCallBackHeandler,
  };

  return (
    <CustomContext.Provider value={contextData}>
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContext, Context };
