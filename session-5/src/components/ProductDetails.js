import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetails() {
  const api = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${api}/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product ID {params.id}</h1>
      <Product product={product} isDetails={false} />
    </div>
  );
}
