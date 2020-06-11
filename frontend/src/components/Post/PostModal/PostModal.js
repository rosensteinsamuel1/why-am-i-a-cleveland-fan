import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "react-modal";

import PostContent from "../PostContent";
import Comment from "../../Comment/Comment";

import styles from "./PostModal.module.scss";

Modal.setAppElement("#modal-root");

const customStyles = {
  content: {
    zIndex: "5",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: "30%",
    width: "60%",
    overflowY: "auto"
  }
};

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
        style={customStyles}
      >
        <div className={styles.modal__container}>
          <button onClick={close} className={styles.btn_close}>
            Close
          </button>
          <div className={styles.vent__wrapper}>
            <PostContent post={props.post} />
          </div>
          <div className={styles.comment_form}>
            {" "}
            <Comment
              post={props.post}
              onCommentSubmit={close}
              firebaseRef={props.firebaseRef}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default PostModal;
//style={customStyles}
