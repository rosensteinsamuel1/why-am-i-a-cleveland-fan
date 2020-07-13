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

  async componentDidMount() {
    let _this = this;
    // Load posts via firebase
    // firebase
    //   .database()
    //   .ref("posts")
    //   .orderByChild("timestamp")
    //   .on("value", function (snapshot) {
    //     var values = [];
    //     snapshot.forEach(function (child) {
    //       values.push(child.val());
    //     });
    //     let posts = values.reverse();
    //     console.log(posts)
    //     _this.setState({
    //       allPosts: posts,
    //       displayPosts: posts,
    //       isLoading: false
    //     });
    //   });

    // Load posts from MongoDB
    const response = await fetch('http://localhost:5000/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responseData = await response.json();
    console.log('responseData: ', responseData.posts)
    this.setState({
      allPosts: responseData.posts,
      displayPosts: responseData.posts,
      isLoading: false
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
              <RotateLoader css={override} size={15} color={"#AAA"} />
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
