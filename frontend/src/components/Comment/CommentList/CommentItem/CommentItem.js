import React from "react";

import styles from "./CommentItem.module.scss";
import dateDisplay from "../../../../utils/date_display";

const CommentItem = props => {
  const { timestamp, name, comment } = props.comment;

  const date = dateDisplay(timestamp);

  return (
    <li>
      <span> {comment}</span>

      <div className={styles.vent__date}>
        <span style={{ fontSize: "1rem" }}>
          Submitted by: {name} | {date.split(", ")[0]}{" "}
        </span>
      </div>
    </li>
  );
};

export default CommentItem;
