import { createContext, useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider(props) {
  const [products, setProducts] = useState([
    { id: 1, title: "product 1" },
    { id: 2, title: "product 2" },
    { id: 3, title: "product 3" },
  ]);
  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
