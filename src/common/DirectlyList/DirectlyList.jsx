import React from "react";
import style from "./DirectlyList.module.css";

const DirectlyList = ({ items }) => {
  return (
    <ul className={style.list}>
      {items.map(({ img, title, text }, ind) => (
        <li key={ind} className={style.item}>
          <img className={style.image} src={img} alt="" />
          <p className={style.title}>{title}</p>
          <p className={style.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default DirectlyList;
