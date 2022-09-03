import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  loading: false,
  error: "",
  farmImgs: [],
};

export const FarmImgsSlice = createSlice({
  name: "FarmImgs",
  initialState: initial,
  reducers: {
    FARM_IMAGES_REQUEST(state) {
      state.loading = true;
    },
    FARM_IMAGES_SUCCESS(state, action) {
      state.loading = false;
      state.farmImgs = action.payload;
      state.error = "";
    },
    FARM_IMAGES_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const uploadFarmImgs = (Data) => async (dispatch, getState) => {
  try {
    dispatch(FarmImgsActions.FARM_IMAGES_REQUEST());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/farms/images/",
      Data,
      config
    );

    dispatch(FarmImgsActions.FARM_IMAGES_SUCCESS(data));
  } catch (error) {
    dispatch(
      FarmImgsActions.FARM_IMAGES_FAIL(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const FarmImgsActions = FarmImgsSlice.actions;
