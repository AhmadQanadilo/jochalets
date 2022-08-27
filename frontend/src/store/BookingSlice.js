import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// {
//     "id": 1,
//     "customerPhoneNum": "0798033926",
//     "bookingDate": "الاحد",
//     "bookingVistoresNum": 12,
//     "farm": 1
// }

const initial = {
  Bookingloading: false,
  Bookingerror: "",
  BookingData: {},
};

export const BookingSlice = createSlice({
  name: "Booking",
  initialState: initial,
  reducers: {
    BOOKING_REQUEST(state) {
      state.Bookingloading = true;
    },
    BOOKING_SUCCESS(state, action) {
      state.Bookingloading = false;
      state.BookingData = action.payload;
      state.Bookingerror = "";
    },
    BOOKING_FAIL(state, action) {
      state.Bookingloading = false;
      state.Bookingerror = action.payload;
    },
  },
});

export const BookFarmAction = (BookingData) => async (dispatch, getState) => {
    try {
      dispatch(BookingActions.BOOKING_REQUEST());

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      
  
      const { data } = await axios.post(
        `http://127.0.0.1:8000/farms/book/`,
        BookingData,
        config
      );
  
      dispatch(BookingActions.BOOKING_SUCCESS(data));

      console.log(data);

    } catch (error) {
      dispatch(
        BookingActions.BOOKING_FAIL(
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        )
      );
    }
  };

  export const BookingActions = BookingSlice.actions;