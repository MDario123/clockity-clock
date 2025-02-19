import type { JSX } from "react";
import styles from "./styles.module.css";

function App(): JSX.Element {
  return (
    <div className={styles.page}>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
