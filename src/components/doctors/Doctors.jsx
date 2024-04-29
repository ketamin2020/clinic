import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import Button from "../uikit/Button/Button";
import DocSlider from "../../common/DoctorsSliders/DocSlider";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import pravnik from "../../images/doctors/pravnik.webp";
import koshman from "../../images/doctors/koshman.webp";
import lapshina from "../../images/doctors/lapshinajpg.webp";
import style from "./Doctors.module.css";
import document from "../../images/icons/document.svg";
import kulinenko from "../../images/doctors/kulinenko.webp";
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
  {
    image: kulinenko,
    name: "Куліненко Маргарита Геннадіївна",
    skill: "Лікар-отоларинголог",
    path: "kulinenko",
  },
  // {
  //   image: garbuz,
  //   name: "Гарбузюк Юрій Вікторович",
  //   skill: "Лікар загальної практики-сімейний лікар",
  //   path: "garbuzyuk",
  // },
  {
    image: kuharuk,
    name: "Кухарук Андрій Сергійович",
    skill: "Лікар ортопед-травматолог",
    path: "kuharuk",
  },
  {
    image: ilchishin,
    name: "Ільчишин Василь Миколайович",
    skill: "Лікар уролог",
    path: "ilchishin",
  },

  {
    image: lapshina,
    name: "Лапшина Ірина Олександрівна",
    skill: "Лікар-педіатр, імунолог дитячий",
    path: "lapshina",
  },
  {
    image: pravdiva,
    name: "Правдива Галина Олександрівна",
    skill: "Лікар-гінеколог",
    path: "pravdiva",
  },
  {
    image: lor,
    name: "Єфименко Дмитро Геннадійович",
    skill: "Оторалинголог-сурдолог",
    path: "lor",
  },
  // {
  //   image: kulinenko,
  //   name: "Куліненко Маргарита Геннадіївна",
  //   skill: "Лікар-отоларинголог",
  //   path: "kulinenko",
  // },
  // {
  //   image: garbuz,
  //   name: "Гарбузюк Юрій Вікторович",
  //   skill: "Лікар загальної практики-сімейний лікар",
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
    skill: "Лікар-гінеколог",
    path: "pravdiva",
  },
  {
    image: lor,
    name: "Єфименко Дмитро Геннадійович",
    skill: "Оторалинголог-сурдолог",
    path: "lor",
  },
];

const Doctors = () => {
  const { onOpenMakerHeandler } = useContext(CustomContext);
  const navigate = useNavigate();
  const viewDoctorHeandler = (path) => {
    navigate(`/doctors/${path}`);
  };
  return (
    <section className={style.section}>
      <SectionTitle text="Наші лікарі" />
      <DocSlider>
        {data.map(({ image, name, skill, path }, ind) => (
          <article key={ind} className={style.doctorsItem}>
            <div className={style.itemWrapper}>
              <div className={style.itemImageWraper}>
                <img
                  width="300"
                  height="413"
                  className={style.itemImage}
                  src={image}
                  alt={name}
                />
              </div>
              <div className={style.itemContentWraper}>
                <p className={style.doctorName}>{name}</p>
                <p className={style.proffesion}>{skill}</p>
                <div className={style.btnWrapp}>
                  <Button
                    styleName={style.serviceBtn}
                    text="Записатись"
                    bgColor="blue"
                    icons={document}
                    type="ovale"
                    heandler={onOpenMakerHeandler}
                  />
                  <Button
                    styleName={style.serviceBtn}
                    text="Про лікаря"
                    bgColor="green"
                    icons={document}
                    type="ovale"
                    heandler={() => viewDoctorHeandler(path)}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </DocSlider>
      <div className={style.buttonWrapper}>
        <NavLink className={style.viewAllBtn} to="doctors">
          Переглянути усіх
        </NavLink>
      </div>
    </section>
  );
};

export default Doctors;
