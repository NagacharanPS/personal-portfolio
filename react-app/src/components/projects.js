import { useState, useRef, useEffect } from "react";
import ScrollToVisible from "./scrollToVisible";
import arrowIcon from "../assets/arrow.png";
import imageArrowIcon from "../assets/green-arrow-icon.png";
import youtubeClone from "../assets/youtube-clone.png";
import tictactoe from "../assets/tic-tac-toe.png";
import calculator from "../assets/calculator.png";
import enrollment_form_1 from "../assets/enrollment-form-1.png";
import enrollment_form_2 from "../assets/enrollment-form-2.png";
import enrollment_form_3 from "../assets/enrollment-form-3.png";
import crudApp from "../assets/crud-app.png";
import VideoModal from "./videoModal";
import "../css/project.css";

function Projects() {
  const [sectionVisibility, setSectionVisibility] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const sectionRefs = {
    profile: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    certificates: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleVisibilityChange = (section, isVisible) => {
    // console.log(`Visibility changed: ${section} is now ${isVisible}`);
    setSectionVisibility((prev) => ({
      ...prev,
      [section]: isVisible,
    }));
  };
  return (
    <section
      id="projects"
      ref={sectionRefs.projects}
      className={sectionVisibility.projects ? "visible" : ""}
    >
      <ScrollToVisible
        section="projects"
        sectionRef={sectionRefs.projects}
        onVisibilityChange={handleVisibilityChange}
      />
      {showModal && <VideoModal onClose={onClose} onOpen={true} />}
      <p>Practical Applications of My Skills</p>
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-container">
          <div className="project-img-container">
            <img src={youtubeClone} alt="youtube clone" />
            <h2>Project One</h2>
            <button
              onClick={() =>
                window.open("https://github.com/NagacharanPS/YouTube-Clone")
              }
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open("https://nagacharanps-you-tube-clone.netlify.app/")
              }
            >
              Live Demo
            </button>
          </div>
          <img
            src={imageArrowIcon}
            alt="arrow-icon"
            className="image-arrow-icon"
          />
          <div className="project-details-container">
            <ul>
              <li>
                Developed a <strong>youtube-Clone</strong> clone using{" "}
                <strong>HTML</strong>,<strong>CSS</strong>, and{" "}
                <strong>JavaScript</strong>.
              </li>
              <li>
                Designed a clean and responsive user interface using{" "}
                <strong>CSS Grid</strong>
              </li>
              <li>
                Focused on front-end design without dynamic functionality.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img-container">
            <img src={tictactoe} alt="tic-tac-toe" />
            <h2>Project Two</h2>
            <button
              onClick={() =>
                window.open("https://github.com/NagacharanPS/Tic-Tac-Toe-repo")
              }
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open("https://nagacharanps-tic-tac-toe.netlify.app/")
              }
            >
              Live Demo
            </button>
          </div>
          <img
            src={imageArrowIcon}
            alt="arrow-icon"
            className="image-arrow-icon"
          />
          <div className="project-details-container">
            <ul>
              <li>
                Developed a <strong>Tic-Tac-Toe</strong> game with a{" "}
                <strong>major focus on JavaScript </strong>
                for game logic and interactivity.
              </li>
              <li>
                Ensured smooth gameplay with clear{" "}
                <strong>win detection and reset options</strong>.
              </li>
              <li>
                Designed to be fully{" "}
                <strong>responsive for both mobile and desktop</strong>.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img-container">
            <img src={calculator} alt="calculator" />
            <h2>Project Three</h2>
            <button
              onClick={() =>
                window.open("https://github.com/NagacharanPS/calculator-repo")
              }
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open("https://nagacharanps-calculator.netlify.app/")
              }
            >
              Live Demo
            </button>
          </div>
          <img
            src={imageArrowIcon}
            alt="arrow-icon"
            className="image-arrow-icon"
          />
          <div className="project-details-container">
            <ul>
              <li>
                Built Using <strong>HTML, CSS, and JavaScript</strong>.
              </li>
              <li>
                Supports basic arithmetic operations with a clear display and
                reset option.
              </li>
              <li>
                Designed to be fully{" "}
                <strong>responsive for both mobile and desktop</strong>.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img-container">
            <img src={enrollment_form_1} alt="language-class-enrollment-form" />
            <img src={enrollment_form_2} alt="calculator" />
            <img src={enrollment_form_3} alt="calculator" />
            <h2>Project Four</h2>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/NagacharanPS/Language-class-enrollment-form"
                )
              }
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://language-class-enrollment-form.netlify.app/"
                )
              }
            >
              Live Demo
            </button>
            <button onClick={toggleModal}>Video</button>
          </div>
          <img
            src={imageArrowIcon}
            alt="arrow-icon"
            className="image-arrow-icon"
          />
          <div className="project-details-container">
            <ul>
              <li>
                Built using <strong>React for the frontend</strong>, ensuring a
                dynamic and responsive user experience.
              </li>
              <li>
                Developed a secure{" "}
                <strong>
                  enrollment form with authentication, including email
                  notifications and password reset functionality
                </strong>
                .
              </li>
              <li>
                Implemented a{" "}
                <strong>
                  Node.js and MySQL backend for efficient data management and
                  user authentication
                </strong>
                .
              </li>
              <li>
                Added comprehensive <strong>error validation</strong> to ensure
                accurate and secure user input.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-container">
          <div className="project-img-container">
            <img src={crudApp} alt="crud-app" />

            <h2>Project Four</h2>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/NagacharanPS/Language-class-enrollment-form"
                )
              }
            >
              Github
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://language-class-enrollment-form.netlify.app/"
                )
              }
            >
              Live Demo
            </button>
            <button>Video</button>
          </div>
          <img
            src={imageArrowIcon}
            alt="arrow-icon"
            className="image-arrow-icon"
          />
          <div className="project-details-container">
            <ul>
              <li>
                Built using{" "}
                <strong>
                  React for the frontend, Node.js and Express.js for backend,
                  MySQL as a database
                </strong>
                , ensuring a dynamic and responsive user experience.
              </li>
              <li>
                User can{" "}
                <strong>Create, Edit, Delete and View the details.</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="arrow-icon"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

export default Projects;
