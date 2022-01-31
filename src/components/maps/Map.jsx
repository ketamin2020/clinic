import React from "react";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import GoogleMap from "../../common/GoogleMaps/Map";
import style from "./Map.module.css";
const Map = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Як нас знайти?" />
      <GoogleMap />
    </section>
  );
};

export default Map;
