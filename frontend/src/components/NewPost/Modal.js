import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={styles.modalWrapper}>
        <div onClick={close} className={styles.modalBackdrop} />
        <div className={styles.modalBox}>{props.children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default Modal;
