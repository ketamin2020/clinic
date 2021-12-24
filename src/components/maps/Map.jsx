import React from "react";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import style from "./Map.module.css";

const Map = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Як нас знайти?" />
      <iframe
        src="http://maps.google.com/maps?q=25.3076008,51.4803216&z=16&output=embed"
        height="450"
        width="100%"
        title="map"
      ></iframe>
    </section>
  );
};

export default Map;
