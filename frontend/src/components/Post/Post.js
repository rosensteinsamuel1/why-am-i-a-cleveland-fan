import React from "react";
import styles from "./Post.module.scss";

import PostModal from "./PostModal/PostModal";
import PostContent from "./PostContent";

const Post = props => {
  const {
    key,
    title,
    author,
    content,
    topic,
    timestamp,
    comments
  } = props.post;

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className={styles.grid_item} key={key}>
      <div className={styles.vent} onClick={openModal}>
        <PostModal ref={modalRef} post={props.post}></PostModal>
        <PostContent post={props.post} />
        {comments ? (
          <div className={styles.vent__comment_count}>
            <p> {`Comments (${comments.length})`}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
