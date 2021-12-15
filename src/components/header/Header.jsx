import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import Button from "./../uikit/Button/Button";
import Burger from "../uikit/BurgerIcon/Burger";
import { useToggle } from "../../hooks/UseToggle";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import user from "../../images/icons/user.svg";
import style from "./Header.module.css";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useToggle();
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
      <nav className={style.nav}>
        <div
          className={classnames(
            style.navWrapper,
            isOpenMenu && style.menuActive
          )}
        >
          <ul className={style.menuList}>
            <li className={style.menuItem}>
              <NavLink to="/about" className={style.menuItemLink}>
                Про нас
              </NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to="/directions" className={style.menuItemLink}>
                Напрями
              </NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to="/doctors" className={style.menuItemLink}>
                Наші лікарі
              </NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to="/price" className={style.menuItemLink}>
                Вартість
              </NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to="/contacts" className={style.menuItemLink}>
                Контакти
              </NavLink>
            </li>
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
    </>
  );
};

export default Header;
