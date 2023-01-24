import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {},
  },
});

export const { addTocart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
