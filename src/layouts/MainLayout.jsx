import React from "react";
import style from "./MainLayout.module.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import Footer from "../components/footer/Footer";
import { useScroll } from "../hooks/UseScroll";
import classNames from "classnames";

const MainLayout = ({ children }) => {
  const { scrollY } = useScroll();

  return (
    <div className={style.container}>
      <div
        className={classNames(
          style.headerContainer,
          scrollY && style.headerActive
        )}
      >
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
      <div className={style.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
