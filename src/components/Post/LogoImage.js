import React from "react";
import { CardImg } from "reactstrap";
import styles from "./LogoImage.module.css";

import brownsLogo from "../../assets/photos/browns_logo.png";
import indiansLogo from "../../assets/photos/indians_logo.png";
import cavsLogo from "../../assets/photos/cavs_logo.png";
import clevelandPic from "../../assets/photos/cleveland.jpg";

const logoImg = props => {
  let img;
  console.log("[logoimage.js]: " + props.topic);
  switch (props.topic) {
    case "Indians":
      img = indiansLogo;
      break;
    case "Cavs":
      img = cavsLogo;
      break;
    case "Browns":
      img = brownsLogo;
      break;
    default:
      img = clevelandPic;
  }

  return (
    <div>
      <img height="150px" width="auto " src={img} alt="topic logo" />
    </div>
  );
};

export default logoImg;
