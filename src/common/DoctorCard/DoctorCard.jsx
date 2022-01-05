import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DoctorCard.module.css";
import arrow from "../../images/icons/arrow-point.svg";

const DoctorCard = ({ image, name, skill, path }) => {
  return (
    <article className={style.card}>
      <div className={style.imageWrapper}>
        <div className={style.layout}></div>
        <img
          width="300"
          height="300"
          className={style.image}
          src={image}
          alt="doctor"
        />
        <NavLink className={style.link} to={`/doctors/${path}`}>
          <img
            width="40"
            height="40"
            className={style.linkImg}
            src={arrow}
            alt="arrow"
          />
        </NavLink>
      </div>
      <p className={style.title}>{name}</p>
      <p className={style.skill}>{skill}</p>
    </article>
  );
};

export default DoctorCard;
