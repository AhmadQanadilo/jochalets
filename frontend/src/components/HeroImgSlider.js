import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

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
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",

    border: `3px solid ${theme.palette.secondary.light}`,
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
          gap: "6.2rem",
          position: "absolute",
          top: "0",
          left: "0",
          padding:"4.3rem 0 "

        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "end",
            gap: { xs: "0.2rem", md: "0.4rem" },
            width: { xs: "100%", sm: "100%", md: "45vw" },
            height: "auto",
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
            وصلناك لافخم شاليهات ومزارع الاردن وباقل سعر ممكن حاب تتاكد اتواصل معنا
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: `700`,
              color: "#333",
              textAlign: "end",
              fontSize: { xs: "2.4rem", md: "3.4rem" },
            }}
          >
            ! احجز <span style={{color:theme.palette.secondary.main}}>شالية</span> بطريقة صح
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: "#333 2px solid",
              width: "50%",
              marginTop: { xs: "1.2rem", md: "2.4rem" },
              border:`${theme.palette.secondary.light} solid 3px`
            }}
          >
            تصفح الأن
          </Button>
        </Container>
        <Box
          style={{
            width: "90%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box style={slideStylesWidthBackground}></Box>
       
        </Box>
      </Box>
    </div>
  );
}

export default ImageSlider;
