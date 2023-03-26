import { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { urlFor } from "../lib/client";

export default function Search({ setSearchActive, searchActive }) {
  const { handleSearchChange, query, results } = useGlobalContext();
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (results.length > 0) {
      setSearchActive(false);
      navigate("/shop/search");
    }
  }

  useEffect(() => {
    document.body.classList.toggle("overflow", searchActive);
  }, [searchActive]);

  return (
    <div className={searchActive ? "search active" : "search"}>
      <button
        className="slide-close-button"
        onClick={() => setSearchActive(false)}>
        <TfiClose />
      </button>
      <div className="container">
        <form onSubmit={handleSearchSubmit}>
          <label htmlFor="search" className="title">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search here..."
            onChange={handleSearchChange}
            value={query}
          />
        </form>
        {results.length > 0 && <p>There is {results.length} products found!</p>}
        <ul>
          {query !== "" && results.length === 0 && <p>There is no products!</p>}
          {results.map((product) => (
            <li key={product.id}>
              <Link
                to={`/shop/${product.id}`}
                className="image"
                onClick={() => {
                  setSearchActive(false);
                }}>
                <img src={urlFor(product.images[0])} alt={product.name} />
              </Link>
              <div className="details">
                <Link
                  to={`/shop/${product.id}`}
                  onClick={() => {
                    setSearchActive(false);
                  }}>
                  {product.name}
                </Link>
                <span>${product.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
