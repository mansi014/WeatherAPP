import React, { useState, useEffect } from "react";
import CurrentLocation from "./currentLocation";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  return (
    <>
      <div className="mode-toggle">
        {darkMode ? (
          <FaSun className="mode-icon" onClick={() => setDarkMode(false)} />
        ) : (
          <FaMoon className="mode-icon" onClick={() => setDarkMode(true)} />
        )}
      </div>

      <div className={`container ${darkMode ? "dark-card" : "light-card"}`}>
        <CurrentLocation />
      </div>
    </>
  );
}

export default App;
