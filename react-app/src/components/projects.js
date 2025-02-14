import arrowIcon from "../assets/arrow.png";
import youtubeClone from "../assets/youtube-clone.png";
import tictactoe from "../assets/tic-tac-toe.png";
import calculator from "../assets/calculator.png";
import enrollment_form_1 from "../assets/enrollment-form-1.png";
import enrollment_form_2 from "../assets/enrollment-form-2.png";
import enrollment_form_3 from "../assets/enrollment-form-3.png";

function Projects() {
  return (
    <section id="projects">
      <p>Practical Applications of My Skills</p>
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-container">
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
        <div className="project-container">
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
        <div className="project-container">
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
        <div className="project-container">
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
              window.open("https://language-class-enrollment-form.netlify.app/")
            }
          >
            Live Demo
          </button>
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
