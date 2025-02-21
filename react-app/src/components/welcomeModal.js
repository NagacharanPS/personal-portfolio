import React, { useState, useEffect } from "react";

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

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>
            Welcome! <span className="wave">👋</span>
          </h2>
          <p>Thank you for visiting my portfolio!</p>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    )
  );
};

export default WelcomeModal;
