import React from "react";
import styles from "./Posts.module.scss";
import Post from "../Post/Post";

// TODO: sort via timestamp- DONE

const posts = props => {
  let posts = (
    <p style={{ textAlign: "center" }}>Something went terribly wrong!</p>
  );

  if (!props.error) {
    return (
      <section className={styles.vent__container}>
        {
          (posts = props.posts.map(post => {
            return (
              <Post
                key={post.id}
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
    <div>
      <div className={styles.cardDeck}>{posts}</div>
    </div>
  );
};

export default posts;
