import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children} {/* Renders the content passed inside the modal */}
      </div>
    </div>
  );
};

export default Modal;
