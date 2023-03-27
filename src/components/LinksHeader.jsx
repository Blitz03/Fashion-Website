import { Link, NavLink } from "react-router-dom";

export default function LinksHeader() {
  return (
    <div className="links-header">
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
      <select className="language">
        <option value="en">English</option>
      </select>
    </div>
  );
}
