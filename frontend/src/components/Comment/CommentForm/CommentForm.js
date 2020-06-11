import React, { useState } from "react";

const CommentForm = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    const comment = {
      name: enteredName,
      comment: enteredComment,
      timestamp: Date.now()
    };
    props.onSubmit(comment);
    setEnteredName("");
    setEnteredComment("");
    console.log("comment:", comment);
  };

  return (
    <form>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={enteredName}
        onChange={event => {
          setEnteredName(event.target.value);
        }}
      />
      <input
        type="text"
        id="comment"
        placeholder="Write a comment..."
        value={enteredComment}
        onChange={event => {
          setEnteredComment(event.target.value);
        }}
      />
      <div className="blog-form__actions">
        <button type="submit" onClick={submitHandler}>
          Submit Post
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
