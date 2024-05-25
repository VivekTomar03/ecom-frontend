import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import img1 from "../../assests/sliderimages/img11.jpg";
import img2 from "../../assests/sliderimages/img12.jpg";
import img3 from "../../assests/sliderimages/img3.jpg";
import img4 from "../../assests/sliderimages/img4.jpg";
import img5 from "../../assests/sliderimages/img5.jpg";
import img6 from "../../assests/sliderimages/img6.jpg";
import img7 from "../../assests/sliderimages/img7.jpg";
import img8 from "../../assests/sliderimages/img8.jpg";
import img9 from "../../assests/sliderimages/img9.jpg";
import img10 from "../../assests/sliderimages/img10.jpg";

import Slider from "react-slick";

const Globalbrand = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Box>
      <Heading mb={10}  fontSize={{ base: "small", sm: "small", md: "large", lg: "xx-large" }}>
      GRAND GLOBAL BRANDS
      </Heading>
      <Slider {...settings}
      >
        <div>
          <img src={img1} alt="1" />
        </div>
        <div>
          <img src={img2} alt="1" />
        </div>

        <div>
          <img src={img3} alt="1" />
        </div>

        <div>
          <img src={img4} alt="1" />
        </div>

        <div>
          <img src={img6} alt="1" />
        </div>

        <div>
          <img src={img5} alt="1" />
        </div>

        <div>
          <img src={img7} alt="1" />
        </div>

        <div>
          <img src={img8} alt="1" />
        </div>

        <div>
          <img src={img9} alt="1" />
        </div>

        <div>
          <img src={img10} alt="1" />
        </div>
      </Slider>
    </Box>
  );
};

export default Globalbrand;
