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
  {
    image: lapshina,
    name: "Лапшина Ірина Олександрівна",
    skill: "Лікар-педіатр, імунолог дитячий",
    path: "lapshina",
  },
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
  {
    image: lapshina,
    name: "Лапшина Ірина Олександрівна",
    skill: "Лікар-педіатр, імунолог дитячий",
    path: "lapshina",
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
