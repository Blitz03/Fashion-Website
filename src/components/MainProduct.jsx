import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { urlFor } from "../lib/client";
import Quantity from "./Quantity";

export default function MainProduct() {
  const {
    products,
    addProduct,
    qty,
    qtyDecrease,
    qtyIncrease,
    handleScrollToTop,
    handleProductClick,
  } = useGlobalContext();
  const mainProduct = products[0];
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (mainProduct) {
      setSelectedImage(mainProduct.images[0]);
    }
  }, [mainProduct]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    mainProduct && (
      <section className="main-product">
        <div className="title">Deal of the week</div>
        <div className="container">
          <div className="image-side">
            {selectedImage && (
              <img
                src={urlFor(selectedImage)}
                alt={mainProduct.name}
                className="selected-image"
              />
            )}
            <div className="product-images">
              {mainProduct.images.map((image, index) => (
                <button key={index} onClick={() => handleClick(image)}>
                  <img
                    src={urlFor(image)}
                    alt={mainProduct.name}
                    className={selectedImage === image ? "selected" : ""}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="details">
            <p>DEAL OF THE WEEK</p>
            <Link
              to={`/shop/${mainProduct.id}`}
              onClick={() => {
                handleScrollToTop();
                handleProductClick();
              }}>
              {mainProduct.name}
            </Link>
            <span className="price">${mainProduct.price}</span>
            <div className="buttons">
              <Quantity
                qty={qty}
                qtyDecrease={qtyDecrease}
                qtyIncrease={qtyIncrease}
              />
              <button
                className="add-to-cart"
                onClick={() => addProduct(mainProduct)}>
                Add to cart
              </button>
            </div>
            <p>{mainProduct.description.introduce}</p>
          </div>
        </div>
      </section>
    )
  );
}
