import React, { useEffect, useRef } from "react";
import style from "./Modal.module.css";

const Modal = ({
  children,
  position,
  onClose,
  type,
  customModalWindowStyles,
}) => {
  const overlay = useRef(null);
  const handleKeyboardCloseWindow = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleClick = (e) => {
    if (e.target === overlay.current) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardCloseWindow);

    return () =>
      document.removeEventListener("keydown", handleKeyboardCloseWindow);
  });

  return (
    <div ref={overlay} className={style.modalBackdrop} onClick={handleClick}>
      <div className={style.modalBase}>
        <button type="button" onClick={onClose} className={style.closeBtn} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
