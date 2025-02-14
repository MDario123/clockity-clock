import styles from "./App.module.css"

export interface AppProps {
  onClick: () => void
}

const App: React.FC<AppProps> = ({ onClick }) => {
  return (
    <div className={styles.page}>
      <h1>Hello React</h1>
      <button onClick={() => onClick()}>Click me!</button>
    </div>
  )
}

export default App
