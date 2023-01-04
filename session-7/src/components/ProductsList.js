// import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";

import { useRecoilState } from "recoil";
import productsState from "../atoms/ProductsAtom";

export default function ProductsList() {
  //   const products = useContext(ProductsContext);
  const [products, setProductsState] = useRecoilState(productsState);
  return (
    <div>
      ProductsList
      {products.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
}
