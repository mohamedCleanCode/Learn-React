import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li>
          <Link to="/products">Get All Products</Link>
        </li>
      </ul>
    </div>
  );
}
