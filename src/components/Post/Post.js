import React from "react";
import styles from "./Post.module.css";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const post = props => (
  <div className="col-md-4 col-sm-6 mb-4">
    <Card className="h-100">
      <CardBody class={styles.cards} style={{ color: "black" }}>
        <CardTitle>
          <b>{props.title}</b>
        </CardTitle>
        <CardText>{props.content}</CardText>
        <CardText>{props.author}</CardText>
      </CardBody>
    </Card>
  </div>
);

export default post;
