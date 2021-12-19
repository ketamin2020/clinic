import React from "react";
import DocSlider from "../../common/DoctorsSliders/DocSlider";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import doctor from "../../images/doctors/doctor_haus.jpeg";
import style from "./Doctors.module.css";

const Doctors = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Наші лікарі" />
      <ul>
        <DocSlider>
          <li className={style.doctorsItem}>
            <div className={style.itemWrapper}>
              <div className={style.itemImageWraper}>
                <img className={style.itemImage} src={doctor} alt="" />
              </div>
              <div className={style.itemContentWraper}>
                <p className={style.doctorName}>Gregory House</p>
                <p className={style.proffesion}>M.D. Doctor</p>
              </div>
            </div>
          </li>

          <li className={style.doctorsItem}>
            <div className={style.itemWrapper}>
              <div className={style.itemImageWraper}>
                <img className={style.itemImage} src={doctor} alt="" />
              </div>
              <div className={style.itemContentWraper}>
                <p className={style.doctorName}>Gregory House</p>
                <p className={style.proffesion}>M.D. Doctor</p>
              </div>
            </div>
          </li>
          <li className={style.doctorsItem}>
            <div className={style.itemWrapper}>
              <div className={style.itemImageWraper}>
                <img className={style.itemImage} src={doctor} alt="" />
              </div>
              <div className={style.itemContentWraper}>
                <p className={style.doctorName}>Gregory House</p>
                <p className={style.proffesion}>M.D. Doctor</p>
              </div>
            </div>
          </li>
          <li className={style.doctorsItem}>
            <div className={style.itemWrapper}>
              <div className={style.itemImageWraper}>
                <img className={style.itemImage} src={doctor} alt="" />
              </div>
              <div className={style.itemContentWraper}>
                <p className={style.doctorName}>Gregory House</p>
                <p className={style.proffesion}>M.D. Doctor</p>
              </div>
            </div>
          </li>
        </DocSlider>
      </ul>
    </section>
  );
};

export default Doctors;
