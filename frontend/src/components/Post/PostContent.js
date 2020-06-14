import React from "react";

import styles from "./PostContent.module.scss";

import dateDisplay from "../../utils/date_display";

import LogoImg from "./LogoImage";

const PostContent = props => {
  const { title, author, content, topic, timestamp } = props.post;

  const date = dateDisplay(timestamp);

  return (
    <React.Fragment>
      <LogoImg topic={topic} className={styles.vent__img} />
      <div className={styles.vent__title}>
        <p>
          <b>{title}</b>
        </p>
      </div>
      <div className={styles.vent__content}>
        <p>{content}</p>
      </div>
      <div className={styles.vent__author}>
        <p>{`Submitted by: ${author}`}</p>
      </div>
      <div className={styles.vent__date}>
        <p> {date.split(", ")[0]}</p>
      </div>
      <div className={styles.vent__time}>
        <p>{date.split(", ")[1]}</p>
      </div>
    </React.Fragment>
  );
};

export default PostContent;
