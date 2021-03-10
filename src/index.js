import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import "./styles.scss";
import useDarkMode from './components/hooks/useDarkMode';

const App = () => {
  const [
    coinData,
    darkMode,
    setDarkMode
  ] = useDarkMode()
  
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
