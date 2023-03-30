import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, actionButton, children }) {
  const modalContainer = document.querySelector(".modal-container");

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    modalContainer.classList.add("modal-container--show");

    return () => {
      document.body.classList.remove("overflow-hidden");
      modalContainer.classList.remove("modal-container--show");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal-container-box modal-header-box">
        {children}
        {actionButton}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
