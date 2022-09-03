import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  createFarmLoading: false,
  CreateFarmError: "",
  FarmCreated: {},
};

export const FarmCreateSlice = createSlice({
  name: "FarmCreate",
  initialState: initial,
  reducers: {
    FARM_CREATE_REQUEST(state) {
      state.createFarmLoading = true;
    },
    FARM_CREATE_SUCCESS(state, action) {
      state.createFarmLoading = false;
      state.FarmCreated = action.payload;
      state.CreateFarmError = "";
    },
    FARM_CREATE_FAIL(state, action) {
      state.createFarmLoading = false;
      state.CreateFarmError = action.payload;
    },
  },
});

export const createFarmInstance = (Data) => async (dispatch, getState) => {
  try {
    dispatch(FarmCreateActions.FARM_CREATE_REQUEST());
    const config = {
        headers: {
          "content-type": "application/json",
        },
      };

    const { data } = await axios.post(
      "https://www.jochalets.com/farms/",
      Data,
      config
    );

    dispatch(FarmCreateActions.FARM_CREATE_SUCCESS(data));
  } catch (error) {
    dispatch(
        FarmCreateActions.FARM_CREATE_FAIL(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const FarmCreateActions = FarmCreateSlice.actions;
