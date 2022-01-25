import React from "react";

const Video = ({ customStyle }) => {
  return (
    <iframe
      data-aos="fade-up-right"
      className={customStyle}
      src="https://www.youtube.com/embed/8UT_c6RWPQ0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
