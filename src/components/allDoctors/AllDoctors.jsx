import React from "react";
import DoctorCard from "../../common/DoctorCard/DoctorCard";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import style from "./AllDoctors.module.css";
import pravnik from "../../images/doctors/pravnik.webp";
import koshman from "../../images/doctors/koshman.webp";

const data = [
  {
    image: pravnik,
    name: "Правник Михайло Васильович",
    skill: "Лікар-педіатр",
    path: "pravnik",
  },
  {
    image: koshman,
    name: "Кошман Сергій Миколайович",
    skill: "Лікар-педіатр",
    path: "koshman",
  },
];

const AllDoctors = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Наші лікарі" />
      <div className={style.cardsContainer}>
        {data.map(({ image, name, skill, path }, ind) => (
          <DoctorCard
            key={ind}
            image={image}
            name={name}
            skill={skill}
            path={path}
          />
        ))}
      </div>
    </section>
  );
};

export default AllDoctors;
