import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import foodImg from "../resources/images/food.jpg";
import pool2Img from "../resources/images/pool2.jpg";
import PoolIcon from "@mui/icons-material/Pool";
import ParkIcon from "@mui/icons-material/Park";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import widdingImg from "../resources/images/widding.jpg";
import kidsImg from "../resources/images/kids.jpg";
import chalet from "../resources/images/chalet.jpg";

function Hero() {
  const theme = useTheme();

  const scrollHandler = () => {
    window.scrollTo({
      top: 200,
      left: 100,
      behavior: 'smooth'
    });
    
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: {xs:"1.2rem", md:"2.4rem"},
        padding: "2.4rem 1.2rem",
        justifyContent: "space-around",
        alignItems: "center",
        height: { xs: "90vh", sm: "90vh", md: "80vh" },
        backgroundColor: `${theme.palette.grey[200]}`,
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "flex-end",
          gap: {xs:"0.2rem", md:"0.4rem"},
          marginTop: {xs:"1.2rem", md:"2.4rem"},
          width: { xs: "100%", sm: "100%", md: "45vw" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: `${theme.typography.fontWeightLight}`,
            color: "#081308",
            textAlign:"end",
            fontSize:{xs:"0.8rem", md:"4.4rem"}
          }}
        >
           وصلناك لافخم شاليهات الاردن وباقل سعر ممكن حاب تتاكد اتواصل معنا 
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: `${theme.typography.fontWeightBold}`,
            color: "#333",
            textAlign:"end",
            fontSize:{xs:"2.8rem", md:"4.4rem"}
          }}
        >
             ! احجز رحلتك صح  
        </Typography>
        <Button
          variant="outlined"
          sx={{
            border: "#333 2px solid",
            width: "50%",
            marginTop: {xs:"1.2rem", md:"2.4rem"},
            color: "#333",
          }}
          onClick={scrollHandler}
        >
          تصفح الأن
        </Button>
      </Container>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60%", sm: "60%", md: "100%" },
          width: { xs: "100%", sm: "100%", md: "50%" },
          padding: "1.2rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "55%",
            width: "70%",
            backgroundImage: `url(${pool2Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px 5px",
            boxShadow: "rgba(33,33,33,0.6) 5px 5px 9px",
            position: "absolute",
            top: "0",
            left: "0%",
            zIndex: "3",
            border: "#fff 2px solid",
          }}
        ></Box>
        <VolunteerActivismIcon
          sx={{
            height: "20%",
            width: "20%",
            position: "absolute",
            top: "50%",
            left: "75%",
            color: "#fff",
            zIndex: "5",
          }}
        />

        <Box
          sx={{
            height: "40%",
            width: "43%",
            backgroundImage: `url(${kidsImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px 5px",
            boxShadow: "rgba(33,33,33,0.6) 5px 5px 9px",
            position: "absolute",
            top: "60%",
            left: "0%",
            transform: "rotate(0.01turn)",
            border: "#fff 2px solid",
            zIndex: "2",
          }}
        ></Box>
        <Box
          sx={{
            height: "40%",
            width: "50%",
            backgroundImage: `url(${widdingImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px 5px",
            boxShadow: "rgba(33,33,33,0.6) 5px 5px 9px",
            position: "absolute",
            top: "63%",
            left: "50%",
            transform: "rotate(-0.01turn)",
            border: "#fff 2px solid",
            zIndex: "1",
          }}
        ></Box>
        <ParkIcon
          sx={{
            height: "20%",
            width: "20%",
            position: "absolute",
            top: "60%",
            left: "35%",
            color: "#007C00",
            zIndex:"3",
            transform: "rotate(-0.1turn)",

          }}
        />
        <EmojiEmotionsIcon
          sx={{
            height: "15%",
            width: "15%",
            position: "absolute",
            top: "5%",
            left: "20%",
            color: "#ffcc33",
            zIndex:"4",
            transform: "rotate(-0.1turn)",

          }}
        />
        <FavoriteIcon 
          sx={{
            height: "15%",
            width: "15%",
            position: "absolute",
            top: "60%",
            left: "10%",
            color: "#ff0000",
            zIndex:"3",
            transform: "rotate(-0.1turn)",
            zIndex:"6",

          }}
        />
    
        <Box
          sx={{
            height: "35%",
            width: "35%",
            backgroundImage: `url(${chalet})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px 5px",
            boxShadow: "rgba(33,33,33,0.6) 5px 5px 9px",
            position: "absolute",
            top: "30%",
            left: "60%",
            transform: "rotate(0.03turn)",
            border: "#fff 2px solid",
            zIndex:"3",
          }}
        ></Box>
        <Box
          sx={{
            height: "35%",
            width: "35%",
            backgroundImage: `url(${foodImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px 5px",
            boxShadow: "rgba(33,33,33,0.6) 5px 5px 9px",
            position: "absolute",
            top: "0%",
            left: "60%",
            transform: "rotate(0.03turn)",
            border: "#fff 2px solid",
            zIndex:"3"
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Hero;
