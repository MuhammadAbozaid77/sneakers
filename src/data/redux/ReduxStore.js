import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../../pages/home/store/slice/homeSlice";

const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
  },
});

export default store;
