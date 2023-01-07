import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  initialState: 1000,
  name: "bankSlice",
  reducers: {
    withDraw: (state, action) => {
      return (state = state - action.payload);
    },
    diposite: (state, action) => {
      return (state = state + action.payload);
    },
  },
});

export const { withDraw, diposite } = bankSlice.actions;
export default bankSlice.reducer;
