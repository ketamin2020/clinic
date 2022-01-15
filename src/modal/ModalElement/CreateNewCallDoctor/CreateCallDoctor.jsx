import React from "react";
import style from "../ModalElement.module.css";
import logo from "../../../images/logo.webp";

const CreateCallDoctor = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <img className={style.logo} width="50" src={logo} alt="" />
        <h4 className={style.title}>Викликати лікаря додому</h4>
        <p className={style.subTitle}>Ви можете зателефонувати нам</p>

        <a className={style.telLink} href="tel:0688606061">
          (068) 860-60-61
        </a>
        <a className={style.telLink} href="tel:0688606062">
          (068) 860-60-62
        </a>
      </div>
    </div>
  );
};

export default CreateCallDoctor;
