import React from "react";
import classnames from "classnames";
import style from "./Button.module.css";

const Button = ({ text, styleName, bgColor, icons, heandler, type }) => {
  return (
    <button
      onClick={heandler}
      className={classnames(
        style[bgColor],
        style[type],
        style.button,
        ...[styleName]
      )}
    >
      <img className={style.btnImage} src={icons} alt="button" />
      <span className={style.btnText}>{text}</span>
    </button>
  );
};

export default Button;
