import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import useMode from "./components/hook/useMode";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const [toggle, toggleMode] = useMode(false);

  // const useLocalStorage = (key, initialMode) => {
  //   const [mode, setMode] = useState(() => {
  //     if (localStorage.getItem(key)) {
  //       return (JSON.parse(localStorage.getItem(key)));
  //     } else {
  //       localStorage.setItem(key, JSON.stringify(initialMode));
  //       return(initialMode);
  //     }
  //   })
  //   const setStoredMode = (mode) => {
  //     localStorage.setItem(key, JSON.stringify(mode));
  //     setMode(mode);
  //   }
  //   return([mode, setStoredMode]);
  // }

  // const useMode = (initialToggle) => {
  //   const [toggle, setToggle] = useLocalStorage('mode', initialToggle);

  //   const toggleMode = e => {
  //     e.preventDefault();
  //     setDarkMode(!darkMode);
  //   };

  //   return([toggle, toggleMode])
  // }


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={toggle ? "dark-mode App" : "App"}>
      <Navbar toggleMode={toggleMode} toggle={toggle}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
