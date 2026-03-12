import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Achievements.css";

import ach1 from "../assets/ach1.jpeg";
import ach2 from "../assets/ach2.jpeg";
import ach3 from "../assets/ach3.jpeg";
import ach4 from "../assets/ach4.jpeg";
import ach5 from "../assets/ach5.jpeg";
import ach6 from "../assets/ach6.jpeg";
import ach7 from "../assets/ach7.jpeg";
import ach8 from "../assets/ach8.jpeg";
import ach9 from "../assets/ach9.jpeg";
import ach10 from "../assets/ach10.jpeg"
import ach11 from "../assets/ach11.jpeg"
import ach12 from "../assets/ach12.jpeg"




const achievementsData = [
  { img: ach1, desc: "Secured Rank 1 in Academic Year 2023-2024" },
  { img: ach2, desc: "Secured Thrid Prize in National Voter's Day 2024 Inland Letter Writing Competition" },
  { img: ach3, desc: "Presented a Research Article in a Global Conference" },
  { img: ach4, desc: "Secured 86th Rank in CodeQuezt Contest:DSA by Naukri Campus" },
  { img: ach5, desc: "Secured Thrid Prize (with Cash Prize Rs.500/-) in National Voter's Day 2024 Inland Letter Writing Competition" },
  { img: ach6, desc: "Secured Second prize in 'Minutes_to_Win' contest conducted by CSI branch" },
  { img: ach7, desc: "LIC Student of the Year Award 2019" },
  { img: ach8, desc: "Secured First Class in Hindi Diploma Examination" },
  { img: ach9, desc: "Diploma in Software Engineering(C & CPP)" },
  { img: ach10, desc: "Diploma in Software Engineering(Python & SQL)" },
  { img: ach11, desc: "Secured First Prize in 'TechTrivia' event in  Intra college Technical Symposium" },
  { img: ach12, desc: "Got Consolation Prize in Drawing Competition conducted on National Voter's Day 2026" },

];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="achievements" className="ach-section">
      <h2 className="section-title">Achievements</h2>

      <Slider {...settings} className="ach-slider">
        {achievementsData.map((ach, index) => (
          <div key={index} className="ach-slide">
            <div
              className="ach-card-carousel"
              onClick={() => setSelectedImage(ach.img)}
            >
              <img src={ach.img} alt={`Achievement ${index + 1}`} />
            </div>
            <p className="ach-desc">{ach.desc}</p>
          </div>
        ))}
      </Slider>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Achievements;
