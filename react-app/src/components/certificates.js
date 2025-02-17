import { useRef, useState } from "react";
import arrowIcon from "../assets/arrow.png";
import rightArrow from "../assets/right-arrow (1).png";
import htmlCertificate from "../certificates/HTML-certificate-linkedin (3)-1.png";
import cssCertificate from "../certificates/CSS-certificate-linkedin-1 - Copy.png";
import javascriptCertificate from "../certificates/Javascript-certificate-linkedin-1.png";
import reactCertificate from "../certificates/React.js-certificate-linkedin-1.png";
import nodeCertificate from "../certificates/Node.js-certificate-linkedin-1.png";
import gitCertificate from "../certificates/Git-certificate-linkedin-1.png";
import sqlCertificate from "../certificates/Mysql-certificate-linkedin.png";
import microsoftCertificate from "../certificates/Microsoft-student-ambassador-certificate-1.png";

function Certificates() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const certifications = [
    { id: 1, src: htmlCertificate, alt: "html-certificate" },
    { id: 2, src: cssCertificate, alt: "css-certificate" },
    { id: 3, src: javascriptCertificate, alt: "javascript-certificate" },
    { id: 4, src: reactCertificate, alt: "react-certificate" },
    { id: 5, src: nodeCertificate, alt: "node-certificate" },
    { id: 6, src: gitCertificate, alt: "git-certificate" },
    { id: 7, src: sqlCertificate, alt: "sql-certificate" },
    { id: 8, src: microsoftCertificate, alt: "microsoft-certificate" },
  ];

  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = index * 300;
    }
  };

  return (
    <section id="certifications">
      <p>My Certification Journey</p>
      <h1>Certifications</h1>
      <div className="certificates-container-wrapper">
        <img
          src={rightArrow}
          alt="left-arrow"
          className="left-arrow"
          onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
        />
        <div className="certificates-container" ref={scrollRef}>
          {certifications.map((cert, index) => (
            <img
              key={cert.id}
              src={cert.src}
              alt={cert.alt}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                position: index === currentIndex ? "relative" : "absolute",
              }}
            />
          ))}
        </div>
        <img
          src={rightArrow}
          alt="right-arrow"
          className="right-arrow"
          onClick={() =>
            scrollToIndex(Math.min(totalPages - 1, currentIndex + 1))
          }
        />
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => scrollToIndex(index)}
          >
            {index + 1}
          </button>
        ))}
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
