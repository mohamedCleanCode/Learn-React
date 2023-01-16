import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const { addTocart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
