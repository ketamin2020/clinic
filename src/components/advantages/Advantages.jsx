import React from "react";
import Slider from "../../common/Slider/Slider";
import style from "./Advantages.module.css";
import individualImg from "../../images/slider/individual.webp";
import standartImg from "../../images/slider/standart.webp";
import trustImg from "../../images/slider/trustus.webp";
import consiliumImg from "../../images/slider/consilium.webp";

const Advantages = () => {
  return (
    <section className={style.section}>
      <Slider>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img
            width="300"
            height="300"
            className={style.itemImage}
            src={individualImg}
            alt=""
          />

          <article className={style.itemContent}>
            <p className={style.itemTitle}>Індивідуальний підхід</p>
            <p className={style.itemText}>
              З першого дня роботи ми дотримуємося індивідуального підходу до
              проблеми кожного клієнта, тому що переконані, що це запорука
              ефективного лікування та мінімальний ризик виникнення ускладнень.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img
            width="300"
            height="300"
            className={style.itemImage}
            src={standartImg}
            alt=""
          />

          <article className={style.itemContent}>
            <p className={style.itemTitle}>Відповідність стандарту</p>
            <p className={style.itemText}>
              Лікування проводиться відповідно до міжнародних рекомендацій та
              стандартів ВООЗ, стандартів діагностики та лікування Міністерства
              Охорони Здоров'я України.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img
            width="300"
            height="300"
            className={style.itemImage}
            src={consiliumImg}
            alt=""
          />

          <article className={style.itemContent}>
            <p className={style.itemTitle}>Найкращі спеціалісти</p>
            <p className={style.itemText}>
              Ми приділяємо особливу увагу підбору персоналу, а також створюємо
              всі умови для їхнього професійного зростання та вдосконалення.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img
            width="300"
            height="300"
            className={style.itemImage}
            src={trustImg}
            alt=""
          />

          <article className={style.itemContent}>
            <p className={style.itemTitle}>Нам довіряють</p>
            <p className={style.itemText}>
              Нас рекомендують своїм близьким, а отже – довіряють. Понад 60%
              пацієнтів приходять до нас за рекомендацією своїх близьких, рідних
              чи знайомих.
            </p>
          </article>
        </div>
      </Slider>
    </section>
  );
};

export default Advantages;
