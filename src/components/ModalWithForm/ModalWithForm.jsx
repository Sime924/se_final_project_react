import "./ModalWithForm.css";

function ModalWithForm({
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  buttonText,
  switchButton,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : " "}`}
      aria-hidden={!isOpen}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        >
          {" "}
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {switchButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
