import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li>
          <Link to="/products">Get All Products</Link>
        </li>
        <li>
          <Link to="/products/categories">Get All Categories</Link>
        </li>
      </ul>
    </div>
  );
}
