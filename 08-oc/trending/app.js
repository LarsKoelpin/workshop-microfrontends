import React from "react";
import styles from "./styles.css";

const App = () =>
    <div className={styles.special}>
        <h1>
            Trending
        </h1>
        <ul>
            <li>#react</li>
            <li>#angular</li>
            <li>#vue.js</li>
        </ul>
    </div>;

export default App;
