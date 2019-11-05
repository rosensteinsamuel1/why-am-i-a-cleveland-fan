import React from "react";
import styles from "./App.module.css";
import Blog from "./containers/Blog/Blog";

function App() {
  return (
    <div className={styles.App}>
      <Blog />
    </div>
  );
}

export default App;
