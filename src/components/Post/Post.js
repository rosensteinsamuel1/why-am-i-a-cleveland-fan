import React from "react";
import styles from "./Post.module.scss";
import LogoImg from "./LogoImage";

const post = props => {
  var date = new Date(props.timestamp).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={styles.vent}>
      <LogoImg topic={props.topic} />
      <div className={styles.vent__title}>{props.title}</div>
      <div className={styles.vent__content}>{props.content}</div>
      <div className={styles.vent__author}>{props.author}</div>
      <div className={styles.vent__date}>{date}</div>
    </div>
  );
};

// className="col-xl-3 col-md-4 col-sm-6 mb-4 py-2">

/* <div>
      <Card className={["h-100", styles.card].join(" ")}>
        <CardBody class={styles.cards} style={{ color: "black" }}>
          <LogoImg topic={props.topic} />
          <CardTitle>
            <b>{props.title}</b>
          </CardTitle>
          <CardText>{props.content}</CardText>
          <CardText>{props.author}</CardText>
          <Badge color="secondary">{date}</Badge>
        </CardBody>
      </Card>
    </div> */

export default post;
