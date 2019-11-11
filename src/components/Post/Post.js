import React from "react";
import styles from "./Post.module.css";
import LogoImg from "./LogoImage";

import { Card, CardText, CardBody, CardTitle, Badge } from "reactstrap";

// TODO: display date on card

const post = props => {
  var date = new Date(props.timestamp).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  console.log(date);
  return (
    <div className="col-xl-3 col-md-4 col-sm-6 mb-4 py-2">
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
    </div>
  );
};
export default post;
