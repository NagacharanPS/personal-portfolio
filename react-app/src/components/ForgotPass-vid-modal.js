import ForgotPasswordVideo from "../assets/forgot-password-validation-vid.mp4";
import { useRef } from "react";

function ForgotPasswordVideoModal({ onClose }) {
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
      <video src={ForgotPasswordVideo} controls></video>
    </div>
  );
}

export default ForgotPasswordVideoModal;
