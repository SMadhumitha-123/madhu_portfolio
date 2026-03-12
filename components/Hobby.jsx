import React, { useState } from "react";
import "../styles/Hobby.css";

import hobby1 from "../assets/hobby1.jpeg";
import hobby2 from "../assets/hobby2.jpeg";
import hobby3 from "../assets/hobby3.jpeg";
import hobby4 from "../assets/hobby4.jpeg";
import hobby5 from "../assets/hobby5.jpeg";
import hobby6 from "../assets/hobby6.jpeg";
import hobby7 from "../assets/hobby7.jpeg";
import hobby8 from "../assets/hobby8.jpeg";
import hobby10 from "../assets/hobby10.jpeg";
import hobby11 from "../assets/hobby11.jpeg";
import hobby12 from "../assets/hobby12.jpeg";
import hobby13 from "../assets/hobby13.jpeg";


const images = [
  hobby1,
  hobby2,
  hobby3,
  hobby4,
  hobby5,
  hobby6,
  hobby7,
  hobby8,
  hobby10,
  hobby11,
  hobby12,
  hobby13,
];

const HobbyCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="hobbies" className="bento-section">
      <h2 className="section-title">My Hobby</h2>

      <p className="hobby-description">
        I enjoy drawing and painting, especially <strong>Mandala art</strong>,
        which is known for its intricate patterns and symmetry. Creating
        mandalas helps me improve focus, patience, and creativity, while also
        giving me a sense of calm and balance. Here are a few of my artworks.
      </p>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-slide">
          {/* Energy scan layer */}
          <div className="energy-scan"></div>

          {/* Image */}
          <img src={images[index]} alt="My artwork" />
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};

export default HobbyCarousel;
