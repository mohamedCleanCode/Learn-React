// import React, { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";

import { useRecoilState } from "recoil";
import productsState from "../atoms/ProductsAtom";

export default function Navbar() {
  //   const products = useContext(ProductsContext);
  const [products, setProductsState] = useRecoilState(productsState);
  return <div>Products Count {products.length}</div>;
}
