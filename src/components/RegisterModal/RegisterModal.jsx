import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// make error messaging for the register modal
// create registration complete modal

function RegisterModal({ isOpen, onClose, handleOnSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("");
    } else if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRegisterModalSubmit = (e) => {
    e.preventDefault();
    handleSignin({ email, password, username });
  };

  const isFormValid = Boolean(email && password && !emailError);

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleRegisterModalSubmit}
      isSubmitDisabled={!isFormValid}
      switchButton={
        <button
          type="button"
          className="signup__modal-switch-btn"
          onClick={handleOnSwitchToLogin}
        >
          or <span className="signup__modal-switch-txt">Sign in</span>
        </button>
      }
    >
      <label className="modal__label-register">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="modal__signin-email"
          placeholder="email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className="modal__label-register">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="modal__signin-password"
          placeholder="password"
          required
          minLength={8}
          onChange={handlePasswordChange}
          value={password}
          pattern="(?=.*[a-z])(?=.*[A-Z](?=.*[^A-Za-z0-9]).*"
          title="Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character"
        />
      </label>
      <label className="modal__label-username">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="modal__signup-username"
          placeholder="enter a Username"
          required
          minLength={6}
          maxLength={12}
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
