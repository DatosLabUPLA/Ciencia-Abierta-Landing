// Components
import { PropsWithChildren } from "react";

// Styles
import styles from "./App.module.scss";

const App = ({ 
  children 
}: PropsWithChildren) => {

  return (
    <div id = "main__container" className = {styles["main__container"]}>
      {children}
    </div>
  )
}

export default App;
