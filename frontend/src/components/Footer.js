import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Link,
  Grid,
  Box,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { Facebook, Instagram, Search, WhatsApp } from "@mui/icons-material";
import LogoImg from '../resources/images/jochaletfullwhiteblue.png'

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        jochalets
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: "4.8rem",
  height: "2.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2.8rem",
  color: "#fff",
  mr: 1,
  "&:hover": {
    bgcolor: "#fff",
    color: "#333",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
];

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        background: `linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)`,
        color: "#fff",
      }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap:"0.8rem",
                justifyContent: "flex-end",
                height: "100%" ,
                width:"100%"
              }}
            >
              <Box sx={{ height: "10vh", width: "10vh" }}>
                <img src={LogoImg} style={{ height: "100%", width: "100%", borderRadius:"50% 50%", position:"center",objectFit:"cover" }}></img>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <Facebook />
                </Box>
                <Box
                  component="a"
                  href="https://twitter.com/MUI_hq"
                  sx={iconStyle}
                >
                  <Instagram />
                </Box>
                <Box
                  component="a"
                  href="https://twitter.com/MUI_hq"
                  sx={iconStyle}
                >
                  <WhatsApp />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link
                  style={{ color: "#fff" }}
                  href="/premium-themes/onepirate/terms/"
                >
                  Terms
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link
                  style={{ color: "#fff" }}
                  href="/premium-themes/onepirate/privacy/"
                >
                  Privacy
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              ما هو هدفنا
            </Typography>
            <Typography variant="p">
              هدفنا هو ان نوفر لك الوسيلة لحجز اماكن الترفيه والرحلات من الجهات
              المعتدمة حتى تحصل على اقل سعر واكثر متعة وامان شديد من عمليات
              الاحتيال
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ borderTop: "#fff solid 3px" }}>
              <Copyright />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
