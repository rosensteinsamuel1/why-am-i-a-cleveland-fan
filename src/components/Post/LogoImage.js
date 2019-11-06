import React from "react";
import { CardImg } from "reactstrap";
import brownsLogo from "../../assets/browns_logo.png";
import indiansLogo from "../../assets/indians_logo.png";
import cavsLogo from "../../assets/cavs_logo.png";

const logoImg = props => {
  let img = brownsLogo;
  if (props.topic === "indians") {
    img = indiansLogo;
  } else if (props.topic === "cavs") {
    img = cavsLogo;
  }

  return (
    <div>
      <h1>{props.topic}</h1>
      <CardImg src={img} alt="topic logo" />
    </div>
  );
};

export default logoImg;
