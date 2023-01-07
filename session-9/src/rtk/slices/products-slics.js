import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  initialState: [{ id: 1, title: "product-1" }],
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    getProducts: () => {},
    fetchProducts: () => {},
  },
});

export const { addProduct, fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
