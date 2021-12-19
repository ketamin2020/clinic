import React from "react";
import classnames from "classnames";
import style from "./MainLayout.module.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import useScroll from "../hooks/UseScroll";

const MainLayout = ({ children }) => {
  const [scrollY] = useScroll();

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
      <div className={style.breadcrumbsContainer}>
        <div className={style.containerInner}>
          <Breadcrumbs />
        </div>
      </div>
      <div className={style.mainContainer}>
        <div className={style.containerInner}>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
