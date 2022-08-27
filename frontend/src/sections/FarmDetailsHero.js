import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { FarmList } from "../helpers/FarmListTeat";
import ImageSlider from "../components/ImageSlider";

function FarmDetailsHero(props) {
  const farmImgs = props.images

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: { xs: "75vh", sm: "65vh" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "50%" },
        }}
      >
        <ImageSlider slides={farmImgs} />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "50%" },
          display: { xs: "none", sm: "none", md: "block" },
          padding:"0.5rem 0.5rem"
        }}
      >
        <Grid
          sx={{
            height: "100%",
            width: "100%",
          }}
          container
          spacing={1}
        >
          {farmImgs?.map((imgItem) => (
            <Grid
              key={imgItem.id}
              item
              md={6}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url(${imgItem.image})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center",
                  boxShadow:"0.2rem 0.2rem 0.4rem 0.02rem rgba(0,0,0,0.7)"
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FarmDetailsHero;
