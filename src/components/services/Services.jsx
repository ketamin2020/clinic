import React from "react";
import LinkButton from "../../components/uikit/LinkButton/LinkButton";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import style from "./Services.module.css";
import declaration from "../../images/services/declaration.jpeg";
import diagnostic from "../../images/services/diagnostic.png";
import treatAdult from "../../images/services/treatAdult.jpeg";
import treatChild from "../../images/services/treatChild.jpeg";
import urgentCare from "../../images/services/urgentCare.jpeg";
import vactination from "../../images/services/vactination.jpeg";

const Services = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Наші послуги" />
      <ul className={style.servicesCardsList}>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={treatChild} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Лікування дітей та дорослих</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Лікування дітей від 0 до 18 років та дорослих по усім напрямкам
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={treatAdult} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Направлення</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Направлення до вузького спеціаліста
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={declaration} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Підписання декларації</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                В нашій клініці ви можете укласти деклараціїї з лікарями
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={vactination} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Вакцинація</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Працюємо лише з сертифікованими вакцинами європейських
                виробників
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={diagnostic} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Діагностика та аналізи</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Проводимо всі види діагностики захворювань
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img className={style.itemBgImg} src={urgentCare} alt="" />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Виїзні послуги</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Надаємо першу медичну допомогу за всіма напрямками
              </p>
              <LinkButton path="" text="Детальніше..." />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
