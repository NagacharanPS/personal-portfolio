import React, { useRef } from "react";
import { MoveRight } from "lucide-react";
import "../css/videoButtons.css";

function VideoButtons({ onClose, onSelectVideo }) {
  const containerRef = useRef();
  const handleOverlayClick = (e) => {
    if (containerRef.current.value === e.target.value) {
      onClose();
    }
  };
  return (
    <div
      className="video-btns-container"
      ref={containerRef}
      onClick={handleOverlayClick}
    >
      <button className="close-1" onClick={onClose}>
        x
      </button>
      <div>
        <h3>Enrollment form submission</h3>
        <MoveRight id="arrow" />
        <button onClick={() => onSelectVideo("enrollment")}>Video</button>
      </div>
      <div>
        <h3>Login-Signup validation</h3>
        <MoveRight id="arrow" />
        <button onClick={() => onSelectVideo("loginSignup")}>Video</button>
      </div>
      <div>
        <h3>Forgot-Password validation</h3>
        <MoveRight id="arrow" />
        <button onClick={() => onSelectVideo("forgotPassword")}>Video</button>
      </div>
    </div>
  );
}

export default VideoButtons;
