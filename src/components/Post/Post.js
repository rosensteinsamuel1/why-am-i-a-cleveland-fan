import React from "react";
import styles from "./Post.module.css";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";

// TODO: add logo image based on topic

const post = props => (
  <Card>
    <CardBody class={styles.cards} style={{ color: "black" }}>
      <CardTitle>
        <b>{props.title}</b>
      </CardTitle>
      <CardText>{props.content}</CardText>
      <CardText>{props.author}</CardText>
    </CardBody>
  </Card>
);

export default post;
