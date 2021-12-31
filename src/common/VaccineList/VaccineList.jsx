import React from "react";
import { NavLink } from "react-router-dom";
import style from "./VaccineList.module.css";

const VaccineList = ({ listItems }) => {
  return (
    <ul className={style.vaccineList}>
      {listItems.map(({ title, target, path }, ind) => (
        <li key={ind} className={style.vaccineItem}>
          <div className={style.content}>
            <p className={style.title}>{title}</p>
            <div className={style.itemTargetWrap}>
              {target.map((item, index) => (
                <div key={index} className={style.itemTarget}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VaccineList;
