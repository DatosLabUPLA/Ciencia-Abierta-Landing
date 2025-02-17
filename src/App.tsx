//Components
import AOS  from "aos";
import { useEffect } from "react";

//Styles
import "./App.scss";
import "aos/dist/aos.css";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <div className = "main__container">
      {children}
    </div>
  )
}

export default App;
