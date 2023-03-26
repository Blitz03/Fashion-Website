import payments from "../images/payments.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="main-footer"></div>
        <div className="bottom-footer">
          <p>
            © 2022{" "}
            <a
              href="https://github.com/Blitz03"
              target="_blank"
              rel="noreferrer">
              BLiTZ
            </a>
            . ALL RIGHTS RESERVED
          </p>
          <div className="payments">
            <p>Accept For</p>
            <img src={payments} alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
}
