console.log(Redux);
console.log(ReduxThunk);

const withDraw = (amount) => {
  return {
    type: "WITHDRAW_MONEY",
    payload: amount,
  };
};
const diposite = (amount) => {
  return {
    type: "DIPOSITE_MONEY",
    payload: amount,
  };
};
const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};
const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch(getProducts(data));
  };
};
const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - action.payload;
    case "DIPOSITE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return [...action.payload];
    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducers = Redux.combineReducers({
  bank: bankReducer,
  products: productsReducer,
});
const store = Redux.createStore(reducers, Redux.applyMiddleware(ReduxThunk));

// store.dispatch(withDraw(200)); // -200
// store.dispatch(withDraw(100)); // -100
// store.dispatch(diposite(50)); // +50
store.dispatch(addProduct({ id: 1, title: "product-1" }));
console.log(store.getState());

// Exersise
const amount = document.getElementById("amount");
const input = document.getElementById("input");
const btnWithDraw = document.getElementById("withdraw");
const btnDiposite = document.getElementById("diposite");

amount.innerHTML = store.getState().bank;

btnWithDraw.addEventListener("click", () => {
  store.dispatch(withDraw(+input.value));
});
btnDiposite.addEventListener("click", () => {
  store.dispatch(diposite(+input.value));
});

store.subscribe(() => {
  console.log("Current state", store.getState());
  amount.innerHTML = store.getState().bank;
});
