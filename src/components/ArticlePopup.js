import "../css/article-popup.css";

import { useTranslation } from "react-i18next";

import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

function ArticlePopup({ children, onClose }) {
  const modalContainer = document.querySelector('.modal-container')

  const { t } = useTranslation();

  const modalEl = useRef();
  const btnEl = useRef();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    modalContainer.classList.add('modal-container--show')
    const handler = (e) => {
      if (
        modalEl.current.contains(e.target) ||
        btnEl.current.contains(e.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.body.classList.remove("overflow-hidden");
      modalContainer.classList.remove('modal-container--show')
      document.removeEventListener("click", handler);
    };
  });

  return ReactDOM.createPortal(
    <>
      <div ref={modalEl} className="modal-bg"></div>
      <div className="modal-container-box article-popup-box">
        {children}
        <button ref={btnEl} className="btn-general__bg btn-general modal-btn">
          {t("btn_close")}
        </button>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}

export default ArticlePopup;
