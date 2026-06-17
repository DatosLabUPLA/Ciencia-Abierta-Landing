// Components
import AOS  from "aos";
import { useEffect, PropsWithChildren } from "react";

// Styles
import "aos/dist/aos.css";
import styles from "./App.module.scss";

const App = ({ 
  children 
}: PropsWithChildren) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <div className = {styles["main__container"]}>
      {children}
    </div>
  )
}

export default App;
