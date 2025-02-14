import { useRef } from "react";
import arrowIcon from "../assets/arrow.png";
import rightArrow from "../assets/right-arrow (1).png";
import htmlCertificate from "../certificates/HTML-certificate-linkedin (3)-1.png";
import cssCertificate from "../certificates/CSS-certificate-linkedin-1 - Copy.png";
import javascriptCertificate from "../certificates/Javascript-certificate-linkedin-1.png";
import reactCertificate from "../certificates/React.js-certificate-linkedin-1.png";
import nodeCertificate from "../certificates/Node.js-certificate-linkedin-1.png";
import gitCertificate from "../certificates/Git-certificate-linkedin-1.png";
import sqlCertificate from "../certificates/Mysql-certificate-linkedin.png";
function Certificates() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <section id="certifications">
      <p>My Certification Journey</p>
      <h1>Certifications</h1>

      <div className="certificates-container-wrapper">
        <img
          src={rightArrow}
          alt="rightArrow"
          className="left-arrow"
          onClick={scrollLeft}
        />
        <div className="certificates-container" ref={scrollRef}>
          <img src={htmlCertificate} alt="html-certificate" />
          <img src={cssCertificate} alt="css-certificate" />
          <img src={javascriptCertificate} alt="javascript-certificate" />
          <img src={reactCertificate} alt="react.js-certificate" />
          <img src={nodeCertificate} alt="node-certificate" />
          <img src={gitCertificate} alt="git-certificate" />
          <img src={sqlCertificate} alt="mysql-certificate" />
        </div>
        <img
          src={rightArrow}
          alt="left-arrow"
          className="right-arrow"
          onClick={scrollRight}
        />
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="arrow-icon"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

export default Certificates;
