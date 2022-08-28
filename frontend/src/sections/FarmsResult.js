import React, { useState, useEffect, Fragment } from "react";
import { useTheme } from "@mui/material/styles";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import ImageSlider from "../components/ImageSlider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { loadFarmLiat } from "../store/FarmSlice";

function FarmsResult(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const farmListState = useSelector((state) => state.farmListReducer);
  const { farmList, loading, error } = farmListState;
  const [urlVar, setUrlVar] = useState("https://jochalets.herokuapp.com/farms/");

  const Pageination = (pageIndex) => {
    if (pageIndex === "next") {
      setUrlVar(farmList.next);
      dispatch(loadFarmLiat({ filterData: props.Data, Url: farmList.next }));
    } else {
      if (pageIndex === "previous") {
        setUrlVar(farmList.previous);
        dispatch(loadFarmLiat({ filterData: props.Data, Url: farmList.previous }));

      }
    }
  };


  useEffect(() => {
    dispatch(loadFarmLiat({ filterData: props.Data, Url: urlVar }));
    console.log(props.Data);
  }, [dispatch, props.Data, urlVar]);

  return (
    <Container sx={{ backgroundColor: `${theme.palette.grey[200]}` }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0 0 0",
        }}
      >
        {farmList.previous ? (
          <Button
            variant="contained"
            onClick={() => {
              Pageination("previous");
            }}
          >
            السابق
          </Button>
        ) : (
          <Button disabled variant="contained">
            السابق
          </Button>
        )}
        {farmList.next ? (
          <Button
            variant="contained"
            onClick={() => {
              Pageination("next");
            }}
          >
            التالي
          </Button>
        ) : (
          <Button disabled variant="contained">
            التالي
          </Button>
        )}
      </Box>
      <Grid sx={{ height: "100%", padding: "1.2rem 0" }} container spacing={4}>
        {farmList?.results?.map((Farm) => (
          <Grid key={Farm.id} item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "column" },
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "60vh", sm: "60vh", md: "72vh" },
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <Grid
                container
                spacing={1}
                sx={{
                  textAlign: "end",
                  padding: "0.5rem 0.5rem",
                }}
              >
                <Grid item xs={4} md={4} lg={4}>
                  <Chip icon={<LocationOnIcon />} label={Farm.Location} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <Chip
                    icon={<LocalOfferIcon />}
                    label={`السعر: عند الاتصال`}
                  />
                </Grid>
              </Grid>
              <ImageSlider slides={Farm.images} />
              <Grid
                container
                spacing={1}
                sx={{
                  textAlign: "center",
                  padding: "0.5rem 0.5rem",
                  marginTop: "1.2rem",
                }}
              >
                <Grid item xs={6} md={6} lg={6}>
                  <Chip
                    icon={<HomeIcon />}
                    label={`المساحة: ${Farm.bulidingArea}`}
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <Chip
                    icon={<PeopleIcon />}
                    label={`عدد الاشخاص: ${Farm.maxNumOFVistors}`}
                  />{" "}
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <Chip
                    icon={<HotelIcon />}
                    label={`غرف النوم: ${Farm.pathRoomNum}`}
                  />{" "}
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      backgroundColor: `${theme.palette.primary.light}`,
                      padding: "0.2rem 1.2rem",
                      borderRadius: "10px 10px",
                      fontWeight: `${theme.typography.fontWeightMedium}`,
                    }}
                    to={`${Farm.id}`}
                  >
                    تعرف أكثر
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FarmsResult;
