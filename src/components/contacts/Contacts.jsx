import React from "react";
import style from "./Contacts.module.css";
import Map from "../../common/GoogleMaps/Map";
import HeadContacts from "../../common/HeadContacts/HeadContacts";

const Contacts = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <HeadContacts />
      </div>
      <div className={style.wrapper}>
        <Map />
      </div>
    </section>
  );
};

export default Contacts;
