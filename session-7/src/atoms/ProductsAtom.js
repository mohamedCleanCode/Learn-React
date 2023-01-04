import { atom } from "recoil";

const productsState = atom({
  key: "productsState", // unique ID (with respect to other atoms/selectors)
  default: [
    { id: 1, title: "product 1" },
    { id: 2, title: "product 2" },
    { id: 3, title: "product 3" },
  ], // default value (aka initial value)
});
export default productsState;
