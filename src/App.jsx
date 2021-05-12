import React, { useState, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode"

import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinList from './components/CoinList';


import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [coinList, setCoinList] = useState([]);


  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
      .then(res => setCoinData(res.data))
      .then(
        axios
          .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=5&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d')
          .then(response => {
            console.log(response.data)
            setCoinList(response.data)
          })
      )
      .catch(err => console.log(err))
  }, []);

  return (

    <div>

      <div className={darkMode ? "dark-mode App" : "App"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <CoinList coinList={coinList} />
        <Charts coinData={coinData} />
      </div>
    </div>
  );

};

export default App
