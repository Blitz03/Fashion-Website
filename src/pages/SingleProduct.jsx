import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { urlFor } from "../lib/client";
import Products from "../components/Products";
import Quantity from "../components/Quantity";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tabActive, setTabActive] = useState(false);
  const {
    products,
    qtyDecrease,
    qtyIncrease,
    qty,
    addProduct,
    addToWish,
    wishlist,
    handleScrollToTop,
  } = useGlobalContext();
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    product && (
      <div className="single-product-page">
        <div className="container">
          <div className="single-product">
            <div className="image">
              {selectedImage && (
                <img
                  src={urlFor(selectedImage)}
                  alt={product.name}
                  className="selected-image"
                />
              )}
              <div className="slide-images">
                {product.images.map((image) => (
                  <button onClick={() => handleClick(image)} key={image._key}>
                    <img
                      src={urlFor(image)}
                      alt={urlFor(image)}
                      className={selectedImage === image ? "selected" : ""}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="details">
              <Link
                to="/shop"
                className="back-to-shop"
                onClick={handleScrollToTop}>
                Back to shop
              </Link>
              <div className="text">
                <span className="washable">WASHABLE</span>
                <h3>{product.name}</h3>
                <ul className="rating">
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                  <li>
                    <AiOutlineStar />
                  </li>
                </ul>
                <span className="price">${product.price}</span>
                <p className="status">
                  Status:{" "}
                  {product.stock > 0 ? (
                    <span className="in-stock">In Stock</span>
                  ) : (
                    <span className="out-of-stock">Out Of Stock</span>
                  )}
                </p>
              </div>
              <div className="buttons">
                <div className="primary-buttons">
                  <Quantity
                    qty={qty}
                    qtyIncrease={qtyIncrease}
                    qtyDecrease={qtyDecrease}
                  />
                  <button
                    className="add-to-cart"
                    onClick={() => addProduct(product)}
                    disabled={product.stock < 1}>
                    Add To Cart
                  </button>
                </div>
                <button
                  className="add-to-wish"
                  onClick={() => addToWish(product)}>
                  {wishlist.includes(product) ? (
                    <BsSuitHeartFill />
                  ) : (
                    <BsSuitHeart />
                  )}{" "}
                  {wishlist.includes(product)
                    ? "Added To Wishlist"
                    : "Add To Wishlist"}
                </button>
              </div>
              <ul className="info">
                <li className="sku">
                  Sku <span>{product.sku}</span>
                </li>
                <li className="categories">
                  Categories{" "}
                  <div>
                    {product.categories.map((category, index) => (
                      <span key={index}>
                        {index > 0 && ", "}
                        {category}
                      </span>
                    ))}
                  </div>
                </li>
                <li className="brand">
                  Brand <span>{product.brand}</span>
                </li>
              </ul>
              <ul className="tabs">
                <li className="description">
                  <button onClick={() => setTabActive(!tabActive)}>
                    Description {tabActive ? <TfiAngleUp /> : <TfiAngleDown />}
                  </button>
                  {tabActive && (
                    <div className="text">
                      <h3>Introduce</h3>
                      <p>{product.description.introduce}</p>
                      <h3>Material & Washing Instructions</h3>
                      <p>{product.description.material}</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Products section="Related Products" largeScreenSlider />
      </div>
    )
  );
}
