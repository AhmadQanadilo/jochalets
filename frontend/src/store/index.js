import { configureStore } from "@reduxjs/toolkit";
import { foodListSlice } from "./FarmSlice";
import { foodDetailSlice } from "./FarmDetailSlice";
import { BookingSlice } from "./BookingSlice";
const store = configureStore({
  reducer: {
    farmListReducer: foodListSlice.reducer,
    farmDetailsReducer: foodDetailSlice.reducer,
    bookingReducer:BookingSlice.reducer
  },
});

export default store;
