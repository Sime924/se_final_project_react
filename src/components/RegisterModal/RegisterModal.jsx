import { useState } from "react";
import "./RegisterModal.css";

function RegisterModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleRegisterModalSubmit}
      switchButton={
        <button
          type="button"
          className="Signin__Modal-switch-btn"
          onClick={onSwitchToLogin}
        >
          or sign in
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
    </ModalWithForm>
  );
}

export default RegisterModal;
