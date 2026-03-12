import React from "react";
import "../styles/Profiles.css";

import badge1 from "../assets/1.jpg";
import badge2 from "../assets/2.jpg";
import badge3 from "../assets/3.jpg";
import badge4 from "../assets/4.jpg";
import badge5 from "../assets/5.jpg";

import leetcodeLogo from "../assets/leetcode.jpg";
import skillrackLogo from "../assets/skillrack.png";

const Profiles = () => {
  return (
    <section id="profiles" className="profiles-section">
      <h2 className="section-title">My Coding Profiles</h2>

      <div className="profiles-container">

        {/* LeetCode */}
        <div className="profile-card">
          <div className="profile-header">
            <img src={leetcodeLogo} alt="LeetCode Logo" />
            <h3>LeetCode</h3>
          </div>

          <a
            href="https://leetcode.com/u/smSVd1EsGI/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile
          </a>

          <div className="badge-rotator">
            <div className="badge-track">
              <img src={badge1} alt="November Badge" />
              <img src={badge2} alt="50 Days 2025 Badge" />
              <img src={badge3} alt="January Badge" />
              <img src={badge4} alt="50 Days 2026 Badge" />
              <img src={badge5} alt="February Badge" />

              {/* duplicate for infinite scroll */}
              <img src={badge1} alt="November Badge" />
              <img src={badge2} alt="50 Days 2025 Badge" />
              <img src={badge3} alt="January Badge" />
              <img src={badge4} alt="50 Days 2026 Badge" />
              <img src={badge5} alt="February Badge" />
            </div>
          </div>
        </div>

        {/* Skillrack */}
        <div className="profile-card">
          <div className="profile-header">
            <img src={skillrackLogo} alt="Skillrack Logo" />
            <h3>Skillrack</h3>
          </div>

          <a
            href="https://www.skillrack.com/faces/resume.xhtml?id=440720&key=e8be07c057424740890007fdb48adda624714269"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile
          </a>

          <div className="skillrack-stats">
            <p>✔ Problems Solved: <span>2700+</span></p>
            <p>✔ Bronze Medals: <span>1450+</span></p>
            <p>✔ Strong Problem Solving Foundation</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profiles;