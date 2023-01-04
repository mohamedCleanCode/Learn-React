import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Navbar() {
  const products = useContext(ProductsContext);
  return <div>Products Count {products.length}</div>;
}
