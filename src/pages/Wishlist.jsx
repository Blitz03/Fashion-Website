import { useGlobalContext } from "../context";
import Table from "../components/Table";

export default function Wishlist() {
  const { wishlist, removeFromWish } = useGlobalContext();
  const thList = ["product", "price", "status", "", ""];
  return (
    <div className="wishlist table-page">
      <div className="container">
        <h3 className="page-title">Wishlist</h3>
        <div className="table-responsive">
          {wishlist.length > 0 ? (
            <Table
              tdList={wishlist}
              thList={thList}
              type="wishlist"
              handleRemove={removeFromWish}
            />
          ) : (
            <p className="empty">Your wishlist is empty!</p>
          )}
        </div>
      </div>
    </div>
  );
}
