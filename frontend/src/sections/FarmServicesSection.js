import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PoolIcon from "@mui/icons-material/Pool";
import HotelIcon from "@mui/icons-material/Hotel";
import KitchenIcon from '@mui/icons-material/Kitchen';
import VillaIcon from "@mui/icons-material/Villa";
import DeckIcon from "@mui/icons-material/Deck";
import KebabDiningIcon from "@mui/icons-material/KebabDining";

function FarmServicesSection(props) {
  const theme = useTheme();

  const Servicesstyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    alignItems: "end",
    borderRadius: "3px 3px",
    backgroundColor: `${theme.palette.primary.main}`,
    color: "#fff",
    padding: "0.8rem 1.2rem",
    width: "100%",
    border: "#fff 3px solid",
  };

  const sectionHeader = {
    fontSize: "1.8rem",
    fontWeight: `${theme.typography.fontWeightBold}`,
    textAlign: "center",
    padding: "0.6rem 0",
  };

  const iconStyle = {
    color: `${theme.palette.common.white}`,
    fontSize: "2.6rem",
    alignSelf: "center",
    paddingBottom: "0.4rem",
  };
  return (
    <Box style={props.style}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography style={sectionHeader}>المرافق والخدمات</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Box sx={Servicesstyle}>
            <DeckIcon sx={iconStyle} />

            <Typography variant="p">نفاصيل المزرعة</Typography>

            <Typography variant="p">{props.farm?.yardDetails}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Box sx={Servicesstyle}>
            <PoolIcon sx={iconStyle} />

            <Typography variant="p">: ابعاد المسبح</Typography>

            <Typography variant="p">
              الطول: {props.farm?.poolLenght} متر
            </Typography>
            <Typography variant="p">
              العرض: {props.farm?.poolWidth} متر
            </Typography>
            <Typography variant="p">
              العمق: {props.farm?.poolDepth}متر
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Box sx={Servicesstyle}>
            <VillaIcon sx={iconStyle} />

            <Typography variant="p"> :معلومات المبنى </Typography>

            <Typography variant="p">{props.farm?.bulidingDetails} </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Box sx={Servicesstyle}>
            <KitchenIcon sx={iconStyle} />
            <Typography variant="p"> :تفاصيل المطبخ </Typography>
            <Typography variant="p">{props.farm?.kitchenDetails}</Typography>
            <Typography variant="p">
              باربكيو :{props.farm?.fryPlace}{" "}
            </Typography>
            <Typography variant="p">
              {props.farm?.ovenAndFridge ? props.farm?.ovenAndFridge : ""}{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Box sx={Servicesstyle}>
            <HotelIcon sx={iconStyle} />

            <Typography variant="p"> :غرف المبنى </Typography>

            <Typography variant="p">
              غرف النوم : {props.farm?.bedRoomsNum}{" "}
            </Typography>
            <Typography variant="p">
              غرف المعيشة : {props.farm?.livingRoomNum}{" "}
            </Typography>
            <Typography variant="p">
              عدد الحمامات :{props.farm?.pathRoomNum}{" "}
            </Typography>
            <Typography variant="p">
              عدد اسرى النوم : {props.farm?.bedsNum}{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FarmServicesSection;
