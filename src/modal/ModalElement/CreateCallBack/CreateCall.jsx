import React, { useState } from "react";
import style from "../ModalElement.module.css";
import logo from "../../../images/logo.png";

const CreateCall = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <img className={style.logo} width="50" src={logo} alt="" />
        <h4 className={style.title}>Форма зворотного виклику</h4>

        <form className={style.form}>
          <input
            className={style.inputTel}
            type="tel"
            placeholder="Введіть Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button className={style.btnSubmit} type="submit">
            Зателефонуйте мені
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCall;
