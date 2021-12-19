import React from "react";
import style from "./MainLayout.module.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.containerInner}>
          <Header />
        </div>
        <div className={style.navContainer}>
          <div className={style.containerInner}>
            <Nav />
          </div>
        </div>
        <div className={style.breadcrumbsContainer}>
          <div className={style.containerInner}>
            <Breadcrumbs />
          </div>
        </div>
      </div>

      <div className={style.mainContainer}>
        <div className={style.containerInner}>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
