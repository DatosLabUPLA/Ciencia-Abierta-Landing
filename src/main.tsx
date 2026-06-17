//Components
import App from "./App.tsx";
import Router from "./routes/index.tsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//Styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <App>
      <RouterProvider router = {Router}/>
  </App>
);
