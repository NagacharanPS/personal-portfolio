import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="email-container">
          <img className="email-icon" src={email} alt="email-icon" />
          <a href="mailto:nagacharanps987@gmail.com">
            nagacharanps987@gmail.com
          </a>
        </div>
        <p>Get in Touch</p>
        <div className="socials-container">
          <img
            src={linkedin}
            alt="linkedin-icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/nagacharanps/")
            }
          />
          <img
            src={github}
            alt="linkedin-icon"
            onClick={() => window.open("https://github.com/NagacharanPS")}
          />
          <img src={instagram} alt="linkedin-icon" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
