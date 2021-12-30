import React from "react";
import style from "./PriceList.module.css";

const PriceList = ({ items }) => {
  return (
    <ul className={style.priceList}>
      {items.map(({ title, cost }, ind) => (
        <li key={ind} className={style.priceItem}>
          <p className={style.priceTitle}>{title}</p>
          <p className={style.priceCost}>{cost}</p>
        </li>
      ))}
    </ul>
  );
};

export default PriceList;
