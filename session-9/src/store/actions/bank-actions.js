export const withDraw = (amount) => {
  return {
    type: "WITHDRAW_MONEY",
    payload: amount,
  };
};
export const diposite = (amount) => {
  return {
    type: "DIPOSITE_MONEY",
    payload: amount,
  };
};
