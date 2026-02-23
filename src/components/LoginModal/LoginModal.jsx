import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, handleSignIn, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

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

  const handleLoginModalSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  const isFormValid = Boolean(email && password && !emailError);

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleLoginModalSubmit}
      isSubmitDisabled={!isFormValid}
      switchButton={
        <button
          type="button"
          className="signin__modal-switch-btn"
          onClick={onSwitchToRegister}
        >
          {" "}
          or <span className="signin__btn-switch-txt">Sign Up</span>
        </button>
      }
    >
      <label className="modal__label-signin-email">
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
        {emailError && <p className="modal__signin_error-text">{emailError}</p>}
      </label>
      <label className="modal__label-signin-password">
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
    </ModalWithForm>
  );
}

export default LoginModal;
