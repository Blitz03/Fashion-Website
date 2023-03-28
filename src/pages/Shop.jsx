import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { useGlobalContext } from "../context";
import { AiOutlineControl } from "react-icons/ai";

export default function Shop() {
  const { products, handleScrollToTop } = useGlobalContext();
  const [showFiltering, setShowFiltering] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const categoriesAvailable = [
    "coats",
    "jackets",
    "blazers",
    "shirts",
    "t-shirts",
    "jeans",
  ];

  const materialsAvailable = ["cotton", "down", "leather", "suede", "wool"];

  const colorsAvailable = [
    "black",
    "white",
    "red",
    "orange",
    "green",
    "pink",
    "brown",
    "grey",
    "beige",
    "blue",
  ];

  const sizesAvailable = ["xs", "s", "m", "l", "xl", "xxl"];

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  const filterProducts = useCallback(() => {
    let filtered = [...products];

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(
        (p) =>
          p.materials && selectedMaterials.every((m) => p.materials.includes(m))
      );
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(
        (p) => p.colors && selectedColors.every((c) => p.colors.includes(c))
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(
        (p) => p.sizes && selectedSizes.every((s) => p.sizes.includes(s))
      );
    }

    return filtered;
  }, [products, selectedMaterials, selectedColors, selectedSizes]);

  useEffect(() => {
    const filtered = filterProducts();

    let sorted = [...filtered];

    if (sortType === "priceAsc") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceDesc") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === "nameAsc") {
      sorted = sorted.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    } else if (sortType === "nameDesc") {
      sorted = sorted.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
    }

    setFilteredProducts(sorted);
  }, [sortType, filterProducts]);

  const handleMaterialChange = (e) => {
    const { value, checked } = e.target;

    setSelectedMaterials((prevSelectedMaterials) =>
      checked
        ? [...prevSelectedMaterials, value]
        : prevSelectedMaterials.filter((m) => m !== value)
    );
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;

    setSelectedColors((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((c) => c !== value)
    );
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;

    setSelectedSizes((prevSelectedSizes) =>
      checked
        ? [...prevSelectedSizes, value]
        : prevSelectedSizes.filter((s) => s !== value)
    );
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="title">
          <h1 className="shop-page-title">All Products</h1>
        </div>
        <div className="filter">
          <div className="row">
            <button onClick={() => setShowFiltering(!showFiltering)}>
              <AiOutlineControl />
              Filter
            </button>
            <div className="sort">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" onChange={handleSortTypeChange}>
                <option value="nameAsc">Alphabetically, A-Z</option>
                <option value="nameDesc">Alphabetically, Z-A</option>
                <option value="priceDesc">Price, high to low</option>
                <option value="priceAsc">Price, low to high</option>
              </select>
            </div>
          </div>
          <div className="products-found">
            <span>{filteredProducts.length} Products Found</span>
          </div>
          <div
            className={
              showFiltering ? "filtering-panel active" : "filtering-panel"
            }>
            <div className="column">
              <h2>Category</h2>
              <ul>
                {categoriesAvailable.map((category, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/shop/category/${category}`}
                        onClick={handleScrollToTop}>
                        {category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="column">
              <h2>Materials</h2>
              <ul>
                {materialsAvailable.map((material, index) => {
                  return (
                    <li key={index}>
                      <input
                        type="checkbox"
                        id={`material-checkbox-${material}`}
                        onChange={handleMaterialChange}
                        value={material}
                        checked={selectedMaterials.includes(material)}
                      />
                      <label htmlFor={`material-checkbox-${material}`}>
                        {material}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="column">
              <h2>Colors</h2>
              <ul>
                {colorsAvailable.map((color, index) => {
                  return (
                    <li key={index}>
                      <input
                        type="checkbox"
                        id={`color-checkbox-${color}`}
                        onChange={handleColorChange}
                        value={color}
                        checked={selectedColors.includes(color)}
                      />
                      <label htmlFor={`color-checkbox-${color}`}>{color}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="column">
              <h2>Size</h2>
              <ul>
                {sizesAvailable.map((size, index) => {
                  return (
                    <li key={index} className="size-list">
                      <input
                        type="checkbox"
                        id={`size-checkbox-${size}`}
                        onChange={handleSizeChange}
                        value={size}
                        checked={selectedSizes.includes(size)}
                      />
                      <label htmlFor={`size-checkbox-${size}`}>{size}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products-container wrap">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>There is no products!</p>
        )}
      </div>
    </div>
  );
}
