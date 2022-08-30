import React, { useState, useEffect } from "react";

import PoolIcon from "@mui/icons-material/Pool";
import ParkIcon from "@mui/icons-material/Park";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';

import BGhero from '../resources/images/canvaBG.png'
import widdingImg from "../resources/images/widding.jpg";
import kidsImg from "../resources/images/kids.jpg";
import chalet from "../resources/images/chalet.jpg";
import foodImg from "../resources/images/food.jpg";
import pool2Img from "../resources/images/pool2.jpg";


import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

const slides = [widdingImg, kidsImg, chalet, foodImg, pool2Img];

const sliderStyles = {
  position: "relative",
  height: "100vh",
  width: "100vw",
  backgroundImage: `url(${BGhero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    width: "70%",
    height: "70%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "5px solid #333",
    backgroundImage: `url(${slides?.length ? slides[currentIndex] : ""})`,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  };

  useEffect(() => {
    let threeSeconds = 1000 * 3;

    let interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, threeSeconds);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "2.2rem",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            gap: { xs: "0.2rem", md: "0.4rem" },
            marginTop: { xs: "1.2rem", md: "2.4rem" },
            width: { xs: "100%", sm: "100%", md: "45vw" },
            height: "55%",
            borderRadius: "10px 100px / 120px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#081308",
              textAlign: "end",
              fontSize: { xs: "0.9rem", md: "1.2rem" },
            }}
          >
            وصلناك لافخم شاليهات الاردن وباقل سعر ممكن حاب تتاكد اتواصل معنا
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: `700`,
              color: "#333",
              textAlign: "end",
              fontSize: { xs: "2.8rem", md: "3.4rem" },
            }}
          >
            ! احجز رحلتك صح
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: "#333 2px solid",
              width: "50%",
              marginTop: { xs: "1.2rem", md: "2.4rem" },
              color: "#333",
            }}
          >
            تصفح الأن
          </Button>
        </Container>
        <Box
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box style={slideStylesWidthBackground}></Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
            }}
          >
            
              <PoolIcon
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  color:"#0000FF"
                }}
              />
              <ParkIcon
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  color:"#00FF00"
                }}
              />
            
              <EmojiEmotionsIcon
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  color:"#ffde34 "

                }}
              />
              <VolunteerActivismIcon
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                }}
              />
              <FavoriteIcon
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  color:"#ff0000 "
                }}
              />
            
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ImageSlider;
