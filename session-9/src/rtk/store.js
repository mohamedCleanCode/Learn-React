import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./slices/bank-slice";
import productsReducer from "./slices/products-slics";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    products: productsReducer,
  },
});
