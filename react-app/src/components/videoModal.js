import { useRef, useState, useEffect } from "react";

import EnrollmentVideoModal from "./enrollmentVideoModal";
import LoginSignupVideoModal from "./login-signup-vali-vid-modal";
import ForgotPasswordVideoModal from "./ForgotPass-vid-modal";
import VideoButtons from "./videoButtons";
import "../css/videoModal.css";

function VideoModal({ onClose, onOpen }) {
  const modalRef = useRef();

  const [videoButtonsModal, setVideoButtonsModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOverlayClick = (event) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    setVideoButtonsModal(onOpen);
  }, [onOpen]);

  const handleBtnClick = (videoType) => {
    setSelectedVideo(videoType);
    setVideoButtonsModal(false);
  };

  return (
    <div className="video-overlay" ref={modalRef} onClick={handleOverlayClick}>
      <div className="video-content">
        {videoButtonsModal && (
          <VideoButtons onClose={onClose} onSelectVideo={handleBtnClick} />
        )}
        {selectedVideo === "enrollment" && (
          <EnrollmentVideoModal onClose={onClose} />
        )}
        {selectedVideo === "loginSignup" && (
          <LoginSignupVideoModal onClose={onClose} />
        )}
        {selectedVideo === "forgotPassword" && (
          <ForgotPasswordVideoModal onClose={onClose} />
        )}
      </div>
    </div>
  );
}

export default VideoModal;
