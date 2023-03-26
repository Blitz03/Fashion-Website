import { useState } from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";
import { useGlobalContext } from "../context";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

export default function Product({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { handleProductClick, handleScrollToTop } = useGlobalContext();

  const handlePrevClick = () => {
    const index =
      currentImageIndex === 0
        ? product.images.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const handleNextClick = () => {
    const index =
      currentImageIndex === product.images.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="product-box" onClick={handleProductClick}>
        <div className="image">
          <button className="left" onClick={handlePrevClick}>
            <TfiAngleLeft />
          </button>
          <button className="right" onClick={handleNextClick}>
            <TfiAngleRight />
          </button>
          <img
            src={urlFor(product.images[currentImageIndex])}
            alt={product.name}
          />
          <Link to={`/shop/${product.id}`} onClick={handleScrollToTop}>
            View Details
          </Link>
        </div>
        <Link to={`/shop/${product.id}`} onClick={handleScrollToTop}>
          {product.name}
        </Link>
        <span>${product.price}</span>
      </div>
    </>
  );
}
