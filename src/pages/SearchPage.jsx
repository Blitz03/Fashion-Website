import Product from "../components/Product";
import { useGlobalContext } from "../context";

export default function SearchPage() {
  const { results, query } = useGlobalContext();
  return (
    <div className="search-page">
      <div className="container">
        {results.length > 0 ? (
          <>
            <h1 className="shop-page-title">Search results for: “{query}”</h1>
            <div className="products-container wrap">
              {results.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <h1 className="shop-page-title nothing">Nothing to display!</h1>
        )}
      </div>
    </div>
  );
}
