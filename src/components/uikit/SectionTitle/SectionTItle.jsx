/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef } from "react";
import style from "./SectionTitle.module.css";
import Typed from "typed.js";

const SectionTItle = ({ text }) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div className={style.titleWrapper}>
      <h2 ref={el} className={style.title}></h2>
    </div>
  );
};

export default SectionTItle;
