import React, { useState } from "react";

import styles from "./SelectorButtons.module.scss";
import NewPost from "../NewPost/NewPost";

function SelectorButtons(props) {
  const [active, setActive] = useState("all");

  const clicked = selection => {
    console.log(selection);
    setActive(selection);
    props.onSelection(selection);
  };
  // <NewPost firebaseRef={props.firebaseRef} />
  return (
    <div className={styles.selectors}>
      <NewPost firebaseRef={props.firebaseRef} />

      {["all", "browns", "indians", "cavs", "other"].map(option => {
        return (
          <button
            className={active === option ? `${styles.active}` : ""}
            onClick={() => clicked(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
}

export default SelectorButtons;
