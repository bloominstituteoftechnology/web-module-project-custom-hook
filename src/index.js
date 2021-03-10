import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from './hooks/useDarkMode'
import useCoinData from "./services/coin-data.service";

const App = () => {
  const [coinData] = useCoinData()
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
