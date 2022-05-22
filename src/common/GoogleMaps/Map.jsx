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
        href="https://www.google.com.ua/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D1%81%D1%96%D0%BC%D0%B5%D0%B9%D0%BD%D0%BE%D1%97+%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B8+%D0%A1%D1%96%D0%BC%E2%80%99%D1%8F/@50.3692117,30.3826274,14z/data=!4m9!1m2!2m1!1z0YbQtdC90YLRgCDRgdGW0LzQtdC50L3QvtGXINC80LXQtNC40YbQuNC90Lg!3m5!1s0x40d4c9f7c08c6811:0x510607c21e83a66c!8m2!3d50.3699447!4d30.3855872!15sCizRhtC10L3RgtGAINGB0ZbQvNC10LnQvdC-0Zcg0LzQtdC00LjRhtC40L3QuJIBDm1lZGljYWxfY2VudGVy?hl=ru"
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
