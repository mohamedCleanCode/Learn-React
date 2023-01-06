export const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return state - action.payload;
    case "DIPOSITE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
};
