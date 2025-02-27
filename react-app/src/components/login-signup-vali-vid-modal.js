import LoginSignupVid from "../assets/login-signuo-validation-vid.mp4";
import { useRef } from "react";

function LoginSignupVideoModal({ onClose }) {
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
      <video src={LoginSignupVid} controls></video>
    </div>
  );
}

export default LoginSignupVideoModal;
