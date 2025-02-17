import React from "react";
import Modal from "./Modal";

const SignupModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Signup</h1>
      <form className="signup-form">
        <label>Username:</label>
        <input type="text" placeholder="Enter Your Name" name="name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter Email" name="email" />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" name="password" />

        <div className="show-password-container">
          <input type="checkbox" id="show-password-input" />
          <label>Show Password</label>
        </div>

        <button type="button" className="signup-btn">
          Signup
        </button>
      </form>
    </Modal>
  );
};

export default SignupModal;
