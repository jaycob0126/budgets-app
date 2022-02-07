import { useRef } from "react";
import { useEffect } from "react";
import "./Modal.css";

function Modal({ children, hasOverlay, position, from, visibility }) {
  const modal = useRef();
  const modalContainer = useRef();
  useEffect(() => {
    var toPosition = "modal";
    var fromPosition = "modal";
    var visibile = "modal-show";

    if (visibility === "hidden") visibile = "modal-hidden";
    if (visibility === "show") visibile = "modal-show";

    switch (position) {
      case "center":
        toPosition = "modal-center";
        break;
      case "top":
        toPosition = "modal-top";
        break;
      case "bottom":
        toPosition = "modal-bottom";
        break;
      case "left":
        toPosition = "modal-left";
        break;
      case "right":
        toPosition = "modal-right";
        break;
    }

    switch (from) {
      case "top":
        fromPosition = "modal-from-top";
        break;
      case "bottom":
        fromPosition = "modal-from-bottom";
        break;
      case "left":
        fromPosition = "modal-from-left";
        break;
      case "right":
        fromPosition = "modal-from-right";
        break;
    }
    modal.current.classList = ["modal"];
    modal.current.classList.add(fromPosition);
    modal.current.classList.add(toPosition);
    modal.current.classList.add(visibile);
    modalContainer.current.classList = ["modal-container"];
    modalContainer.current.classList.add(visibile);
  }, [position, from, visibility]);

  return (
    <>
      <div ref={modalContainer}>
        <div className={`${hasOverlay ? "modal-overlay" : ""}`}></div>
        <div ref={modal}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
