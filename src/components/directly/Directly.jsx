import React from "react";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import DirectlyList from "../../common/DirectlyList/DirectlyList";
import style from "./Directly.module.css";
import childdoctor from "../../images/icons/childdoctor.svg";
import brain from "../../images/icons/brain.svg";
import ear from "../../images/icons/ear.svg";
import family from "../../images/icons/familydoc.svg";
import ortopedic from "../../images/icons/ortopedic.svg";
import reference from "../../images/icons/reference.svg";
import surgery from "../../images/icons/surgery.svg";
import vactination from "../../images/icons/vaccination.svg";
import lab from "../../images/icons/laboratoriya.svg";
import directtion from "../../images/icons/direction.svg";
import declaration from "../../images/icons/declaration.svg";
import calldoctor from "../../images/icons/calldoctor.svg";
import massage from "../../images/icons/massage.svg";
import ultrasound from "../../images/icons/ultrasound.svg";
const direct = [
  {
    img: reference,
    title: "Справки",
    text: "Проводимо обстеження та видаємо медичні довідки щодо хвороби, для шкіл, дитсадків, спортивних гуртків та ін.",
  },
  {
    img: directtion,
    title: "Направлення",
    text: "Отримати направлення на консультацію вузького спеціаліста, пройти обстеження чи госпіталізацію",
  },
  {
    img: vactination,
    title: "Вакцинація",
    text: "Проводимо вакцинацію проти небезпечних інфекційних захворювань.",
  },
  {
    img: lab,
    title: "Аналізи",
    text: "Проводимо дітям та дорослим широкий спектр аналізів.",
  },
  {
    img: declaration,
    title: "Декларації",
    text: "Підписавши декларацію з нашим сімейним лікарем, Ви отримаєте право на безкоштовний пакет медичних послуг, гарантований державою.",
  },
  {
    img: calldoctor,
    title: "Виклик лікаря",
    text: "Консультація, аналізи, вакцинація та лікування дітей вдома – у Києві та в межах 20 км від меж міста.",
  },
  {
    img: childdoctor,
    title: "Педіатрія",
    text: "Консультація, аналізи, вакцинація та лікування дітей",
  },
  {
    img: family,
    title: "Сімейна медицина",
    text: "Консультація, аналізи, вакцинація та лікування всієї родини",
  },
  {
    img: brain,
    title: "Неврологія",
    text: "Діагностика та лікування неврологічних порушень: гідроцефального та судомного синдромів, епілепсії, головного болю, ДЦП та ін.",
  },
  {
    img: ear,
    title: "Отоларингологія",
    text: "Діагностика, профілактика та лікування захворювань лор-органів: отитів, аденоїдитів, тонзилітів та ін.",
  },
  {
    img: ortopedic,
    title: "Ортопедія та травматологія",
    text: "Діагностика та лікування травм та вроджених захворювань опорно-рухового апарату.",
  },
  {
    img: surgery,
    title: "Хірургія",
    text: "Діагностика хірургічної патології: апендицит, грижі та ін. Малі хірургічні втручання, обробка ран.",
  },
  {
    img: ultrasound,
    title: "УЗД діагностика",
    text: "Всі види ультразвукового дослідження для дорослих та дітей",
  },
  {
    img: massage,
    title: "Масаж",
    text: "Всі види масажів для дітей та дорослих",
  },
];

const Directly = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Напрями" />
      <DirectlyList items={direct} />
    </section>
  );
};

export default Directly;
