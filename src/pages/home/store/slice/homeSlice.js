import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "../services/homeServices";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    /*------------------------------------------------------------------------------------------------------------ */
    builder.addCase(getHomeData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      // state.entities.push(action.payload)
    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something went wrong";
    });
    /*------------------------------------------------------------------------------------------------------------ */
  },
});

export default homeSlice.reducer;
