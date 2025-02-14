import checkMark from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";
function Experience() {
  return (
    <section id="experience">
      <div className="experience-text">
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>

      <div className="experience-about-container">
        <h2>Frontend Development</h2>

        <div className="skills">
          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3>HTML</h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3>CSS</h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3>JavaScript</h3>
            <h4>Experienced</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3>React JS</h3>
            <h4>Intermediate</h4>
          </div>

          <div className="skills-text">
            <img src={checkMark} alt="checkmark icon" />
            <h3>Git</h3>
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
