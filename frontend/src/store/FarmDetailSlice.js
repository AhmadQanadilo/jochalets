import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  loading: false,
  error: "",
  farmDetails: {},
};

export const foodDetailSlice = createSlice({
  name: "foodDetails",
  initialState: initial,
  reducers: {
    FARM_DETAILS_REQUEST(state) {
      state.loading = true;
    },
    FARM_DETAILS_SUCCESS(state, action) {
      state.loading = false;
      state.farmDetails = action.payload;
      state.error = "";
    },
    FARM_DETAILS_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const loadFarmDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch(FarmDetailsActions.FARM_DETAILS_REQUEST());

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      
  
      const { data } = await axios.get(
        `http://127.0.0.1:8000/farms/${id}/`,
        config
      );
  
      dispatch(FarmDetailsActions.FARM_DETAILS_SUCCESS(data));

      console.log(data);

    } catch (error) {
      dispatch(
        FarmDetailsActions.FARM_DETAILS_FAIL(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };

export const FarmDetailsActions = foodDetailSlice.actions;
