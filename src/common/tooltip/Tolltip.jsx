import React from "react";
import style from "./Tooltip.module.css";
import clinic from "../../images/clinic/image_2_2_11zon.webp";
const Tolltip = ({ styleWraper }) => {
  return (
    <div className={styleWraper}>
      <div class={style.card}>
        <div class={style.text}>
          <div class={style.title}>
            <div class={style.tooltip}></div>
            <svg
              class={style.popupBg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 130"
              height="130"
              width="300"
            >
              <path
                d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                fill="#303030"
                stroke="#000"
              />
            </svg>
            <svg
              class={style.popupOutline}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 130"
              height="130"
              width="300"
            >
              <g stroke-width="2" stroke-linecap="round">
                <path
                  class={style.popupOutlineLeft}
                  d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                  fill="#04c4ff"
                  stroke="#04c4ff"
                />
                <path
                  class={style.popupOutlineRight}
                  d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                  fill="#04c4ff"
                  stroke="#04c4ff"
                />
              </g>
            </svg>
            <div class={style.popupText}>
              <p className={style.content}>
                с. Крюківщина, вул. Одеська 34, прим. 112
              </p>
              <a
                className={style.mapLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F,+34,+%D0%9A%D1%80%D1%8E%D0%BA%D0%BE%D0%B2%D1%89%D0%B8%D0%BD%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08136/@50.3699556,30.3851311,17z/data=!4m5!3m4!1s0x40d4c992930b7855:0xd14e0ff6b1e6044c!8m2!3d50.3699447!4d30.3855872?hl=ru"
              >
                - Прокласти маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tolltip;
