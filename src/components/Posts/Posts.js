import React from "react";
import { Row } from "reactstrap";
import styles from "./Posts.module.css";
import Post from "../Post/Post";

const posts = props => {
  let posts = (
    <p style={{ textAlign: "center" }}>Something went terribly wrong!</p>
  );

  if (!props.error) {
    posts = props.posts.map(post => {
      return (
        <Post
          title={post.title}
          author={post.author}
          content={post.content}
          topic={post.topic}
          timestamp={post.timestamp}
        />
      );
    });
  }

  return (
    <div className={styles.cardDeck}>
      <h1>POSTS</h1>
      <Row>{posts}</Row>
    </div>
  );
};

export default posts;
