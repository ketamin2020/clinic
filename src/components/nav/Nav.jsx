import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import user from "../../images/icons/user.svg";
import style from "./Nav.module.css";

const Nav = () => {
  const { isOpenMenu, data } = useContext(CustomContext);
  return (
    <nav className={classnames(style.nav, isOpenMenu && style.menuActive)}>
      <div
        className={classnames(style.navWrapper, isOpenMenu && style.menuActive)}
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
            />
          </li>
          <li className={style.menuButtonItem}>
            <Button
              styleName={style.serviceBtn}
              text="Особистий кабінет"
              bgColor="green"
              icons={user}
              type="rect"
            />
          </li>
          <li className={style.menuButtonItem}>
            <Button
              styleName={style.serviceBtn}
              text="Записатися на прийом"
              bgColor="red"
              icons={document}
              type="rect"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
