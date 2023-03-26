import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Quantity({
  qty,
  toggleProductQuantity,
  qtyIncrease,
  qtyDecrease,
  id,
}) {
  return (
    <div className="quantity">
      <button
        className="minus"
        onClick={() =>
          toggleProductQuantity
            ? toggleProductQuantity(id, "dec")
            : qtyDecrease()
        }>
        <AiOutlineMinus />
      </button>
      <span>{qty}</span>
      <button
        className="plus"
        onClick={() =>
          toggleProductQuantity
            ? toggleProductQuantity(id, "inc")
            : qtyIncrease()
        }>
        <AiOutlinePlus />
      </button>
    </div>
  );
}
