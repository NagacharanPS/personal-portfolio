import React, { useState, useEffect, useRef } from "react";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSideBarIcon, setShowSideBarIcon] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const sidebarRef = useRef(null); // Ref for the sidebar
  const sidebarIconRef = useRef(null); // Ref for the sidebar icon

  const toggleSidebar = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setShowSideBarIcon(false);
    } else {
      setTimeout(() => setShowSideBarIcon(true), 300);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const LoginCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const SignupCloseModal = () => {
    setIsSignupModalOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) && // Check if click is outside sidebar
        sidebarIconRef.current &&
        !sidebarIconRef.current.contains(event.target) // Check if click is outside sidebar icon
      ) {
        setIsActive(false);
        setShowSideBarIcon(true);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showSideBarIcon && (
        <div
          className="side-bar-icon"
          ref={sidebarIconRef}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <div className={`sidebar-container ${isActive ? "open" : ""}`}>
        <div
          className={`side-bar ${isActive ? "show" : ""}`}
          ref={sidebarRef} // Attach ref to the sidebar itself
        >
          <div className="close-container" onClick={toggleSidebar}>
            <span></span>
            <span></span>
          </div>

          <div className="login-signup">
            <button
              onClick={() => {
                handleLoginClick();
                setIsActive(false);
                setShowSideBarIcon(true);
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                handleSignupClick();
                setIsActive(false);
                setShowSideBarIcon(true);
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Login Form */}
      {isLoginModalOpen && (
        <div className="login-modal-overlay">
          <div className="login-modal">
            <div className="close-modal" onClick={LoginCloseModal}>
              X
            </div>
            <h1>Login</h1>
            <form className="login-form">
              <label>Email:</label>
              <input type="email" placeholder="Enter Email" name="email" />

              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />

              <div className="show-password-container">
                <input type="checkbox" id="show-password-input" />
                <label>Show Password</label>
              </div>

              <button type="button" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Modal for Signup Form */}
      {isSignupModalOpen && (
        <div className="signup-modal-overlay">
          <div className="signup-modal">
            <div className="close-modal" onClick={SignupCloseModal}>
              X
            </div>
            <h1>Signup</h1>
            <form className="signup-form">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="username"
              />
              <label>Email:</label>
              <input type="email" placeholder="Enter Email" name="email" />

              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />

              <div className="show-password-container">
                <input type="checkbox" id="show-password-input" />
                <label>Show Password</label>
              </div>

              <button type="button" className="signup-btn">
                Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
