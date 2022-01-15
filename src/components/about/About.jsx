import React from "react";
import SectionTitle from "../uikit/SectionTitle/SectionTItle";
import Total from "../total/Total";
import Gallery from "react-grid-gallery";
import image_1 from "../../images/clinic/image_1_1_11zon.webp";
import image_2 from "../../images/clinic/image_2_2_11zon.webp";
import image_3 from "../../images/clinic/image_3_3_11zon.webp";
import image_4 from "../../images/clinic/image_4_4_11zon.webp";
import image_5 from "../../images/clinic/image_5_5_11zon.webp";
import image_6 from "../../images/clinic/image_6_6_11zon.webp";
import image_7 from "../../images/clinic/image_7_7_11zon.webp";

const About = () => {
  const IMAGES = [
    {
      src: image_2,
      thumbnail: image_2,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: image_1,
      thumbnail: image_1,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },

    {
      src: image_4,
      thumbnail: image_4,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: image_5,
      thumbnail: image_5,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: image_6,
      thumbnail: image_6,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: image_7,
      thumbnail: image_7,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: image_3,
      thumbnail: image_3,
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
  ];

  return (
    <section>
      <Total />
      <SectionTitle text="Наша клініка" />
      <Gallery
        images={IMAGES}
        backdropClosesModal={true}
        imageCountSeparator=" з "
      />
    </section>
  );
};

export default About;
