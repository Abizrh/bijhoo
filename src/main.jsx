import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Background from "./components/Background";
import { ThemeProvider } from "./components/themeContext";
import { Toggle } from "./components/Toggle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Background>
      {/* <div className="right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-[12] sticky">
        <Toggle />
      </div> */}
        <App />
    </Background>
  </ThemeProvider>
);
