import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../rtk/slices/products-slics";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() => dispatch(addProduct({ id: 2, title: "product-2" }))}
      >
        Add Product
      </button>
      {products.map((product) => {
        return <h2 key={product.id}>{product.title}</h2>;
      })}
    </div>
  );
}
