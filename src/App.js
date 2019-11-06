import React from "react";
import Blog from "./containers/Blog/Blog";
import styles from "./App.module.css";
// className={styles.App}
function App() {
  return (
    <div className={styles.AppBackground}>
      <Blog />
    </div>
  );
}

export default App;
