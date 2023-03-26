import { useGlobalContext } from "../context";
import Table from "../components/Table";
import paymentsImg from "../images/payments.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartTotal, cart, removeProduct, handleScrollToTop } =
    useGlobalContext();
  const thList = ["product", "price", "qty", "subtotal", ""];
  return (
    <div className="cart table-page">
      <div className="container">
        <h3 className="page-title">Shopping Cart</h3>
        <div className="row">
          {cart.length > 0 ? (
            <>
              <div className="table-responsive cart-responsive">
                <Table
                  tdList={cart}
                  thList={thList}
                  type="cart"
                  handleRemove={removeProduct}
                />
              </div>
              <div className="order-summary-container">
                <div className="order-summary">
                  <h3>Order Summary</h3>
                  <div className="subtotal">
                    <p>Subtotal</p>
                    <span>${cartTotal}</span>
                  </div>
                  <div className="checkout">
                    <button>Proceed To Checkout</button>
                  </div>
                  <div className="payments">
                    <p>Accept Payment Methods</p>
                    <img src={paymentsImg} alt="payments" />
                  </div>
                </div>
                <Link to="/shop" onClick={handleScrollToTop}>
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <p className="empty">Your bag is empty!</p>
          )}
        </div>
      </div>
    </div>
  );
}
