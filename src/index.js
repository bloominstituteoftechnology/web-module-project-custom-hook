import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
// import useDarkMode from "./hooks/useDarkMode";
import {useLocalStorage,  useStoreString} from "./hooks/useLocalStorage";

import "./styles.scss";
const initialValues = false

// const useLocalStorage = (key, initialvalue) => {
//   const [storedValue, setStoredValue] = useState( () => {
//     return false;
//   });
//   return [storedValue, setStoredValue]
// }

// const useLocalStorage = (key, initialvalue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialvalue;
//   });

//   const setValue = (value) => {
//       setStoredValue(value);
//       localStorage.setItem(key, JSON.stringify(value));
//   }
  
//   return [storedValue, setValue];
// }

// const useStoreString = () => {
//   const [storedValue, setValue] = useLocalStorage('darkMode')
//   console.log(storedValue)
//   // const [storedValue, setValue] = useLocalStorage('darkMode')
//   return[storedValue, setValue];
// }


const useDarkMode = (initialValues) =>{
  const [darkMode, setDarkMode] = useStoreString(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return ([darkMode, setDarkMode, toggleMode]);
}


const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode, toggleMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleMode={toggleMode}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
