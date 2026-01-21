import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, handleSignIn, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginModalSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleLoginModalSubmit}
      switchButton={
        <button
          type="button"
          className="Signin__Modal-switch-btn"
          onClick={onSwitchToRegister}
        >
          or sign up
        </button>
      }
    >
      <label className="modal__label-signin">
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
      <label className="modal__label-signin">
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
