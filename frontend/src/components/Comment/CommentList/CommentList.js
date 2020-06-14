import React from "react";

import CommentItem from "./CommentItem/CommentItem";

import styles from "./CommentList.module.scss";

const CommentList = props => {
  return (
    <div className={styles.comment_list}>
      {" "}
      <h3>Comments</h3>
      <ul>
        {props.post.comments.map(comment => (
          <CommentItem comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
