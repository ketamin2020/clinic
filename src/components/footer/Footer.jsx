import React, { useContext } from "react";
import { CustomContext } from "../../context/Context";
import { NavLink } from "react-router-dom";
import { links, mainPage } from "../../router/LinksPath";
import Button from "../../components/uikit/Button/Button";
import style from "../footer/Footer.module.css";
// import footerLogo from "../../images/logo-desktop.webp";
import footerLogo from "../../images/logo.png";
import document from "../../images/icons/document.svg";
import HeadContacts from "../../common/HeadContacts/HeadContacts";

const Footer = () => {
  const { onOpenMakerHeandler } = useContext(CustomContext);
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerWrapper}>
          <ul className={style.footerMenuLeft}>
            {links.navLinks.map(({ path, text }, ind) => (
              <li key={ind} className={style.linkItem}>
                <NavLink className={style.link} to={path}>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={style.footerMiddle}>
            <li className={style.footerMiddleItem}>
              {" "}
              <NavLink className={style.logoLink} to={mainPage}>
                <img width="3334" height="1146" src={footerLogo} alt="" />
              </NavLink>
            </li>
            <li className={style.footerMiddleItem}>
              <Button
                styleName={style.serviceBtn}
                text="Записатися на прийом"
                bgColor="green"
                icons={document}
                type="ovale"
                heandler={onOpenMakerHeandler}
              />
            </li>
          </ul>
          <HeadContacts />
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
