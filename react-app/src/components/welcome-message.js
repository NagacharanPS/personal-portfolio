import { useState, useEffect } from "react";
import Modal from "../Modals/welcome-modal";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 3000); // Auto-close after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2 className="welcome">👋 Welcome!</h2>
      <p className="welcome-txt">
        Glad to have you here. Explore my portfolio! 🚀
      </p>
    </Modal>
  );
};

export default WelcomeModal;
