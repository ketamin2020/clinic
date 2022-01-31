import React from "react";
import Tooltip from "../tooltip/Tolltip";
import map from "../../images/map.webp";
import style from "./Map.module.css";

const Map = () => {
  return (
    <div className={style.mapContainer}>
      <Tooltip styleWraper={style.tooltipWrapper} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F,+34,+%D0%9A%D1%80%D1%8E%D0%BA%D0%BE%D0%B2%D1%89%D0%B8%D0%BD%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08136/@50.3699556,30.3851311,17z/data=!4m5!3m4!1s0x40d4c992930b7855:0xd14e0ff6b1e6044c!8m2!3d50.3699447!4d30.3855872?hl=ru"
      >
        <img
          className={style.mapImage}
          src={map}
          alt="maps"
          width="100%"
          height="auto"
        />
      </a>
    </div>
  );
};

export default Map;
