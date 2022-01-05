import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { mainPage } from "../../router/LinksPath";
import { CustomContext } from "../../context/Context";
import Button from "./../uikit/Button/Button";
import Burger from "../uikit/BurgerIcon/Burger";
import home from "../../images/icons/home.svg";
import document from "../../images/icons/document.svg";
import style from "./Header.module.css";

const Header = () => {
  const { isOpenMenu, setIsOpenMenu, onOpenHeandler, onOpenMakerHeandler } =
    useContext(CustomContext);

  return (
    <>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <NavLink
            onClick={isOpenMenu && setIsOpenMenu}
            className={style.logoLink}
            to={mainPage}
          ></NavLink>
        </div>
        <div className={style.contactsWrapper}>
          <div className={style.phones}>
            <a className={style.phone} href="tel:0688606061">
              (068) 860-60-61
            </a>
            <a className={style.phone} href="tel:0688606062">
              (068) 860-60-62
            </a>
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
                heandler={onOpenHeandler}
              />
            </li>

            <li className={style.servicesItem}>
              <Button
                styleName={style.serviceBtn}
                text="Записатися на прийом"
                bgColor="green"
                icons={document}
                heandler={onOpenMakerHeandler}
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
