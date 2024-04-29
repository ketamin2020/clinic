import React from "react";
import DoctorCard from "../../common/DoctorCard/DoctorCard";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import style from "./AllDoctors.module.css";

import lapshina from "../../images/doctors/lapshinajpg.webp";
// import kulinenko from "../../images/doctors/kulinenko.webp";
import garbuz from "../../images/doctors/garbuzyk.webp";
import kuharuk from "../../images/doctors/kuharuk.webp";
import leschenko from "../../images/doctors/leschenko.jpg";
import ilchishin from "../../images/doctors/ilchishin.jpg";
import pravdiva from "../../images/doctors/ginekolog.jpg";
import lor from "../../images/doctors/lor_kodl.jpg";

const data = [
  {
    image: lapshina,
    name: "Лапшина Ірина Олександрівна",
    skill: "Лікар-педіатр, імунолог дитячий",
    path: "lapshina",
  },

  // {
  //   image: garbuz,
  //   name: "Гарбузюк Юрій Вікторович",
  //   skill: " Лікар загальної практики-сімейний лікар",
  //   path: "garbuzyuk",
  // },
  {
    image: kuharuk,
    name: "Кухарук Андрій Сергійович",
    skill: "Лікар ортопед-травматолог",
    path: "kuharuk",
  },
  // {
  //   image: leschenko,
  //   name: "Лещенко  Владислав Романович",
  //   skill: "Лікар загальної практики-сімейний лікар",
  //   path: "leschenko",
  // },
  {
    image: ilchishin,
    name: "Ільчишин Василь Миколайович",
    skill: "Лікар уролог",
    path: "ilchishin",
  },
  {
    image: pravdiva,
    name: "Правдива Галина Олександрівна",
    skill: "Лікар гінеколог",
    path: "pravdiva",
  },
  {
    image: lor,
    name: "Єфименко Дмитро Геннадійович",
    skill: "Лікар-отоларинголог,сурдолог",
    path: "lor",
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
