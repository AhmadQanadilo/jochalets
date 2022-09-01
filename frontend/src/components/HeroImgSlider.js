import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import "./heroImgCss.css";
import PoolIcon from "@mui/icons-material/Pool";
import ParkIcon from "@mui/icons-material/Park";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BGhero from "../resources/images/canvaBG.png";
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
  zIndex: "-3",
  display: "flex",
  flexDirection: {xs:"column", sm:"column", md:"row"},
  justifyContent:"center",
  alignItems:"center",
  gap: "5.2rem",
  boxSizing:"border-box",
  padding:"4.2rem 0 0 0"
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
    backgroundImage: `url(${slides?.length ? slides[currentIndex] : ""})`,

    // ":before": {
    //   position: "absolute",
    //   top: "-15rem",
    //   right: "-1.5rem",
    //   bottom: "-1.5rem",
    //   left: "-1.5rem",
    //   backgroundColor:"#333",
    //   content: `''`,
    // },
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
    <Box sx={sliderStyles}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: { xs: "0.6rem", md: "0.4rem" },
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
           !! وصلناك لافخم شاليهات ومزارع الاردن وباقل سعر كمان شو بتستنى 
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
          ! احجز{" "}
          <span style={{ color: theme.palette.secondary.main }}>شاليه</span>{" "}
          بطريقة صح
        </Typography>
        <Button
          variant="outlined"
          sx={{
            border: "#333 2px solid",
            width: "50%",
            marginTop: { xs: "1.2rem", md: "2.4rem" },
          }}
        >
          تصفح الأن
        </Button>
      </Container>
      <Box
        className="slideStylesWidthBackground"
        style={slideStylesWidthBackground}
      ></Box>
    </Box>
  );
}

export default ImageSlider;
