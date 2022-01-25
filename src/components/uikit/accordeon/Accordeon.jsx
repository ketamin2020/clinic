import React, { useState, useRef } from "react";
import "./style.css";
import Chevron from "./Chevron";

const Accordeon = ({ children, title }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active_accordeon" : "");
    setHeightState(
      setActive === "active_accordeon"
        ? "0px"
        : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active_accordeon"
        ? "accordion__icon"
        : "accordion__icon rotate"
    );
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="accordion__section"
    >
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>

        <Chevron
          className={`${setRotate}`}
          width={16}
          height={16}
          fill={"#fff"}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordeon;
