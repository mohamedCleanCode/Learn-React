import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <Link to="/products/add" className="btn btn-success">
        Add New Product
      </Link>
      <table class="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
