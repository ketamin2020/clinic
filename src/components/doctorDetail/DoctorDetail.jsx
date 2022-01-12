import React from "react";
import { useParams } from "react-router-dom";
import style from "./DoctorDetail.module.css";
import pravnik from "../../images/doctors/pravnik.webp";
import koshman from "../../images/doctors/koshman.webp";
import lapshina from "../../images/doctors/lapshinajpg.webp";

const details = {
  lapshina: {
    name: "Лапшина Ірина Олександрівна ",
    skil: "Лікар-педіатр, імунолог дитячий",
    image: lapshina,
    education: [
      "Закінчила Київський НМУ ім. О. Богомольця в 2005р.",
      "Інтернату проходила у НМУ ім. О. Богомольця 2005-2007рр.",
      "У 2020р. в НМАПО ім. Шупіка отримала сертифікат Імунолог дитячий.",
      "Працювала в ДКЛ №6 м.Києва 2007-2020рр.",
      "З 2012р. працюю в лікарем-педіатром та імунологом дитячим в Київській обласній дитячій лікарні.",
    ],
    directly: [
      "спостереження дітей від народження і до 18 років",
      "консультування щодо питань грудного вигодовування та догляду за малюками",
      "планування та проведення вакцинацій",
      "направлення на консультації до вузькопрофільних фахівців",
    ],
  },

  pravnik: {
    name: "Правник Михайло Васильович",
    skil: "Лікар-педіатр",
    image: pravnik,

    education: [
      "Закінчив Київський НМУ імені О.О. Богомольця в 2016 році.",
      "Інтернатуру проходив у ЛНМУ імені Данила Галицького (2016-2018 рр.)",
      "Працював лікарем-педіатром у Рівненській обласній лікарні та ЦПМСД N4 Дніпровського району.",
      "У 2018-2019 рр. лікарем-педіатром КНП КМДКЛ №5.",
      "Наразі – лікар-педіатр у Київській обласній дитячій лікарні.",
    ],

    directly: [
      "спостереження дітей від народження і до 18 років",
      "консультування щодо питань грудного вигодовування та догляду за малям",
      "планування та проведення вакцинацій",
      "направлення на консультації до вузькопрофільних фахівців",
    ],
  },
  koshman: {
    name: "Кошман Сергій Миколайович",
    skil: "Лікар-педіатр",
    image: koshman,

    education: [
      "Закінчив Запорізький державний медичний університет у 2016 році.",
      "Інтернатуру проходив у Національній медичній академії післядипломної освіти ім. П.Л. Шупика (2016-2018 рр.).",
      "У 2016 році закінчив школу масажу 'Світ масажу' в Запоріжжі.",
      "У 2017-2018 рр. працював масажистом у спа-центрі 'Центр Здоров'я' з дорослими та дітками від 2 місяців.",
      "Має досвід роботи в пологовому, дитячому, інфекційному відділеннях, амбулаторний прийом (2016-2021 рр.)",
      "Працює за принципом доказової медицини.",
    ],

    directly: [
      "патронаж",
      "спостереження дітей від народження і до 18 років",
      "вакцинація",
      "планування індивідуального графіку щеплень",
      "консультування щодо грудного вигодовування",
      "комплексний/індивідуальний підхід",
    ],
  },
};

const DoctorDetail = () => {
  const { name } = useParams();
  const { name: fullName, skil, image, directly, education } = details[name];
  return (
    <section className={style.section}>
      <h3 className={style.title}>{fullName}</h3>
      <h4 className={style.subtitle}>{skil}</h4>
      <div className={style.wrapper}>
        <article className={style.article}>
          <img src={image} alt={fullName} className={style.image} />
        </article>
        <article className={style.article}>
          <h4 className={style.articleTitle}>Освіта</h4>
          <ul className={style.list}>
            {education.map((item, ind) => (
              <li key={ind} className={style.item}>
                <span className={style.marker}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <h4 className={style.articleTitle}>Напрям діяльності</h4>
          <ul className={style.list}>
            {directly.map((item, ind) => (
              <li key={ind} className={style.item}>
                <span className={style.marker}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DoctorDetail;
