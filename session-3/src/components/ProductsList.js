import { data } from "../data";
import Product from "./Product";

export default function ProductsList() {
  const products = data.map((ele) => {
    return ele.price < 100 && <Product product={ele} key={ele.id} />;
  });

  return (
    <div className="products-list">
      <h1>ProductsList</h1>
      {products}
    </div>
  );
}
