import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const productsSlice = createSlice({
  initialState: [{ id: 1, title: "product-1" }],
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    getProducts: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Logic here
      console.log(action);
      return (state = action.payload);
    });
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
