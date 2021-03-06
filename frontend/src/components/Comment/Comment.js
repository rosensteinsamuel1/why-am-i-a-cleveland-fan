import React, { useContext } from "react";

import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

import styles from "./Comment.module.scss";

import { FirebaseContext } from "../../context/FirebaseContext";

const Comment = props => {
  const firebaseRef = useContext(FirebaseContext);

  const onSubmitHandler = comment => {
    // Push commit to Firebase

    // TODO: Create new comment in array with unique ID
    firebaseRef
      .ref()
      .child(`posts/${props.post.key}/comments`)
      .push(comment)
      .then(console.log(comment, "was submitted"));

    // Close Modal
    props.onCommentSubmit();
  };

  return (
    <div className={styles.comment_container}>
      <CommentForm onSubmit={onSubmitHandler} />
      <CommentList post={props.post} />
    </div>
  );
};

export default Comment;
