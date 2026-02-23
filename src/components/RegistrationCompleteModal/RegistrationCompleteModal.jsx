import "./RegistrationCompleteModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationCompleteModal(isOpen, onClose) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <p>Registration completed successfully</p>
      <button>Sign in</button>
    </ModalWithForm>
  );
}

export default RegistrationCompleteModal;
