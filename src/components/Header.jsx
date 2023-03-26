import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineMenu,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import LinksHeader from "./LinksHeader";
import Menu from "./Menu";
import SlideCart from "./SlideCart";
import Search from "./Search";

export default function Header() {
  const { setMenuActive, setCartActive, totalQuantities } = useGlobalContext();
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="main-header">
            <div className="logo-side">
              <button
                className="menu-button"
                onClick={() => setMenuActive(true)}>
                <AiOutlineMenu />
              </button>
              <Link to="/" className="logo title">
                Fashionary
              </Link>
            </div>
            <div className="header-contact">
              <div className="header-address single-contact">
                <SlLocationPin />
                <div className="text">
                  <p>Address</p>
                  <h4>192 Orchard St, Brooklyn, CA</h4>
                </div>
              </div>
              <div className="header-phone single-contact">
                <AiOutlinePhone />
                <div className="text">
                  <p>Phone</p>
                  <h4>(+0051) 8286 41 53</h4>
                </div>
              </div>
            </div>
            <ul className="header-profile">
              <li>
                <button onClick={() => setSearchActive(true)}>
                  <AiOutlineSearch />
                </button>
              </li>
              <li>
                <Link to="/account/login">
                  <AiOutlineUser />
                </Link>
              </li>
              <li>
                <button
                  className="cart-button"
                  onClick={() => setCartActive(true)}>
                  <AiOutlineShoppingCart />
                  <span>{totalQuantities}</span>
                </button>
              </li>
            </ul>
          </div>
          <LinksHeader />
        </div>
        <Menu setMenuActive={setMenuActive} />
        <SlideCart setCartActive={setCartActive} />
        <Search setSearchActive={setSearchActive} searchActive={searchActive} />
      </header>
    </>
  );
}
