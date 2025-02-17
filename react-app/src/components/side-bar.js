import React, { useState } from "react";
import axios from "axios";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSideBarIcon, setShowSideBarIcon] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [signupData, setSignupData] = useState({
    username: "",
    signupEmail: "",
    signupPassword: "",
  });

  const handleChange = (e) => {
    setSignupData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7070/signup", {
        username: signupData.username,
        email: signupData.signupEmail,
        password: signupData.signupPassword,
      })
      .then((res) => console.log("signup data submitted:", res.data))
      .catch((err) =>
        console.error("Error while submitting the signup data:", err)
      );
  };

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

  return (
    <>
      {showSideBarIcon && (
        <div className="side-bar-icon" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {isActive && (
        <div className={`sidebar-container ${isActive ? "open" : ""}`}>
          <div className={`side-bar ${isActive ? "show" : ""}`}>
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
      )}

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
            <form className="signup-form" onSubmit={handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="username"
                onChange={handleChange}
                value={signupData.username}
              />
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="signupEmail"
                onChange={handleChange}
                value={signupData.signupEmail}
              />

              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="signupPassword"
                onChange={handleChange}
                value={signupData.signupPassword}
              />

              <div className="show-password-container">
                <input type="checkbox" id="show-password-input" />
                <label>Show Password</label>
              </div>

              <button type="submit" className="signup-btn">
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
