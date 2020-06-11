import React, { Component } from "react";
import * as firebase from "firebase";
import config from "../../firebase-config";

import styles from "./Blog.module.scss";

// import OpenModal from "../../components/NewPost/OpenModal";
// import Navigation from "../../components/Navigation/Navigation";

import Posts from "../../components/Posts/Posts";
import SelectorButtons from "../../components/SelectorButtons/SelectorButtons";

import { FirebaseContext } from "../../context/FirebaseContext";

import { css } from "@emotion/core";
import RotateLoader from "react-spinners/RotateLoader";

const override = css`
  position: fixed;
  left: 50%;
  top: 50%;
  border-color: orange;
`;

class Blog extends Component {
  constructor(props) {
    super(props);
    // Post includes the following data:
    // Key, Category, Title, Author, Location, Content

    this.state = {
      displayPosts: [],
      allPosts: [],
      active: "all",
      choosenTopic: null,
      isLoading: true
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
      .on("value", snapshot => {
        var values = [];
        snapshot.forEach(function(child) {
          let key = child.key;
          let post = { key, ...child.val() };
          values.push(post);
        });
        let posts = values.reverse();
        _this.setState({
          allPosts: posts,
          displayPosts: posts,
          isLoading: false
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
      <FirebaseContext.Provider value={firebase.database()}>
        <div>
          <div className={styles.container}>
            <div className={styles.heading_container}>
              <SelectorButtons
                onSelection={this.onSelectionHandler}
                firebaseRef={firebase.database().ref("posts")}
              />
            </div>
            {this.state.isLoading ? (
              <RotateLoader css={override} size={15} color={"#e76f51"} />
            ) : (
              <Posts
                error={this.state.error}
                posts={this.state.displayPosts}
                firebaseRef={firebase.database().ref("posts")}
              />
            )}
          </div>
        </div>
      </FirebaseContext.Provider>
    );
  }
}

export default Blog;
