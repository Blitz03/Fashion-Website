import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function NotFound() {
  const { handleScrollToTop } = useGlobalContext();
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page is not found.</p>
      <Link to="/" onClick={handleScrollToTop}>
        Back to homepage
      </Link>
    </div>
  );
}
