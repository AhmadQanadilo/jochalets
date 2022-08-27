import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Rating,
  Divider,
} from "@mui/material";

import { loadFarmDetails } from "../store/FarmDetailSlice";
import FarmDetailsHero from "../sections/FarmDetailsHero";
import { useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FarmServicesSection from "../sections/FarmServicesSection";
import { BookFarmAction } from "../store/BookingSlice";
import CallCenterImg from "../resources/images/callCenter.jpg";

function FarmDetailScreen() {
  const Params = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();

  //booking form state
  const [customerPhoneNum, setCustomerPhoneNum] = useState("");
  const [bookingVistoresNum, setBookingVistoresNum] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const farmDetailsState = useSelector((state) => state.farmDetailsReducer);
  const { farmDetails, loading, error } = farmDetailsState;

  const BookingState = useSelector((state) => state.bookingReducer);
  const { BookingData, Bookingloading, Bookingerror } = BookingState;

  const Infostyle = {
    borderRadius: "10px 10px",
    padding: "1.2rem 0.8rem",
    boxShadow: `${theme.shadows[5]}`,
  };

  const sectionHeader = {
    fontSize: "1.8rem",
    fontWeight: `${theme.typography.fontWeightBold}`,
    textAlign: "center",
    padding: "0.5rem 0",
  };

  const PostBookingHandler = (event) => {
    event.preventDefault();
    if (customerPhoneNum) {
      dispatch(
        BookFarmAction({
          customerPhoneNum: customerPhoneNum,
          bookingVistoresNum: bookingVistoresNum,
          bookingDate: bookingDate,
          farm: Params.farmID,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(loadFarmDetails(Params.farmID));
  }, [dispatch, Params.farmID]);

  return (
    <Box
      style={{
        backgroundColor: `${theme.palette.grey[50]}`,
        textAlign: "right",
      }}
    >
      <FarmDetailsHero images={farmDetails.images} />
      <Container
        sx={{
          padding: "2.4rem 0",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "1.2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "100%", md: "30%" },
          }}
        >
          {(String(BookingData.farm) ===String(Params.farmID)) ? (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                width: "100%",
                boxShadow: `${theme.shadows[5]}`,
                borderRadius: "10px 10px",
                paddingBottom: "1.2rem",
              }}
            >
              <Typography style={sectionHeader}>
                سيقوم فريقنا بالاتصال على <span style={{color:`${theme.palette.primary.main}`}}>{BookingData.customerPhoneNum}</span> 
              </Typography>
              <Typography style={sectionHeader}>
              <span style={{color:`${theme.palette.primary.main}`}}>Jo chalets</span> شكرا لاختيارك  
              </Typography>
              <Box
                sx={{
                  height: "40vh",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${CallCenterImg})`,
                    height: "80%",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></Box>
              </Box>
            </Container>
          ) : (
            <form onSubmit={PostBookingHandler}>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  width: "100%",
                  boxShadow: `${theme.shadows[5]}`,
                  borderRadius: "10px 10px",
                  paddingBottom: "1.2rem",
                }}
              >
                <Typography style={sectionHeader}>احجز استشارة الان</Typography>

                <TextField
                  id="phoneNumber-input"
                  type="number"
                  label="رقم الهاتف"
                  name="phone number"
                  value={customerPhoneNum}
                  onChange={(e) => {
                    setCustomerPhoneNum(e.target.value);
                  }}
                />

                <TextField
                  id="questNumber-input"
                  type="number"
                  label="عدد الأشخاص"
                  name="quest number"
                  value={bookingVistoresNum}
                  onChange={(e) => {
                    setBookingVistoresNum(e.target.value);
                  }}
                />
                <TextField
                  id="bookingDate-input"
                  type="text"
                  label="أليوم والوقت"
                  name="bookingDate"
                  value={bookingDate}
                  onChange={(e) => {
                    setBookingDate(e.target.value);
                  }}
                />

                <Button variant="contained" color="success" type="submit">
                  أحجز الأن
                </Button>
                <Box
                  style={{
                    ...Infostyle,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: `${theme.palette.primary.light}`,
                    color: "#fff",
                  }}
                >
                  <WhatsAppIcon
                    sx={{
                      color: `${theme.palette.common.white}`,
                      fontSize: "3.2rem",
                    }}
                  />
                  <Typography sx={{ fontSize: "1.6rem" }}>
                    تواصل على الواتساب
                  </Typography>

                  <a
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      backgroundColor: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "5px 5px",
                    }}
                    href="tel:+962798033926"
                  >
                    <Typography sx={{ fontSize: "1.6rem" }}>
                      0798033926
                    </Typography>
                  </a>
                </Box>
              </Container>
            </form>
          )}
        </Box>

        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <Box
            style={{
              ...Infostyle,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                fontSize: "1.6rem",
                fontWeight: `${theme.typography.fontWeightMedium}`,
              }}
            >
              المكان: {farmDetails.Location}
            </Typography>
            <Rating
              name="simple-controlled"
              value={farmDetails.rating}
              readOnly
            />
          </Box>
          <Box style={Infostyle}>
            <Typography style={sectionHeader}>الوصف العام</Typography>
            <Divider />

            <Typography variant="p">{farmDetails.descrption}</Typography>
          </Box>
          <FarmServicesSection style={Infostyle} farm={farmDetails} />
        </Box>
      </Container>
    </Box>
  );
}

export default FarmDetailScreen;