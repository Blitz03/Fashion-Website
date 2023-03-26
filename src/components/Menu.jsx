import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

export default function Menu({ setMenuActive }) {
  const { menuActive, menuElement } = useGlobalContext();

  return (
    <div className={menuActive ? "menu active" : "menu"} ref={menuElement}>
      <button
        className="slide-close-button"
        onClick={() => setMenuActive(false)}>
        <TfiClose />
      </button>
      <div className="title">Durotan</div>
      <ul>
        <li>
          <NavLink to="/" onClick={() => setMenuActive(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuActive(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuActive(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" onClick={() => setMenuActive(false)}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" onClick={() => setMenuActive(false)}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" onClick={() => setMenuActive(false)}>
            WishList
          </NavLink>
        </li>
        <li>
          <NavLink to="not-found" onClick={() => setMenuActive(false)}>
            404 Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
