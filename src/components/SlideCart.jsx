import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { urlFor } from "../lib/client";
import { TfiClose } from "react-icons/tfi";
import Quantity from "./Quantity";

export default function SlideCart({ setCartActive }) {
  const {
    cartElement,
    cartActive,
    cart,
    cartTotal,
    toggleProductQuantity,
    removeProduct,
    totalQuantities,
    handleProductClick,
    handleScrollToTop,
  } = useGlobalContext();

  const isCheckoutDisabled = cart.some((product) => product.stock < 1);

  return (
    <div
      className={cartActive ? "slide-cart active" : "slide-cart"}
      ref={cartElement}>
      <div className="cart-header">
        {cart.length > 0 && <h3>Cart ({totalQuantities})</h3>}
        <button
          className="slide-close-button"
          onClick={() => setCartActive(false)}>
          <TfiClose />
        </button>
      </div>
      {cart.length === 0 && <p className="empty">Your bag is empty!</p>}
      {cart.length > 0 && (
        <>
          <div className="cart-body">
            <div className="cart-products">
              {cart.map((product) => (
                <div className="product" key={product.id}>
                  <Link
                    to={`/shop/${product.id}`}
                    className="image"
                    onClick={() => {
                      setCartActive(false);
                      handleProductClick();
                      handleScrollToTop();
                    }}>
                    <img src={urlFor(product.images[0])} alt={product.name} />{" "}
                  </Link>
                  <div className="details">
                    <Link
                      to={`/shop/${product.id}`}
                      onClick={() => {
                        setCartActive(false);
                        handleProductClick();
                        handleScrollToTop();
                      }}>
                      {product.name}
                    </Link>
                    <p>{product.brand}</p>
                    <span>
                      {product.quantity}
                      <span>x</span> ${product.price}
                    </span>
                  </div>
                  <Quantity
                    qty={product.quantity}
                    toggleProductQuantity={toggleProductQuantity}
                    id={product.id}
                  />
                  <button
                    className="product-delete"
                    onClick={() => removeProduct(product.id)}>
                    <TfiClose />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <span className="subtotal">
                Subtotal <span>${cartTotal}</span>
              </span>
              <div className="buttons">
                <button className="checkout" disabled={isCheckoutDisabled}>
                  Checkout
                </button>
                <Link
                  className="view-cart"
                  to="/cart"
                  onClick={() => setCartActive(false)}>
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
