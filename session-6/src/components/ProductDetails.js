import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  let element = product && (
    <div className="card">
      <img
        src={product.images[0]}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title} </h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
  return (
    <div className="product-details">
      <h1>Product {params.id} Details</h1>
      {product && <h>{element}</h>}
    </div>
  );
}
