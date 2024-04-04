import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHomeData = createAsyncThunk(
  "home/getHomeData",
  async (userId, thunkAPI) => {
    return [1, 2, 3];
  }
);
