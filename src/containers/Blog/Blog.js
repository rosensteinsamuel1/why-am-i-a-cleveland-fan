import React, { Component } from "react";
import * as firebase from "firebase";
import config from "../../firebase-config";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";
import styles from "./Blog.module.css";
import { Row } from "reactstrap";

// TODO: create filter button that toggles display of only one topic

class Blog extends Component {
  constructor(props) {
    super(props);
    // Post includes the following data:
    // Category, Title, Author, Location, Cotent

    this.state = {
      posts: []
    };

    // this.state = {
    //   posts: [
    //     {
    //       id: 1,
    //       category: "sports",
    //       title: "used dirtbike",
    //       content: "this ‘is a post about the BROWNS",
    //       author: "sam",
    //       topic: "browns"
    //     },
    //     {
    //       id: 1,
    //       title: "another used dirtbike",
    //       content: "this is a post about the CAVS",
    //       author: "sam",
    //       topic: "indians"
    //     },
    //     {
    //       id: 1,
    //       category: "sports",
    //       title: "used dirtbike",
    //       content: "this ‘is a post about the BROWNS",
    //       author: "sam",
    //       topic: "browns"
    //     },
    //     {
    //       id: 1,
    //       title: "another used dirtbike",
    //       content: "this is a post about the CAVS",
    //       author: "sam",
    //       topic: "indians"
    //     },
    //     {
    //       id: 1,
    //       category: "sports",
    //       title: "used dirtbike",
    //       content: "this ‘is a post about the BROWNS",
    //       author: "sam",
    //       topic: "browns"
    //     }
    //   ]
    // };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  componentDidMount() {
    let postsRef = firebase.database().ref("posts");
    let _this = this;
    postsRef.on("value", function(snapshot) {
      console.log(Object.values(snapshot.val()));

      _this.setState({
        posts: Object.values(snapshot.val()),
        loading: false
      });
    });
  }
  //<CardDeck className="col-md-4 col-sm-12 mb-4">{posts}</CardDeck>
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Something went terribly wrong!</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
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
      <div class={styles.appBackground}>
        <div className={styles.appTitle}>
          <h1>Cleveland Sports Fans- Unite</h1>
          <h3>
            This is a forum for venting about the rough life we live as
            Cleveland sports fans.
          </h3>
        </div>
        <div>
          <NewPost firebaseRef={firebase.database().ref("posts")} />
        </div>
        <div>
          <h3>Recent Vents</h3>
          <div className={styles.cardDeck}>
            <Row>{posts}</Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
