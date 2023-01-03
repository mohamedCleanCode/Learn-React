import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="product-details">
      <h1>Product {params.id} Details</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price:{product.price}$</p>
      {product && <img src={product.image} alt={product.title} />}
    </div>
  );
}
