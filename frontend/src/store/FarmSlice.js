import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  loading: false,
  error: "",
  farmList: {},
};

export const foodListSlice = createSlice({
  name: "foodList",
  initialState: initial,
  reducers: {
    FARM_LIST_REQUEST(state) {
      state.loading = true;
    },
    FARM_LIST_SUCCESS(state, action) {
      state.loading = false;
      state.farmList = action.payload;
      state.error = "";
    },
    FARM_LIST_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const loadFarmLiat = (Data) => async (dispatch, getState) => {
  try {
    dispatch(FarmListActions.FARM_LIST_REQUEST());
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const sortBy =
      Data?.filterData?.filterSortBy === "الاقل سعرا"
        ? "priceOnNormalDays"
        : Data?.filterData?.filterSortBy === "الاكثر سعرا"
        ? "-priceOnNormalDays"
        : "";
    const Location = Data?.filterData?.filterLocation
      ? Data?.filterData?.filterLocation === "جميع المناطق"
        ? ""
        : Data?.filterData?.filterLocation
      : "";
    const FarmType = Data?.filterData?.filterFarmType
      ? Data?.filterData?.filterFarmType === "الكل"
        ? ""
        : Data?.filterData?.filterFarmType
      : "";

    console.log('normal url')
    
    const { data } = await axios.get("https://jochalets.herokuapp.com/farms/", { params: { search: `${Location} ${FarmType}` , ordering:sortBy} }, config);

    dispatch(FarmListActions.FARM_LIST_SUCCESS(data));
  } catch (error) {
    dispatch(
      FarmListActions.FARM_LIST_FAIL(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};
export const PageinationFarmList = (url) => async (dispatch, getState) => {
  try {
    dispatch(FarmListActions.FARM_LIST_REQUEST());
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    
    console.log('pagenation url')
    const { data } = await axios.get(url, config);

    dispatch(FarmListActions.FARM_LIST_SUCCESS(data));
  } catch (error) {
    dispatch(
      FarmListActions.FARM_LIST_FAIL(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const FarmListActions = foodListSlice.actions;
