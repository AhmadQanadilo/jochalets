import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  loading: false,
  error: "",
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
};
export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initial,
  reducers: {
    USER_LOGIN_REQUEST(state) {
      state.loading = true;
    },
    USER_LOGIN_SUCCESS(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = "";
    },
    USER_LOGIN_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    USER_LOGOUT(state) {
      state.loading = false;
      state.userInfo = {};
    },
  },
});

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch(userActions.USER_LOGIN_REQUEST());

    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*",
      },
    };

    const { data } = await axios.post(
      "http://www.jochalets.com/auth/token/",
      new URLSearchParams({
        username:  email,
        password: password,
        grant_type: "password",
        client_id: "OooVzRo0fbxL8eBrxr4V6TY7AbEGeCTTVYzC9Ra1",
        client_secret:
          "4RVUUkKYxGba5rbwGYq2UWJ5q0Sdh4oUMZqoPNQOOe72tvRPotS2qxyWd7J5AIpGKvmfUpUTJXCaBeDJX9c2ifioH9yIjNq7YAGcEvaS4DhWUrGvGpzkDrYiq1Qh3Y05",
      }),
      config
    );

    dispatch(userActions.USER_LOGIN_SUCCESS(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
    console.log(data.access_token);
  } catch (error) {
    dispatch(
      userActions.USER_LOGIN_FAIL(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};
export const logoutFunction = () => async (dispatch) => {
  try {
    dispatch(userActions.USER_LOGOUT());

    localStorage.removeItem("userInfo");
    localStorage.removeItem("SocialRes");
  } catch (error) {
    dispatch(
      userActions.USER_LOGIN_FAIL(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

// export const Register = (email, password) => async (dispatch) => {
//   try {
//     dispatch(userActions.USER_LOGIN_REQUEST());

//     const config = {
//       headers: {
//         "content-type": "application/json",
//       },
//     };

//     const { registerData } = await axios.post(
//       "http://127.0.0.1:8000/api/users/register/",
//       { username: email, password: password, email: email },
//       config
//     );

//     const { data } = await axios.post(
//       "http://127.0.0.1:8000/api/users/token/",
//       { username: email, password: password },
//       config
//     );

//     dispatch(userActions.USER_LOGIN_SUCCESS(data));
//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch(
//       userActions.USER_LOGIN_FAIL(
//         error.response && error.response.data.detail
//           ? error.response.data.detail
//           : error.message
//       )
//     );
//   }
// };

export const SocialLogin = (Token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

    const { data } = await axios.post(
      "http://www.jochalets.com/auth/convert-token",
      new URLSearchParams({
        token: Token,
        backend: "facebook",
        grant_type: "convert_token",
        client_id: "OooVzRo0fbxL8eBrxr4V6TY7AbEGeCTTVYzC9Ra1",
        client_secret:
          "4RVUUkKYxGba5rbwGYq2UWJ5q0Sdh4oUMZqoPNQOOe72tvRPotS2qxyWd7J5AIpGKvmfUpUTJXCaBeDJX9c2ifioH9yIjNq7YAGcEvaS4DhWUrGvGpzkDrYiq1Qh3Y05",
      }),
      config
    );

    localStorage.setItem("SocialRes", JSON.stringify(data));
    dispatch(userActions.USER_LOGIN_SUCCESS(data));
  } catch (error) {
    dispatch(
      userActions.USER_LOGIN_FAIL(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

export const RefreshToken = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    };

    const { data } = await axios.post(
      "http://www.jochalets.com/auth/token/",
      {
        refresh_token: userInfo.refresh_token,
        grant_type: "refresh_token",
        client_id: "OooVzRo0fbxL8eBrxr4V6TY7AbEGeCTTVYzC9Ra1",
        client_secret:
          "4RVUUkKYxGba5rbwGYq2UWJ5q0Sdh4oUMZqoPNQOOe72tvRPotS2qxyWd7J5AIpGKvmfUpUTJXCaBeDJX9c2ifioH9yIjNq7YAGcEvaS4DhWUrGvGpzkDrYiq1Qh3Y05",
      },
      config
    );

    dispatch(userActions.USER_LOGIN_SUCCESS(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
    console.log("refresh worked");
  } catch (error) {
    dispatch(
      userActions.USER_LOGIN_FAIL(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

export const userActions = userLoginSlice.actions;
