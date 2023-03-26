import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Quote() {
  const { handleScrollToTop } = useGlobalContext();
  return (
    <section className="quote">
      <div className="container">
        <p>
          With a strong sense of community and a moral responsibility, our brand
          was born. Our passion for the environment and unique design brought
          our vision, and products, to life.
        </p>
        <Link to="/about" onClick={handleScrollToTop}>
          About Store
        </Link>
      </div>
    </section>
  );
}
