import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LinkButton.module.css";

const LinkButton = ({ text, path }) => {
  const scrollHeandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div onClick={scrollHeandler} className={style.linkBtnWrapper}>
      <NavLink className={style.linkBtn} to={path}>
        {text}
      </NavLink>
    </div>
  );
};

export default LinkButton;
