import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import { links, mainPage } from "../../router/LinksPath";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import document from "../../images/icons/document.svg";
import style from "./Nav.module.css";
import logo from "../../images/logo.png";

const Nav = () => {
  const { isOpenMenu, onMenuHeandler, onOpenMakerHeandler } =
    useContext(CustomContext);

  return (
    <nav className={classnames(style.nav, isOpenMenu && style.navActive)}>
      <div
        className={classnames(
          style.navWrapper,
          isOpenMenu && style.navWrapperActive
        )}
      >
        <ul className={style.menuList}>
          {links.navLinks.map(({ path, text }) => (
            <li key={path} className={style.menuItem}>
              <NavLink
                onClick={onMenuHeandler}
                to={path}
                className={style.menuItemLink}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={classnames(style.menuButtonList, style.desktopHidden)}>
          <li className={style.menuButtonItem}>
            <Button
              styleName={style.serviceBtn}
              text="Записатися на прийом"
              bgColor="green"
              icons={document}
              type="rect"
              heandler={onOpenMakerHeandler}
            />
          </li>
        </ul>
        <NavLink to={mainPage}>
          <img
            width="100"
            height="50"
            className={style.logoNavMob}
            src={logo}
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
