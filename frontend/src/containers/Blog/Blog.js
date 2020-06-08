import React, { Component } from "react";
import * as firebase from "firebase";
import config from "../../firebase-config";

import styles from "./Blog.module.scss";

import Navigation from "../../components/Navigation/Navigation";
import Posts from "../../components/Posts/Posts";
import SelectorButtons from "../../components/SelectorButtons/SelectorButtons";
import OpenModal from "../../components/NewPost/OpenModal";

// TODO: create filter button that toggles display of only one topic

class Blog extends Component {
  constructor(props) {
    super(props);
    // Post includes the following data:
    // Category, Title, Author, Location, Cotent

    this.state = {
      displayPosts: [],
      allPosts: [],
      active: "all",
      choosenTopic: null
    };

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
        let posts = values.reverse();
        _this.setState({
          allPosts: posts,
          displayPosts: posts,
          loading: false
        });
      });
  }

  onSelectionHandler = selection => {
    console.log("selected: " + selection);
    this.setState({ choosenTopic: selection });
    let sortedArr = [];
    if (selection !== "all") {
      sortedArr = this.state.allPosts.filter(post => {
        if (selection) {
          return post.topic === selection;
        } else {
          return post;
        }
      });
    } else {
      sortedArr = this.state.allPosts;
    }
    this.setState({
      choosenTopic: selection,
      displayPosts: sortedArr,
      active: selection
    });
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.heading_container}>
            <SelectorButtons
              onSelection={this.onSelectionHandler}
              firebaseRef={firebase.database().ref("posts")}
            />
          </div>
          <Posts error={this.state.error} posts={this.state.displayPosts} />
        </div>
      </div>
    );
  }
}

export default Blog;
