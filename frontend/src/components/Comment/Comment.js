import React from "react";

import CommentForm from "./CommentForm/CommentForm";

const Comment = props => {
  const onSubmitHandler = comment => {
    // Push commit to Firebase

    console.log(comment, "was submitted");

    // Close Modal
    props.onCommentSubmit();
  };
  return <CommentForm onSubmit={onSubmitHandler} />;
};

export default Comment;
