import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = (props) => {
  const { toggle, isShowing, outerContent, children, className } = props;

  const onClose = () => {
    toggle();
    outerContent && outerContent.current.setAttribute("aria-hidden", "false");
  };
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isShowing) {
      outerContent && outerContent.current.setAttribute("aria-hidden", "true");
    }
  });

  const modal = (
    <FocusLock returnFocus>
      <Overlay onClick={onClose} />
      <dialog
        className={className}
        style={{ zIndex: 20 }}
        onKeyDown={handleEsc}
        open={true}
      >
        <div role="document">{children}</div>
      </dialog>
    </FocusLock>
  );

  return isShowing ? ReactDOM.createPortal(modal, window.document.body) : null;
};

export default Modal;
