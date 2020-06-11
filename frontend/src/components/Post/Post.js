import React from "react";
import styles from "./Post.module.scss";

import PostModal from "./PostModal/PostModal";
import LogoImg from "./LogoImage";

const Post = props => {
  let date = new Date(props.timestamp).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className={styles.grid_item}>
      <div className={styles.vent} onClick={openModal}>
        <PostModal ref={modalRef}></PostModal>
        <LogoImg topic={props.topic} className={styles.vent__img} />{" "}
        <div className={styles.vent__title}>
          <p>
            <b>{props.title}</b>
          </p>
        </div>
        <div className={styles.vent__content}>
          <p>{props.content}</p>
        </div>
        <div className={styles.vent__author}>
          <p>{`Submitted by: ${props.author}`}</p>
        </div>
        <div className={styles.vent__date}>
          <p> {date.split(", ")[0]}</p>
        </div>
        <div className={styles.vent__time}>
          <p>{date.split(", ")[1]}</p>
        </div>
        {props.comments ? (
          <div className={styles.vent__comment_count}>
            <p> {`Comments (${props.comments.length})`}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
