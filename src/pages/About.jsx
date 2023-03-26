import Features from "../components/Features";
import aboutImg from "../images/about.jpg";
import about01 from "../images/about-01.jpg";
import about02 from "../images/about-02.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">Fashionary's Story</h1>
        <p className="page-desc">
          Established in 1991, 2 fashion artists work together in UK, The
          inspiration got from natural, color pastel & activities the daily.
          Fashionary items alway look very basic but never out trend, easy to
          mixed with any style.
        </p>
        <div className="image">
          <img src={aboutImg} alt="about" />
        </div>
        <Features />
      </div>
      <div className="about-company">
        <div className="container">
          <div className="row">
            <div className="box">
              <div className="box-image">
                <img src={about01} alt="company" />
              </div>
              <h2>THE COMPANY</h2>
              <p>
                <span>
                  With a strong sense of community and a moral responsibility,
                  our brand was born. Our passion for the environment and unique
                  design brought our vision, and products, to life.
                </span>
              </p>
              <p>
                Each product is infused with the elements of aroma, memory,
                place and beauty traditions from across the globe. These
                “artifacts” carry with them stories and maps of their
                discoveries. Always striving to inspire and to be inspired.
              </p>
              <p>
                <strong>EST. 1991</strong>
              </p>
            </div>
            <div className="box">
              <div className="box-image">
                <img src={about02} alt="leader" />
              </div>
              <h2>THE LEADER</h2>
              <p>
                What that starts with, then, is a design which meets the needs
                not only of today and tomorrow, but the tomorrow after tomorrow,
                too, and of any number of tomorrows after that. It is a design
                which has designs to be, above all, pleasing to wear and
                satisfying to use, and, all the while, to go about its business
                in a way best described as unassuming.
              </p>
              <p>
                Absolutely no hassle. No matter what you spill on it - coffee,
                oil, cranberry juice, nail polish, you can easily wipe it clean
                with just soap and water.
              </p>
              <p>From Durotan with Love,</p>
              <p>
                <strong>LOGAN CEE</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
