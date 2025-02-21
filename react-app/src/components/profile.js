import { useState, useRef } from "react";
import ScrollToVisible from "./scrollToVisible";
import profileImg from "../assets/profile-1.png";
import resume from "../assets/resume.pdf";
import "../css/profile.css";

function Profile() {
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
      ref={sectionRefs.profile}
      id="profile"
      className={sectionVisibility.profile ? "visible" : ""}
    >
      {/* Pass the ref to ScrollToVisible */}
      <ScrollToVisible
        section="profile"
        sectionRef={sectionRefs.profile}
        onVisibilityChange={handleVisibilityChange}
      />

      <div className="profile-pic-container">
        <img src={profileImg} alt="profile-pic" />
      </div>

      <div className="profile-about-container">
        <div className="profile-text">
          <p>Hello I'm</p>
          <h1 className={sectionVisibility.profile ? "typing-visible" : ""}>
            Nagacharan P S
          </h1>
          <h2>Fullstack Developer</h2>
        </div>

        <div className="profile-btn-container">
          <button onClick={() => window.open(resume)}>Download Resume</button>
          <button onClick={() => (window.location.href = "./#contact")}>
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
