import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../context/Context";
import Button from "../uikit/Button/Button";
import DocSlider from "../../common/DoctorsSliders/DocSlider";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import doctor from "../../images/doctors/doctor_haus.jpeg";
import style from "./Doctors.module.css";
import document from "../../images/icons/document.svg";

const Doctors = () => {
  const { onOpenMakerHeandler } = useContext(CustomContext);
  return (
    <section className={style.section}>
      <SectionTitle text="Наші лікарі" />

      <DocSlider>
        <article className={style.doctorsItem}>
          <div className={style.itemWrapper}>
            <div className={style.itemImageWraper}>
              <img className={style.itemImage} src={doctor} alt="" />
            </div>
            <div className={style.itemContentWraper}>
              <p className={style.doctorName}>Gregory House</p>
              <p className={style.proffesion}>M.D. Doctor</p>
              <Button
                styleName={style.serviceBtn}
                text="Записатись"
                bgColor="blue"
                icons={document}
                type="ovale"
                heandler={onOpenMakerHeandler}
              />
            </div>
          </div>
        </article>

        <article className={style.doctorsItem}>
          <div className={style.itemWrapper}>
            <div className={style.itemImageWraper}>
              <img className={style.itemImage} src={doctor} alt="" />
            </div>
            <div className={style.itemContentWraper}>
              <p className={style.doctorName}>Gregory House</p>
              <p className={style.proffesion}>M.D. Doctor</p>
              <Button
                styleName={style.serviceBtn}
                text="Записатись"
                bgColor="blue"
                icons={document}
                type="ovale"
                heandler={onOpenMakerHeandler}
              />
            </div>
          </div>
        </article>
        <article className={style.doctorsItem}>
          <div className={style.itemWrapper}>
            <div className={style.itemImageWraper}>
              <img className={style.itemImage} src={doctor} alt="" />
            </div>
            <div className={style.itemContentWraper}>
              <p className={style.doctorName}>Gregory House</p>
              <p className={style.proffesion}>M.D. Doctor</p>
              <Button
                styleName={style.serviceBtn}
                text="Записатись"
                bgColor="blue"
                icons={document}
                type="ovale"
                heandler={onOpenMakerHeandler}
              />
            </div>
          </div>
        </article>
        <article className={style.doctorsItem}>
          <div className={style.itemWrapper}>
            <div className={style.itemImageWraper}>
              <img className={style.itemImage} src={doctor} alt="" />
            </div>
            <div className={style.itemContentWraper}>
              <p className={style.doctorName}>Gregory House</p>
              <p className={style.proffesion}>M.D. Doctor</p>
              <Button
                styleName={style.serviceBtn}
                text="Записатись"
                bgColor="blue"
                icons={document}
                type="ovale"
                heandler={onOpenMakerHeandler}
              />
            </div>
          </div>
        </article>
      </DocSlider>
      <div className={style.buttonWrapper}>
        <NavLink className={style.viewAllBtn} to="doctors">
          Переглянути усіх
        </NavLink>
      </div>
    </section>
  );
};

export default Doctors;
