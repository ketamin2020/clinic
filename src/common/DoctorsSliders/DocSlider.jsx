import React, { useState } from "react";
import Slider from "react-slick";
import style from "./DocSliders.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DocSlider = ({ children, adaptive }) => {
  const [indexSlide, setIndexSlide] = useState(0);
  const NextArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const PrevArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const adaptiveSetting = {
    centerMode: true,
    centerPadding: "0",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoPlay: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: style.sliderDots,
    prevArrow: <PrevArrow classN={style.prevArrow} />,
    nextArrow: <NextArrow classN={style.nextArrow} />,
    beforeChange: (prev, next) => setIndexSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (index) => (
      <button
        aria-label="button"
        style={index === indexSlide ? { backgroundColor: " #e7a6ff" } : null}
      ></button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...adaptiveSetting}>{children}</Slider>;
};

export default DocSlider;
