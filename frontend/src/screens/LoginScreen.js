import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Container, TextField, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookLogin from "react-facebook-login";
import { loginAction, SocialLogin } from "../store/UserSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

import FacebookIcon from "@mui/icons-material/Facebook";

function LoginScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();

  const responseFacebook = (response) => {
    console.log(response);
    dispatch(SocialLogin(response.accessToken));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (userInfo.access_token) {
      navigate("/");
    }
    dispatch(loginAction(email, password));
  };

  useEffect(() => {
    if (userInfo.access_token) {
      navigate("/");
      console.log(userInfo.access_token);
    }
  }, [navigate, userInfo.access_token]);

  return (
    <Fragment>
      {error ? <Message severity="error">{error}</Message> : <></>}
      {loading ? (
        <Loader />
      ) : (
        <Container
          style={{
            padding: "1.2rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            border: `${theme.palette.primary.light} solid 3px`,
          }}
        >
          <form onSubmit={loginHandler}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <h1>Sign In</h1>
              <TextField
                id="email-input"
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                id="password-input"
                type="password"
                label="Password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                Sign In
              </Button>
              {/* <Link to={"/register"}>New Customer</Link> */},
            </Box>
          </form>
          <FacebookLogin
            appId="405326605064796"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="FBloginButton"
            icon={
              <FacebookIcon style={{ color: "#4267B2", fontSize: "2.2rem" }} />
            }
          />
        </Container>
      )}
    </Fragment>
  );
}

export default LoginScreen;
