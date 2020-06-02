import React from "react";
import { Row } from "reactstrap";
import styles from "./Posts.module.css";
import Post from "../Post/Post";

// TODO: sort via timestamp- DONE

const posts = props => {
  let posts = (
    <p style={{ textAlign: "center" }}>Something went terribly wrong!</p>
  );

  if (!props.error) {
    return (
      <section className={styles.vents}>
        {
          (posts = props.posts.map(post => {
            return (
              <Post
                title={post.title}
                author={post.author}
                content={post.content}
                topic={post.topic}
                timestamp={post.timestamp}
              />
            );
          }))
        }
      </section>
    );
  }

  return (
    <div className={styles.cardDeck}>
      <h1> </h1>
      <h1 style={{ fontFamily: "WorkSans-Bold   " }}>RECENT VENTS</h1>
      <Row>{posts}</Row>
    </div>
  );
};

export default posts;
