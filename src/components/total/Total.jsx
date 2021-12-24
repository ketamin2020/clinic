import React, { useContext } from "react";
import { CustomContext } from "../../context/Context";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import Button from "../../components/uikit/Button/Button";
import style from "./Total.module.css";
import family from "../../images/family.png";
import document from "../../images/icons/document.svg";

const Total = () => {
  const { onOpenMakerHeandler } = useContext(CustomContext);
  return (
    <section className={style.section}>
      <SectionTitle text="Ви хочете?" />
      <div className={style.wrapper}>
        <div className={style.contentWrapper}>
          <ul className={style.list}>
            <li className={style.item}>
              Переконатись у професіоналізмі наших лікарів?
            </li>
            <li className={style.item}>Протестувати наш дружній сервіс?</li>
            <li className={style.item}>Заключити декларацію з лікарем?</li>
            <li className={style.item}>Вакцинуватись?</li>
            <li className={style.item}>
              Хочете на власні очі побачити нашу клініку?
            </li>
            <li className={style.item}>
              Отримати направлення до вузького спеціаліста?
            </li>
          </ul>
          <Button
            styleName={style.serviceBtn}
            text="Записатися на прийом"
            bgColor="blue"
            icons={document}
            heandler={onOpenMakerHeandler}
          />
        </div>
        <div className={style.imageWrapper}>
          <img src={family} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Total;
