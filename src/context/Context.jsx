import React, { createContext } from "react";
import { useToggle } from "../hooks/UseToggle";
const CustomContext = createContext(null);
const Context = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useToggle();
  const [isOpenModal, setIsOpenModal] = useToggle();
  const [isOpenMaker, setIsOpenMaker] = useToggle();
  const [isCallBack, setIsCallBack] = useToggle();
  const onMenuHeandler = () => {
    setIsOpenMenu((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
    isOpenMenu,
    setIsOpenMenu,
    isOpenModal,
    isOpenMaker,
    isCallBack,
    onOpenHeandler,
    onOpenMakerHeandler,
    onOpenCallBackHeandler,
    onMenuHeandler,
  };

  return (
    <CustomContext.Provider value={contextData}>
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContext, Context };
