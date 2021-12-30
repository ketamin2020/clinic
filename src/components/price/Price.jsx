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
    { title: "Забір венозної або капілярної крові", cost: "50 грн" },
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
    { title: "Інфанрікс (INFANRIX™)", cost: "999 грн" },
    { title: "Інфанрікс Гекса (INFANRIX HEXA™)", cost: "999 грн" },

    { title: "Тетраксім (TETRAXIM®)", cost: "999 грн" },

    { title: "Пентаксім (PENTAXIM®)", cost: "999 грн" },

    { title: "Гексаксім (HEXAXIM™)", cost: "999 грн" },

    { title: "Бустрікс (BOOSTRIX™)", cost: "999 грн" },

    { title: "Пріорікс (PRIORIX™)", cost: "999 грн" },

    { title: "Імовакс поліо (IMOVAX POLIO®)", cost: "999 грн" },
    { title: "Хіберікс (HIBERIX™)", cost: "999 грн" },

    { title: "Енджерикс-В для дорослих (ENGERIX™)", cost: "999 грн" },

    { title: "Енджерикс-В для дітей (ENGERIX™)", cost: "999 грн" },

    { title: "Превенар 13 (PREVENAR 13®)", cost: "999 грн" },
    { title: "Менактра (MENACTRA®)", cost: "999 грн" },
    {
      title: "Огляд лікаря перед вакцинацією",
      cost: "400 грн",
    },
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
