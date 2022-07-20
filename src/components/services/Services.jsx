import React from "react";
import LinkButton from "../../components/uikit/LinkButton/LinkButton";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import style from "./Services.module.css";
import declaration from "../../images/services/declaration.webp";
import diagnostic from "../../images/services/diagnostic.webp";
import treatAdult from "../../images/services/treatAdult.webp";
import treatChild from "../../images/services/treatChild.webp";
import urgentCare from "../../images/services/urgentCare.webp";
import vactination from "../../images/services/vactination.webp";
import kinezio from "../../images/services/kinezio.jpeg";
import massage from "../../images/services/massage.jpeg";
import { directionPage } from "../../router/LinksPath";

const Services = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Наші послуги" />
      <ul className={style.servicesCardsList}>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={treatChild}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Лікування дітей та дорослих</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Лікування дітей від 0 до 18 років та дорослих по усім напрямкам
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={treatAdult}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Направлення</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Направлення до вузького спеціаліста
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={declaration}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Підписання декларації</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                В нашій клініці ви можете укласти деклараціїї з лікарями
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={vactination}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Вакцинація</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Працюємо лише з сертифікованими вакцинами європейських
                виробників
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={diagnostic}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Діагностика та аналізи</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Проводимо всі види діагностики захворювань
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={urgentCare}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Виїзні послуги</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>
                Надаємо першу медичну допомогу за всіма напрямками
              </p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={massage}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Масаж</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>Всі види масажу</p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
        <li className={style.cardItem}>
          <div className={style.itemBgWrapper}>
            <img
              width="200"
              height="200"
              className={style.itemBgImg}
              src={kinezio}
              alt=""
            />
          </div>
          <div className={style.itemContent}>
            <p className={style.itemContentText}>Кінезіотейпування</p>
            <div className={style.itemContentTextHidden}>
              <p className={style.contentHeading}>Всі види тейпування</p>
              <LinkButton path={directionPage} text="Детальніше..." />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
