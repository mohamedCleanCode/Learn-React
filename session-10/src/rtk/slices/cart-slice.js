import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      const finded = state.find((product) => product.id === action.payload.id);
      if (finded) {
        finded.quantity += 1;
      } else {
        const clone = { ...action.payload, quantity: 1 };
        state.push(clone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {},
  },
});

export const { addTocart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
