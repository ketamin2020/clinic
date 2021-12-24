import React, { useState } from "react";
import style from "../ModalElement.module.css";
import logo from "../../../images/logo.png";

const CreateCallDoctor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <img className={style.logo} width="50" src={logo} alt="" />
        <h4 className={style.title}>Викликати лікаря додому</h4>
        <p className={style.subTitle}>Ви можете зателефонувати нам,</p>

        <a className={style.telLink} href="tel:0688606061">
          (068) 860-60-61
        </a>

        <p className={style.subTitle}>або заповнити форму</p>
        <form className={style.form}>
          <input
            className={style.inputName}
            type="text"
            placeholder="Введіть Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={style.inputTel}
            type="tel"
            placeholder="Введіть Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className={style.inputAdress}
            type="text"
            placeholder="Введіть Вашу адресу"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button className={style.btnSubmit} type="submit">
            Викликати
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCallDoctor;
