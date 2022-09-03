import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from '../resources/images/jochaletfullwhiteblue.png'
import { useParams, Link } from "react-router-dom";


import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

const iconStyle = {
  mr: 2,
  fontWeight: 500,
  letterSpacing: ".3rem",
  color: "#fff",
};

function HeaderComponent() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

  return (
    <Fragment>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
                color: "#fff",
                fontWeight: 500,
                fontSize: "1.3rem",
              }}
            >
              jochalets
            </Button>

            {/* smaal screen menu and logo */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                width:"25vw",
       
              }}
            >
              <Link
                sx={{
                  width:"100%",
                }}
                to={''}
              >
                <img style={{height:"100%", width:"50%", objectFit:"cover"}} src={LogoImg}/>
              </Link>
            </Box>
          
            {/* big screen  menu and  */}

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Fragment>
                <Button>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "1.3rem",
                    }}
                    className={"navigation"}
                    to={""}
                  >
                    Home screen
                  </NavLink>
                </Button>
              </Fragment>
            </Box>
            {/* user img and user menu  */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="p"
                    href=""
                    sx={iconStyle}
                  >
                    <WhatsAppIcon />
                  </Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="https://www.facebook.com/jochalets/"
                    sx={iconStyle}
                  >
                    <FacebookIcon />
                  </Typography>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="p"
                    href=""
                    sx={iconStyle}
                  >
                    <InstagramIcon />
                  </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  position: "absolute",
                  top: "0",
                  left: "-3%",
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={anchorElUser}
                onClose={(e) => setAnchorElUser(false)}
              >
                <MenuItem onClick={(e) => setAnchorElUser(false)}>
                  <NavLink to={"/profiles"}> profiles</NavLink>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorElUser(false)}>
                  <NavLink to={"/exersices"}> exersices</NavLink>
                </MenuItem>
                <MenuItem onClick={(e) => setAnchorElUser(false)}>
                  <NavLink to={"/fooditems"}> fooditems</NavLink>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default HeaderComponent;
