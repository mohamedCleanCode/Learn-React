import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => getAllProducts());
  };

  let tr = products.map((pro) => {
    return (
      <tr key={pro.id}>
        <td>{pro.id}</td>
        <td>{pro.title}</td>
        <td>{pro.price}$</td>
        <td>
          <Link to={`/products/${pro.id}`} className="btn btn-info">
            View
          </Link>
          <button className="btn btn-primary">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(pro.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="products">
      <h1>Products</h1>
      <Link to="/products/add" className="btn btn-success">
        Add New Product
      </Link>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
    </div>
  );
}
