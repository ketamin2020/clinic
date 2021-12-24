import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import style from "./Nav.module.css";

const Nav = () => {
  const { isOpenMenu, onOpenHeandler, onOpenMakerHeandler, data } =
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
          {data.navLinks.map(({ path, text }) => (
            <li key={path} className={style.menuItem}>
              <NavLink to={path} className={style.menuItemLink}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={classnames(style.menuButtonList, style.desktopHidden)}>
          <li className={style.menuButtonItem}>
            <Button
              styleName={style.serviceBtn}
              text="Виклик лікаря"
              bgColor="blue"
              icons={home}
              type="rect"
              heandler={onOpenHeandler}
            />
          </li>

          <li className={style.menuButtonItem}>
            <Button
              styleName={style.serviceBtn}
              text="Записатися на прийом"
              bgColor="red"
              icons={document}
              type="rect"
              heandler={onOpenMakerHeandler}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
