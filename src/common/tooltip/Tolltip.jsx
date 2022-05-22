import React from "react";
import style from "./Tooltip.module.css";
import clinic from "../../images/clinic/image_2_2_11zon.webp";
const Tolltip = ({ styleWraper }) => {
  return (
    <div className={styleWraper}>
      <div className={style.card}>
        <div className={style.text}>
          <div className={style.title}>
            <div className={style.tooltip}></div>
            <svg
              className={style.popupBg}
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
              className={style.popupOutline}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 130"
              height="130"
              width="300"
            >
              <g strokeWidth="" strokeLinecap="round">
                <path
                  className={style.popupOutlineLeft}
                  d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                  fill="#04c4ff"
                  stroke="#04c4ff"
                />
                <path
                  className={style.popupOutlineRight}
                  d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                  fill="#04c4ff"
                  stroke="#04c4ff"
                />
              </g>
            </svg>
            <div className={style.popupText}>
              <p className={style.content}>
                с. Крюківщина, вул. Одеська 34, прим. 112
              </p>
              <a
                className={style.mapLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ua/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D1%81%D1%96%D0%BC%D0%B5%D0%B9%D0%BD%D0%BE%D1%97+%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B8+%D0%A1%D1%96%D0%BC%E2%80%99%D1%8F/@50.3692117,30.3826274,14z/data=!4m9!1m2!2m1!1z0YbQtdC90YLRgCDRgdGW0LzQtdC50L3QvtGXINC80LXQtNC40YbQuNC90Lg!3m5!1s0x40d4c9f7c08c6811:0x510607c21e83a66c!8m2!3d50.3699447!4d30.3855872!15sCizRhtC10L3RgtGAINGB0ZbQvNC10LnQvdC-0Zcg0LzQtdC00LjRhtC40L3QuJIBDm1lZGljYWxfY2VudGVy?hl=ru"
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
