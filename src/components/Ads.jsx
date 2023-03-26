import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import ads01 from "../images/ads-01.jpg";
import ads02 from "../images/ads-02.jpg";

export default function Ads() {
  const { handleScrollToTop } = useGlobalContext();
  return (
    <section className="ads">
      <div className="container">
        <div className="ad">
          <img src={ads01} alt="ads-01" />
          <div className="text">
            <span>LIMITED EDITION</span>
            <h3>Essential Items</h3>
            <p>
              Simple alway is the best choice for your any style. Check our
              lookbook
            </p>
            <Link to="/shop" onClick={handleScrollToTop}>
              Shop Now
            </Link>
          </div>
        </div>
        <div className="ad">
          <img src={ads02} alt="ads-02" />
          <div className="text">
            <span>30%</span>
            <h3>Discount</h3>
            <p>
              Simple alway is the best choice for your any style. Check our
              lookbook
            </p>
            <Link to="/shop" onClick={handleScrollToTop}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
