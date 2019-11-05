import React from 'react';
import styles from './Post.module.css';
import {
    Card, CardText, CardBody,
    CardTitle, Col
  } from 'reactstrap';

const post = (props) => (
     
         <Col className = {"col-md-4 d-flex align-items-stretch"}>
          <div className = {styles.cards} >
              {/* " sm="4"> */}
         <Card body>
            <CardBody> 
                <CardTitle className={styles.cardTitle}><b>{props.title}</b></CardTitle>
                <hr></hr>
                <CardText>{props.content}</CardText>
                <CardText>Author: {props.author}</CardText>
            </CardBody>
        </Card>
          </div>
         
        </Col>
)

export default post;