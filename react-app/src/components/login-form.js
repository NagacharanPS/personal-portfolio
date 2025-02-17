import React from "react";
import Modal from "../Modals/login-modal";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Login</h1>
      <form className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" name="email" />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" name="password" />

        <div className="password-below-container">
          <div className="show-password-container">
            <input type="checkbox" id="show-password-input" />
            <label>Show Password</label>
          </div>
          \
        </div>

        <button type="button" className="login-btn">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;
