import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Product from "./Product";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

export default function Products({ section, largeScreenSlider }) {
  const { products, handleScrollToTop } = useGlobalContext();
  const [isDown, setIsDown] = useState(false);
  const [x, setX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const productsContainer = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setX(e.pageX - productsContainer.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isDown) return;
    setCurrentX(e.pageX - productsContainer.current.offsetLeft);
    const walk = (x - currentX) * 3;
    productsContainer.current.scrollLeft += walk;
  };

  const handlePrevClick = () => {
    productsContainer.current.scrollLeft -=
      productsContainer.current.offsetWidth;
  };

  const handleNextClick = () => {
    productsContainer.current.scrollLeft +=
      productsContainer.current.offsetWidth;
  };

  return (
    <section
      className={
        largeScreenSlider ? "products large-screen-slider" : "products"
      }>
      <div className="container">
        <div className="header">
          <h3 className="title">{section}</h3>
          {!largeScreenSlider && (
            <Link to="/shop" onClick={handleScrollToTop}>
              SEE ALL PRODUCTS
            </Link>
          )}
        </div>
        <div className="slide-buttons">
          <button className="left" onClick={handlePrevClick}>
            <TfiAngleLeft />
          </button>
          <button className="right" onClick={handleNextClick}>
            <TfiAngleRight />
          </button>
        </div>
        <div
          className={isDown ? "products-container grab" : "products-container"}
          ref={productsContainer}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
