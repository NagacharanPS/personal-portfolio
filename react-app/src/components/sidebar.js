import React, { useState } from "react";
import LoginModal from "./.components/login-form";
import SignupModal from "../Modals/signup-modal"; // Fixed import path

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSideBarIcon, setShowSideBarIcon] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("login"); // "login" or "signup"

  const toggleSidebar = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setShowSideBarIcon(false);
    } else {
      setTimeout(() => setShowSideBarIcon(true), 300);
    }
  };

  return (
    <>
      {/* Sidebar Toggle Icon (Hidden when sidebar opens) */}
      {showSideBarIcon && (
        <div className="side-bar-icon" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Sidebar (Visible when active) */}
      <div className={`side-bar ${isActive ? "show" : ""}`}>
        <div className="close-container" onClick={toggleSidebar}>
          <span></span>
          <span></span>
        </div>

        {/* Login & Signup buttons inside Sidebar */}
        <div className="login-signup">
          <button
            onClick={() => {
              setMode("login");
              setIsModalOpen(true);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode("signup");
              setIsModalOpen(true);
            }}
          >
            Signup
          </button>
        </div>
      </div>

      {/* Conditionally Render Login or Signup Modal */}
      {mode === "login" ? (
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        <SignupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
