import React, { useState } from "react";
import Slider from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = ({ children, adaptive }) => {
  const [indexSlide, setIndexSlide] = useState(0);
  const NextArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const PrevArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dotsClass: style.sliderDots,
    prevArrow: <PrevArrow classN={style.prevArrow} />,
    nextArrow: <NextArrow classN={style.nextArrow} />,
    beforeChange: (prev, next) => setIndexSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (index) => (
      <button
        aria-label="slider-button"
        style={index === indexSlide ? { backgroundColor: " #e7a6ff" } : null}
      ></button>
    ),
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default MainSlider;
