import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { landingSlides, handleScrollToTop } = useGlobalContext();

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? landingSlides.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = useCallback(() => {
    setCurrentSlide(
      currentSlide === landingSlides.length - 1 ? 0 : currentSlide + 1
    );
  }, [currentSlide, landingSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNextSlide]);

  return (
    <section className="landing">
      {landingSlides.map((slide, index) => (
        <div
          className={`landing-slide ${index === currentSlide ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url("${slide.image}")` }}>
          <div className="text">
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
            <Link to="/shop" onClick={handleScrollToTop}>
              Discover
            </Link>
          </div>
        </div>
      ))}
      <div className="dots">
        {landingSlides.map((slide, index) => (
          <span
            className={`dot ${index === currentSlide ? "active" : ""}`}
            key={index}
            onClick={() => handleSlideChange(index)}></span>
        ))}
      </div>
      <button className="slide-button left" onClick={goToPrevSlide}>
        <TfiAngleLeft />
      </button>
      <button className="slide-button right" onClick={goToNextSlide}>
        <TfiAngleRight />
      </button>
    </section>
  );
}
