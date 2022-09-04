import { configureStore } from "@reduxjs/toolkit";
import { foodListSlice } from "./FarmSlice";
import { foodDetailSlice } from "./FarmDetailSlice";
import { BookingSlice } from "./BookingSlice";
import { FarmImgsSlice } from "./AdminImages";
import { FarmCreateSlice } from "./AdminCreateFarm";
import { userLoginSlice } from "./UserSlice";
const store = configureStore({
  reducer: {
    userLogin:userLoginSlice.reducer,
    farmListReducer: foodListSlice.reducer,
    farmDetailsReducer: foodDetailSlice.reducer,
    bookingReducer:BookingSlice.reducer,
    farmImagesReducer:FarmImgsSlice.reducer,
    farmCreated:FarmCreateSlice.reducer
  },
});

export default store;
