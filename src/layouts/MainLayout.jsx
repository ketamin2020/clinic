import React from "react";
import style from "./MainLayout.module.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.containerInner}>
          <Header />
        </div>
      </div>
      <div className={style.navContainer}>
        <div className={style.containerInner}>
          <Nav />
        </div>
      </div>
      <div className={style.mainContainer}>{children}</div>
    </>
  );
};

export default MainLayout;
