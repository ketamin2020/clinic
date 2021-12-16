import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import Burger from "../uikit/BurgerIcon/Burger";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import user from "../../images/icons/user.svg";
import style from "./Header.module.css";

const Header = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(CustomContext);
  return (
    <>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <NavLink className={style.logoLink} to="/">
            <h1 className={classnames(style.mainTitle, style.mobHidden)}>
              Центр сімейної медицини <span>&laquo;Сім'я&raquo;</span>
            </h1>
          </NavLink>
        </div>
        <div className={style.contactsWrapper}>
          <div className={style.phones}>
            <a className={style.phone} href="tel:0688606061">
              (068) 860-60-61
            </a>
            <a
              className={classnames(style.phone, style.mobHidden)}
              href="tel:0688606062"
            >
              (068) 860-60-61
            </a>
          </div>
          <div className={style.times}>
            <span className={style.workTime}>Працюємо 24/7</span>
            <button className={style.callbackBtn}>Вам передзвонити?</button>
          </div>
        </div>
        <div className={style.mobHidden}>
          <ul className={style.servicesList}>
            <li className={style.servicesItem}>
              <Button
                styleName={style.serviceBtn}
                text="Виклик лікаря"
                bgColor="blue"
                icons={home}
              />
            </li>
            <li className={style.servicesItem}>
              <Button
                styleName={style.serviceBtn}
                text="Особистий кабінет"
                bgColor="green"
                icons={user}
              />
            </li>
            <li className={style.servicesItem}>
              <Button
                styleName={style.serviceBtn}
                text="Записатися на прийом"
                bgColor="red"
                icons={document}
              />
            </li>
          </ul>
        </div>
        <div className={style.desktopHidden}>
          <Burger heandler={setIsOpenMenu} isOpen={isOpenMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
