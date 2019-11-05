import React from 'react';
import styles from './App.module.css'
import Blog from './containers/Blog/Blog'


function App() {
    return (
      <div className="App">
        <div className = {styles.appHeader}>
          <Blog />
        </div>
      </div>
    );
}

export default App;
