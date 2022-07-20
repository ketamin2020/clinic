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
    { title: "Консультація  хірурга", cost: "500 грн" },
    { title: "Консультація ортопеда-травматолога", cost: "500 грн" },
    { title: "Консультація невролога ", cost: "500 грн" },
    { title: "Консультація отоларинголога", cost: "500 грн" },
    { title: "Консультація кардіолога", cost: "500 грн" },
    { title: "Консультація гастроентеролога", cost: "500 грн" },
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
    { title: "Інфанрікс ІПВ ХІБ (INFANRIX™ IPV HIB)", cost: "1600 грн" },
    { title: "Ротарікс (ROTARIX™)", cost: "1000 грн" },
    { title: "Тетраксім (TETRAXIM®)", cost: "1100 грн" },
    { title: "Пентаксім (PENTAXIM®)", cost: "1500 грн" },
    { title: "Гексаксім (HEXAXIM™)", cost: "1800 грн" },
    { title: "Синфлорікс (SYNFLORIX™)", cost: "1650 грн" },
    { title: "Превенар 13 (PREVENAR 13®)", cost: "2500 грн" },
    { title: "Німенрікс (NIMENRIX®)", cost: "1800 грн" },
    { title: "Менактра (MENACTRA®)", cost: "1800 грн" },
    { title: "Варілрикс(VARILRIX™)", cost: "1500 грн" },
    { title: "Хаврікс 720 (HAVRIX™ 720)", cost: "850 грн" },
    { title: "Енджерикс-В(ENGERIX™)", cost: "650 грн" },
    { title: "Бустрікс Поліо (BOOSTRIX™ POLIO)", cost: "1200 грн" },
    { title: "Бустрікс (BOOSTRIX™)", cost: "950 грн" },
    { title: "Пріорікс (PRIORIX™)", cost: "750 грн" },
    { title: "ДжіСі Флю (GC FLU®)", cost: "600 грн" },
    { title: "Ваксігрип (VAXIGRIP™)", cost: "650 грн" },
  ],
  diagnistics: [
    { title: "Доплер вен та артерій нижніх кінцівок", cost: "600 грн" },
    { title: "Доплер судин голови", cost: "380 грн" },
    { title: "УЗД калитки (мошонки)", cost: "400 грн" },
    { title: "Доплер судин шиї", cost: "350 грн" },
    { title: "Нейросонографія + кульшовий", cost: "680 грн" },
    { title: "Доплер судин нирок", cost: "600" },
    { title: "УЗД одного органу", cost: "280 грн" },
    {
      title: "УЗД нирок + надниркової залози + сечовий міхур",
      cost: "380 грн",
    },
    { title: "УЗД органів малого тазу (трансвагінально)", cost: "350 грн" },
    {
      title: "УЗД органів малого тазу (абдомінально) + сечовий міхур",
      cost: "340 грн",
    },
    { title: "УЗД серця", cost: "550 грн" },
    { title: "УЗД ОЧП + жовчний міхур з навантаженням", cost: "400 грн" },
    { title: "Нейросонографія", cost: "380 грн" },
    { title: "УЗД кульшових суглобів", cost: "380 грн" },
    { title: "УЗД колінних суглобів", cost: "380 грн" },
    { title: "Доплер судин голови та шиї", cost: "600 грн" },
    { title: "УЗД щитоподібної залози або слинних залоз", cost: "350 грн" },
    { title: "УЗД м`яких тканин шиї + лімфатичні вузли", cost: "450 грн" },
    { title: "УЗД м`яких тканин (одна анатомічна зона)", cost: "300 грн" },
    { title: "УЗД лімфатичних вузлів (одна анатомічна зона)", cost: "280 грн" },
    { title: "УЗД молочних залоз", cost: "340 грн" },
    { title: "УЗД грудних залоз (чоловіки)", cost: "300 грн" },
    {
      title:
        "УЗД органів черевної порожнини дорослі (печінка, жовчний міхур, жовчні протоки, підшлункова залоза, селезінка)",
      cost: "320 грн",
    },
    {
      title:
        "УЗД органів черевної порожнини діти (печінка, жовчний міхур, жовчні протоки, підшлункова залоза, селезінка)",
      cost: "320 грн",
    },
    {
      title:
        "УЗД органів черевної порожнини, нирки, надниркові залози - дорослі",
      cost: "380 грн",
    },
    {
      title: "УЗД органів черевної порожнини, нирки, надниркові залози - діти",
      cost: "380 грн",
    },
    { title: "УЗД нирок, надниркові залози", cost: "320 грн" },
    {
      title:
        "УЗД сечового міхура, передміхурової залози, трансабдомінально (з визначенням залишкової сечі)",
      cost: "330 грн",
    },
    {
      title:
        "УЗД сечового міхура, передміхурової залози, трансректально (з визначенням залишкової сечі)",
      cost: "330 грн",
    },
    { title: "УЗД сечового міхура", cost: "230 грн" },
    { title: "УЗД жовчного міхура", cost: "220 грн" },
    { title: "УЗД калитки (мошонки) - дитина", cost: "250 грн" },
    { title: "УЗД плевральних порожнин", cost: "250 грн" },
  ],
  manual: [
    { title: "Консультація масажиста + лікування ", cost: "250 грн" },
    { title: "Загальний масаж - 90 хв. ", cost: "800 грн" },
    { title: "Загальний масаж - 60 хв. ", cost: "600 грн" },
    { title: "Шийно-комірцева ділянка - 15 хв. ", cost: "200 грн" },
    {
      title: "Шийно-комірцева ділянка та верхніх кінцівок - 25-30 хв.",
      cost: "400 грн",
    },
    {
      title: " Вздовж хребта та поперековий відділ(спина) - 30 хв.",
      cost: "400 грн",
    },
    { title: "Масаж верхніх кінцівок - 20 хв. ", cost: "350 грн" },
    { title: "Масаж нижніх кінцівок - 30 хв. ", cost: "400 грн" },
    { title: "Масаж голови - 15 хв. ", cost: "180 грн" },
    { title: "Бронходренажний - 20-25 хв. ", cost: "350 грн" },
    { title: "Дитячий до року - 30 хв. ", cost: "350 грн" },
    { title: "Дитячий до року - 45-60 хв.", cost: "500 грн" },
    { title: "Антицелюлітний - 45 хв.", cost: "600 грн" },
    { title: "Антицелюлітний - 60 хв. ", cost: "700 грн" },
    { title: "Медовий спина -  30 хв. ", cost: "450 грн" },
    { title: "Медовий загальний - 60 хв.", cost: "750 грн" },
    { title: "Лімфодренажний - 60 хв. ", cost: "700 грн" },
    { title: "Стоун масаж загальний - 90 хв. ", cost: "900 грн" },
    { title: "Стоун масаж спина - 45 хв. ", cost: "550 грн" },
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
      {/* <Accordeon title="+ Діагностика">
        <PriceList items={data.diagnistics} />
      </Accordeon> */}
      <Accordeon title="+ Масаж">
        <PriceList items={data.manual} />
      </Accordeon>
    </section>
  );
};

export default Price;
