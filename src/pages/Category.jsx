import { useParams, Link } from "react-router-dom";
import Product from "../components/Product";
import { useGlobalContext } from "../context";

export default function Category() {
  const { category } = useParams();
  const { products, handleScrollToTop } = useGlobalContext();
  const categoryProducts = products.filter((product) =>
    product.categories.includes(category)
  );

  return (
    <div className="category">
      <div className="container">
        <Link to="/shop" onClick={handleScrollToTop}>
          Back To Shop
        </Link>
        <h1 className="shop-page-title">{category}</h1>
        {categoryProducts.length > 0 ? (
          <div className="products-container wrap">
            {categoryProducts.map((product) => (
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
