import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
function Contact() {
  const [data, setData] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.text.trim()) {
      toast.error("Please Enter feedback", {
        position: "top-center",
      });
      return;
    }

    axios
      .post("https://personal-portfolio-server-1.onrender.com/", {
        message: data.text,
      })
      .then((res) => {
        console.log("Feedback submitted:", res.data);
        toast.success("Feedback Submitted..", {
          position: "top-center",
        });
      })
      .catch((err) => {
        console.error("Error submitting the feedback:", err);

        if (err.response) {
          // If response exists, check status
          if (err.response.status === 500) {
            toast.error("Feedback Submission Failed, Please Try Again..", {
              position: "top-center",
            });
          }
        } else {
          // Handle generic network errors
          toast.error("Network error! Please check your connection.", {
            position: "top-center",
          });
        }
      });
  };
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
      <div className="feedback-form-container">
        <form onSubmit={handleSubmit}>
          <textarea
            cols="30"
            rows="5"
            type="text"
            placeholder="Type your feedback"
            name="text"
            value={data.text} // Use correct state key
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
