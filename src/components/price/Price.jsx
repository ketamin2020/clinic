import React from "react";
import style from "./Price.module.css";
import Accordeon from "../../components/uikit/accordeon/Accordeon";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import PriceList from "../../common/PriceList/PriceList";
const data = {
  consultation: [
    { title: "Консультація педіатра", cost: "450 грн" },
    {
      title: "Консультація педіатра із укладанням декларації",
      cost: "450 грн",
    },
    { title: "Повторна консультація педіатра", cost: "400 грн" },
    { title: "Консультація сімейного лікаря", cost: "450 грн" },
    {
      title: "Консультація сімейного лікаря із укладанням декларації",
      cost: "450 грн",
    },
    { title: "Повторна консультація сімейного лікаря", cost: "400 грн" },
    { title: "Консультація дитячого хірурга", cost: "500 грн" },
    { title: "Консультація ортопеда-травматолога", cost: "500 грн" },
    { title: "Консультація невролога ", cost: "500 грн" },
    { title: "Консультація отоларинголога", cost: "500 грн" },
  ],
  manipulation: [
    { title: "Забір венозної або капілярної крові", cost: "60 грн" },
    { title: "Забір біологічного матеріалу на дослідження", cost: "70 грн" },
    { title: "Внутрішньовенна ін'єкція", cost: "150 грн" },
    { title: "Внутрішньом'язова ін'єкція", cost: "100 грн" },
    {
      title: "Алергічна проба на препарат (без вартості препарату )",
      cost: "50 грн",
    },
    {
      title: "Електрокардіограмма",
      cost: "100 грн",
    },
  ],
  vactination: [
    { title: "Інфанрікс Гекса (INFANRIX HEXA™)", cost: "1900 грн" },
    { title: "Інфанрікс ІПВ (INFANRIX™ IPV)", cost: "1200 грн" },
    { title: "Інфанрікс (INFANRIX™)", cost: "1000 грн" },
    { title: "Інфанрікс ІПВ ХІБ (INFANRIX™ IPV HIB)", cost: "1500 грн" },
    { title: "Ротарікс (ROTARIX™)", cost: "1000 грн" },
    { title: "Тетраксім (TETRAXIM®)", cost: "1100 грн" },
    { title: "Пентаксім (PENTAXIM®)", cost: "1500 грн" },
    { title: "Гексаксім (HEXAXIM™)", cost: "1800 грн" },
    { title: "Синфлорікс (SYNFLORIX™)", cost: "1550 грн" },
    { title: "Превенар 13 (PREVENAR 13®)", cost: "2500 грн" },
    { title: "Німенрікс (NIMENRIX®)", cost: "1700 грн" },
    { title: "Менактра (MENACTRA®)", cost: "1800 грн" },
    { title: "Варілрикс(VARILRIX™)", cost: "1400 грн" },
    { title: "Хаврікс 720 (HAVRIX™ 720)", cost: "850 грн" },
    { title: "Енджерикс-В(ENGERIX™)", cost: "550 грн" },
    { title: "Бустрікс Поліо (BOOSTRIX™ POLIO)", cost: "1050 грн" },
    { title: "Бустрікс (BOOSTRIX™)", cost: "950 грн" },
    { title: "Пріорікс (PRIORIX™)", cost: "650 грн" },

    { title: "ДжіСі Флю (GC FLU®)", cost: "650 грн" },
    { title: "Ваксігрип (VAXIGRIP™)", cost: "650 грн" },
  ],
};

const Price = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Вартість послуг" />
      <Accordeon title=" + Консультації">
        <PriceList items={data.consultation} />
      </Accordeon>
      <Accordeon title="+ Сестринські маніпуляції">
        <PriceList items={data.manipulation} />
      </Accordeon>
      <Accordeon title="+ Вакцинація">
        <PriceList items={data.vactination} />
      </Accordeon>
    </section>
  );
};

export default Price;
