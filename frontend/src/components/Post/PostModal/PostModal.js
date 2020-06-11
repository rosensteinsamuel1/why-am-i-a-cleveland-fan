import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "react-modal";

import styles from "./PostModal.module.scss";

Modal.setAppElement("#modal-root");

const PostModal = forwardRef((props, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    };
  });

  const open = () => {
    setModalIsOpen(true);
  };

  const close = () => {
    setModalIsOpen(false);
  };

  const afterOpenModal = () => {
    console.log("afterOpenModal");
  };

  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={close}
        onAfterOpen={afterOpenModal}
      >
        <button onClick={close}>Close Modal</button>
        <h1>Post Modal</h1>
      </Modal>
    </div>
  );
});

export default PostModal;
