import React, { useState, useEffect, useRef } from "react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalOverlayRef = useRef();

  const handleOverlayClick = (e) => {
    if (modalOverlayRef.current === e.target) {
      setIsOpen(false);
    }
  };

  return (
    isOpen && (
      <div
        className="modal-overlay"
        ref={modalOverlayRef}
        onClick={handleOverlayClick}
      >
        <div className="modal-content">
          <h2 className="welcome-text">
            Welcome! <span className="wave">👋</span>
          </h2>
          <p>Thank you for visiting my portfolio!</p>
          <button className="modal-close" onClick={closeModal}>
            x
          </button>
        </div>
      </div>
    )
  );
};

export default WelcomeModal;
