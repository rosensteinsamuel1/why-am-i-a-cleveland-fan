import React, { useContext } from "react";

import CommentForm from "./CommentForm/CommentForm";
import { FirebaseContext } from "../../context/FirebaseContext";

const Comment = props => {
  const firebaseRef = useContext(FirebaseContext);

  const onSubmitHandler = comment => {
    // Push commit to Firebase

    // TODO: Create new comment in array with unique ID
    firebaseRef
      .ref()
      .child(`posts/${props.post.key}/comments`)
      .update(comment)
      .then(console.log(comment, "was submitted"));

    // Close Modal
    props.onCommentSubmit();
  };
  return <CommentForm onSubmit={onSubmitHandler} />;
};

export default Comment;
