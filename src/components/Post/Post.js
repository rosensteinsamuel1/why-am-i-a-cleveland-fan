import React from "react";
import styles from "./Post.module.scss";
import LogoImg from "./LogoImage";

const post = props => {
  let date = new Date(props.timestamp).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={styles.grid_item}>
      <div className={styles.vent}>
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
          <p>{props.author}</p>
        </div>
        <div className={styles.vent__date}>
          <p>
            {date.split(", ")[0]}
            <br />
            {date.split(", ")[1]}
          </p>
        </div>
      </div>
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
