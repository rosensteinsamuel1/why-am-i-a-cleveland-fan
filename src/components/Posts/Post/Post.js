import React from "react";
import styles from "./Post.module.css";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

const post = props => (
  <Col>
    <div className={styles.cards}>
      <Card body>
        <CardBody>
          <CardTitle className={styles.cardTitle}>
            <b>{props.title}</b>
          </CardTitle>
          <hr></hr>
          <CardText>{props.content}</CardText>
          <CardText>Author: {props.author}</CardText>
        </CardBody>
      </Card>
    </div>
  </Col>
);

export default post;
