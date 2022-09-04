import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoImg from "../resources/images/jochaletfullwhiteblue.png";
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
                  style={{ height: "100%", width: "50%", objectFit: "cover" }}
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

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default HeaderComponent;
