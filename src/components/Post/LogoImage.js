import React from "react";

import brownsLogo from "../../assets/photos/browns_logo.png";
import indiansLogo from "../../assets/photos/indians_logo.png";
import cavsLogo from "../../assets/photos/cavs_logo.png";
import clevelandPic from "../../assets/photos/cleveland.jpg";

import styles from "./Post.module.scss";

const logoImg = props => {
  let img;
  switch (props.topic) {
    case "indians":
      img = indiansLogo;
      break;
    case "cavs":
      img = cavsLogo;
      break;
    case "browns":
      img = brownsLogo;
      break;
    default:
      img = clevelandPic;
  }

  return (
    <img
      height="150px"
      width="auto"
      src={img}
      alt="topic logo"
      className={styles.vent__img}
    />
  );
};

export default logoImg;
