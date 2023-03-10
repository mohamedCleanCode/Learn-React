import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bankReducer } from "./reducers/bank-reducer";
import { productsReducer } from "./reducers/products-reducer";

const reducers = combineReducers({
  bank: bankReducer,
  products: productsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
