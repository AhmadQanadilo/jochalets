import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoImg from "../resources/images/jochaletfullwhitebluehori.png";
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
import { logoutFunction } from "../store/UserSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const iconStyle = {
  mr: 2,
  fontWeight: 500,
  letterSpacing: ".3rem",
  color: "#fff",
};

function HeaderComponent() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const LinkStyle = {
    padding: "0.2rem 1.2rem",
    display: "block",
    textDecoration: "none",
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [anchorElUser, setAnchorElUser] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    dispatch(logoutFunction());
  };

  return (
    <Fragment>
      <AppBar position="sticky">
        <Container
          maxWidth="xl"
          style={{
            background: `linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)`,
          }}
        >
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

            {/* small screen logo */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                width: "25vw",
              }}
            >
              <Link
                sx={{
                  width: "100%",
                }}
                to={""}
              >
                <img
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={LogoImg}
                />
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

            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                
              }}
              href="https://wa.me/962798033926"
            >
              <WhatsAppIcon style={{fontSize:"2.2rem"}} />
            </a>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon style={{fontSize:"2.8rem", color:"#fff"}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userInfo.access_token ? (
                  <Box>
                    <Button onClick={logoutHandler}>
                      <Typography textAlign="center">Log out</Typography>
                    </Button>
                    <Link style={LinkStyle} to={"/JoAdmin"}>
                      <Typography textAlign="center">Admin</Typography>
                    </Link>
                  </Box>
                ) : (
                  <Link style={LinkStyle} to={"/login"}>
                    <Typography textAlign="center">login</Typography>
                  </Link>
                )}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default HeaderComponent;
