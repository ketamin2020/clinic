import React from "react";
import style from "./Price.module.css";
import Accordeon from "../../components/uikit/accordeon/Accordeon";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
const Price = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Вартість послуг" />
      <Accordeon title=" + Вакцинація">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
      <Accordeon title=" + Консультація педіатра">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
      <Accordeon title=" + Консультація сімейного лікаря">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
      <Accordeon title=" + УЗД">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
      <Accordeon title=" + Направлення">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
      <Accordeon title=" + Справки">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
        cupiditate iste rerum pariatur dicta, est velit hic, laboriosam
        inventore tenetur magnam, odit minus aliquid? Commodi dolorum odit
        inventore voluptates cumque.
      </Accordeon>
    </section>
  );
};

export default Price;
