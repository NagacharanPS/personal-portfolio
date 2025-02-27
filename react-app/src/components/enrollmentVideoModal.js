import enrollmentVideo from "../assets/enrollment-form-final-vid.mp4";
import { useRef } from "react";
import "../css/enrollmentVid.css";
function EnrollmentVideoModal({ onClose }) {
  const containerRef = useRef();
  const handleOverlayClick = (e) => {
    if (containerRef.current.value === e.target.value) {
      onClose();
    }
  };
  return (
    <div
      className="video-container"
      ref={containerRef}
      onClick={handleOverlayClick}
    >
      <button className="closebtn-2" onClick={onClose}>
        x
      </button>
      <video src={enrollmentVideo} controls></video>
    </div>
  );
}

export default EnrollmentVideoModal;
