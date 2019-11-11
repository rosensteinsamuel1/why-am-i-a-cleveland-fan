import React, { Component } from "react";
import * as firebase from "firebase";
import config from "../../firebase-config";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";
import styles from "./Blog.module.css";
import Posts from "../../components/Posts/Posts";

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
    let _this = this;
    firebase
      .database()
      .ref("posts")
      .orderByChild("timestamp")
      .on("value", function(snapshot) {
        var values = [];
        snapshot.forEach(function(child) {
          values.push(child.val());
        });
        _this.setState({
          posts: values.reverse(),
          loading: false
        });
      });
  }

  //<CardDeck className="col-md-4 col-sm-12 mb-4">{posts}</CardDeck>
  render() {
    return (
      <div class={styles.appBackground}>
        <div className={styles.appTitle}>
          <h1>CLEVELAND SPORTS FANS - UNITE</h1>
          <h3>
            This is a forum for venting about the rough life we live as
            Cleveland sports fans.
          </h3>
        </div>
        <div>
          <NewPost firebaseRef={firebase.database().ref("posts")} />
        </div>
        <div>
          <Posts error={this.state.error} posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Blog;
