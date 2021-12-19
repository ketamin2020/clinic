import React from "react";
import style from "./SectionTitle.module.css";

const SectionTItle = ({ text }) => {
  return (
    <div className={style.titleWrapper}>
      <h2 className={style.title}>{text}</h2>
    </div>
  );
};

export default SectionTItle;
