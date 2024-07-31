import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "c-100",
};

const appearanceSlice = createSlice({
  name: "appearance",
  initialState,
  reducers: {},
});

export default appearanceSlice.reducer;
