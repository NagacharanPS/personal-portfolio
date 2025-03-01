import React, { useContext, useEffect } from "react";
import "../css/toggleSwitch.css";
import { themeContext } from "../App";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
  }, [theme]);

  return (
    <div className="toggleSwitch-container">
      <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>

      <div
        className={`switch ${theme === "dark" ? "active" : ""}`}
        onClick={toggleTheme}
      >
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
