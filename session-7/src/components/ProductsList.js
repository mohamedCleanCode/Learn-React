import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductsList() {
  const products = useContext(ProductsContext);
  return (
    <div>
      ProductsList
      {products.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
}
