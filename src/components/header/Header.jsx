import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import Burger from "../uikit/BurgerIcon/Burger";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.logoWrapper}>
          <NavLink className={style.logoLink} to="/">
            <h1 className={classnames(style.mainTitle, style.mobHidden)}>
              Центр сімейної медицини <span>&laquo;Сім'я&raquo;</span>
            </h1>
          </NavLink>
        </div>
        <div className={style.contactsWrapper}>
          <div className={style.phones}>
            <a className={style.phone} href="tel:099 888 88 88">
              099 888 88 88
            </a>
            <a
              className={classnames(style.phone, style.mobHidden)}
              href="tel:099 888 88 88"
            >
              099 888 88 88
            </a>
          </div>
          <div className={style.times}>
            <span className={style.workTime}>Працюємо 24/7</span>
            <button className={style.callbackBtn}>Вам передзвонити?</button>
          </div>
        </div>
        <div className={classnames(style.servicesWrapper, style.mobHidden)}>
          <Button
            styleName={style.serviceBtn}
            text="Виклик лікаря"
            bgColor="blue"
            icons={home}
          />
          <Button
            styleName={style.serviceBtn}
            text="Записатися на прийом"
            bgColor="red"
            icons={document}
          />
        </div>
        <div className={style.desktopHidden}>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
