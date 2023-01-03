import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
  const deleteProduct = (pro) => {
    MySwal.fire({
      title: `Are you sure delete ${pro.title}`,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/products/${pro.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProducts());
      }
    });
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
          <Link to={`/products/edit/${pro.id}`} className="btn btn-primary">
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => deleteProduct(pro)}>
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
