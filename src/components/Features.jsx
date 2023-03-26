import { RiTShirt2Line, RiShipLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-box">
          <RiTShirt2Line />
          <div className="text">
            <h3>QUALITY MATERIALS</h3>
            <p>Gurantee 100% polyurethane and 100% polyester</p>
          </div>
        </div>
        <div className="feature-box">
          <RiShipLine />
          <div className="text">
            <h3>FREE SHIPPING</h3>
            <p>We free shipping for all oders over $199</p>
          </div>
        </div>
        <div className="feature-box">
          <GrMoney />
          <div className="text">
            <h3>SECURE PAYMENT</h3>
            <p>Guarante 100% secure payment online on our website</p>
          </div>
        </div>
      </div>
    </section>
  );
}
