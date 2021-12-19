import React from "react";
import Slider from "../../common/Slider/Slider";
import style from "./Advantages.module.css";
import equipmentImg from "../../images/slider/equioment.jpeg";
import individualImg from "../../images/slider/individual.jpeg";
import standartImg from "../../images/slider/standart.jpeg";
import trustImg from "../../images/slider/trustus.jpeg";
import consiliumImg from "../../images/slider/consilium.jpeg";

const Advantages = () => {
  return (
    <section className={style.sectionAdvantage}>
      <Slider>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img className={style.itemImage} src={equipmentImg} alt="" />

          <article className={style.itemContent}>
            <h4 className={style.itemTitle}>Сучасне обладнання</h4>
            <p className={style.itemText}>
              В арсеналі – сучасне діагностичне та лікувальне обладнання.
              Лабораторні дослідження проводяться з урахуванням своєї
              діагностичної лабораторії.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img className={style.itemImage} src={individualImg} alt="" />

          <article className={style.itemContent}>
            <h4 className={style.itemTitle}>Індивідуальний підхід</h4>
            <p className={style.itemText}>
              З першого дня роботи ми дотримуємося індивідуального підходу до
              проблеми кожного клієнта, тому що переконані, що це запорука
              ефективного лікування та мінімальний ризик виникнення ускладнень.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img className={style.itemImage} src={standartImg} alt="" />

          <article className={style.itemContent}>
            <h4 className={style.itemTitle}>Відповідність стандарту</h4>
            <p className={style.itemText}>
              Лікування проводиться відповідно до міжнародних рекомендацій та
              стандартів ВООЗ, стандартів діагностики та лікування Міністерства
              Охорони Здоров'я України.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img className={style.itemImage} src={consiliumImg} alt="" />

          <article className={style.itemContent}>
            <h4 className={style.itemTitle}>Найкращі спеціалісти</h4>
            <p className={style.itemText}>
              Ми приділяємо особливу увагу підбору персоналу, а також створюємо
              всі умови для їхнього професійного зростання та вдосконалення.
            </p>
          </article>
        </div>
        <div className={style.advantageItem}>
          <div className={style.itemImageLayout}></div>
          <img className={style.itemImage} src={trustImg} alt="" />

          <article className={style.itemContent}>
            <h4 className={style.itemTitle}>Нам довіряють</h4>
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
