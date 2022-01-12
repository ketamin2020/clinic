import React from "react";
import style from "./HeadContacts.module.css";
import classnames from "classnames";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";

const HeadContacts = () => {
  return (
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
          (068) 860-60-62
        </a>
        <a className={style.email} href="mailto:simmedcentr@gmail.com">
          simmedcentr@gmail.com
        </a>
      </div>
      <div className={style.social}>
        <a
          href="https://www.instagram.com/p/CXqh4wLNHVd/?fbclid=IwAR0zPSgaqaeKYSMgWTaqBCAbIRAlpzNYz6sZLUH-ou1DeMgdPIOWiCbH_Gg"
          rel="noreferrer"
          target="_blank"
          className={style.socialLink}
        >
          <img width="20" height="20" src={facebook} alt="" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/p/CXqh4wLNHVd/?fbclid=IwAR0zPSgaqaeKYSMgWTaqBCAbIRAlpzNYz6sZLUH-ou1DeMgdPIOWiCbH_Gg"
          target="_blank"
          className={style.socialLink}
        >
          <img width="20" height="20" src={instagram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default HeadContacts;
