import { useEffect } from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => modalRoot.removeChild(element);
  }, [element, modalRoot]);

  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
