import React, { useContext } from "react";
import { CustomContext } from "../../context/Context";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import Button from "../../components/uikit/Button/Button";
import style from "../footer/Footer.module.css";
import footerLogo from "../../images/logo-desktop.png";
import document from "../../images/icons/document.svg";
import home from "../../images/icons/home.svg";
import facebook from "../../images/icons/facebook.svg";
import instagram from "../../images/icons/instagram.svg";

const Footer = () => {
  const { onOpenHeandler, onOpenMakerHeandler } = useContext(CustomContext);
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerWrapper}>
          <ul className={style.footerMenuLeft}>
            <li className={style.linkItem}>
              <NavLink className={style.link} to="">
                Про нас
              </NavLink>
            </li>
            <li className={style.linkItem}>
              <NavLink className={style.link} to="">
                Напрями
              </NavLink>
            </li>
            <li className={style.linkItem}>
              <NavLink className={style.link} to="">
                Наші лікарі
              </NavLink>
            </li>
            <li className={style.linkItem}>
              <NavLink className={style.link} to="">
                Вартість
              </NavLink>
            </li>
            <li className={style.linkItem}>
              <NavLink className={style.link} to="">
                Контакти
              </NavLink>
            </li>
          </ul>
          <ul className={style.footerMiddle}>
            <li className={style.footerMiddleItem}>
              {" "}
              <NavLink className={style.logoLink} to="/">
                <img src={footerLogo} alt="" />
              </NavLink>
            </li>
            <li className={style.footerMiddleItem}>
              <Button
                styleName={style.serviceBtn}
                text="Виклик лікаря"
                bgColor="blue"
                icons={home}
                heandler={onOpenHeandler}
              />
            </li>

            <li className={style.footerMiddleItem}>
              <Button
                styleName={style.serviceBtn}
                text="Записатися на прийом"
                bgColor="green"
                icons={document}
                heandler={onOpenMakerHeandler}
              />
            </li>
          </ul>
          <div className={style.footerRight}>
            <p className={style.title}>Адреса:</p>
            <p className={classnames(style.location, style.iconLocation)}>
              с. Крюківщина,{" "}
            </p>
            <p className={style.location}>вул. Одеська 34, прим. 112 </p>
            <div className={style.contacts}>
              <a className={style.phone} href="tel:0688606061">
                (068) 860-60-61
              </a>
              <a className={style.phone} href="tel:0688606062">
                (068) 860-60-61
              </a>
              <a className={style.email} href="mailto:example@example.com">
                example@example.com
              </a>
            </div>
            <div className={style.social}>
              <a
                href="https://www.instagram.com/p/CXqh4wLNHVd/?fbclid=IwAR0zPSgaqaeKYSMgWTaqBCAbIRAlpzNYz6sZLUH-ou1DeMgdPIOWiCbH_Gg"
                rel="noreferrer"
                target="_blank"
                className={style.socialLink}
              >
                <img src={facebook} alt="" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/p/CXqh4wLNHVd/?fbclid=IwAR0zPSgaqaeKYSMgWTaqBCAbIRAlpzNYz6sZLUH-ou1DeMgdPIOWiCbH_Gg"
                target="_blank"
                className={style.socialLink}
              >
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={style.copyringWrapper}>
          <p className={style.copyringText}>
            ФОП “Центр сімейної медицини Сім'я” Профілактика. Діагностика.
            Лікування. 2022 © Всі права захищені
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
