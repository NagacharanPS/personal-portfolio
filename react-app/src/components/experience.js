import { useState, useRef, useEffect } from "react";
import ScrollToVisible from "./scrollToVisible";
import checkMark from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";
import "../css/experience.css";

function Experience() {
  const [sectionVisibility, setSectionVisibility] = useState({});

  const sectionRefs = {
    profile: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    certificates: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleVisibilityChange = (section, isVisible) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [section]: isVisible,
    }));
  };

  return (
    <section
      id="experience"
      ref={sectionRefs.experience}
      className={sectionVisibility.experience ? "visible" : ""}
    >
      <ScrollToVisible
        section="experience"
        sectionRef={sectionRefs.experience}
        onVisibilityChange={handleVisibilityChange}
      />

      <div className="experience-text">
        <p>Explore My</p>
        <h1 className={sectionVisibility.experience ? "typing-visible" : ""}>
          Experience
        </h1>
      </div>

      <div className="experience-about-container">
        <h2>Frontend Development</h2>

        <div className="skills">
          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3
              className={sectionVisibility.experience ? "typing-visible" : ""}
            >
              HTML
            </h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3
              className={sectionVisibility.experience ? "typing-visible" : ""}
            >
              CSS
            </h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3
              className={sectionVisibility.experience ? "typing-visible" : ""}
            >
              JavaScript
            </h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3
              className={sectionVisibility.experience ? "typing-visible" : ""}
            >
              React JS
            </h3>
            <h4>Intermediate</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3
              className={sectionVisibility.experience ? "typing-visible" : ""}
            >
              Git
            </h3>
            <h4>Experienced</h4>
          </div>
        </div>
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="arrow-icon"
        onClick={() => (window.location.href = "#certifications")}
      />
    </section>
  );
}

export default Experience;
