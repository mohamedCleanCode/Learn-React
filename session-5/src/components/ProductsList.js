import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductsList() {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products-list container">
      <h1 className="text-center py-4">Our Products</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-6 col-lg-3" key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
