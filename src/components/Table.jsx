import { urlFor } from "../lib/client";
import { useGlobalContext } from "../context";
import { TfiClose } from "react-icons/tfi";
import Quantity from "./Quantity";

export default function Table({ tdList, thList, type, handleRemove }) {
  const { addProduct, toggleProductQuantity } = useGlobalContext();
  return (
    <>
      <table>
        <thead>
          <tr>
            {thList.map((th, index) => (
              <th key={index} className={th}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tdList.map((product) => (
            <tr key={product.id}>
              <td className="product">
                <img src={urlFor(product.images[0])} alt={product.name} />
                {product.name}
              </td>
              <td>${product.price}</td>
              {type === "wishlist" ? (
                <>
                  <td className="stock">
                    {type === "wishlist" && product.stock > 0 ? (
                      <p className="in-stock">In Stock</p>
                    ) : (
                      <p className="out-of-stock">Out of stock</p>
                    )}
                  </td>
                  <td>
                    <button
                      className={
                        product.stock < 1
                          ? "add-to-cart disabled"
                          : "add-to-cart enabled"
                      }
                      onClick={() => addProduct(product)}
                      disabled={product.stock < 1}>
                      Add To Cart
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="qty">
                    <Quantity
                      qty={product.quantity}
                      toggleProductQuantity={toggleProductQuantity}
                      id={product.id}
                    />
                  </td>
                  <td>${(product.quantity * product.price).toFixed(2)}</td>
                </>
              )}
              <td>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="table-remove-product">
                  <TfiClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
