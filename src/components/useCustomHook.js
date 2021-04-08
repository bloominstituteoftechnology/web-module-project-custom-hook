import { useState, useEffect } from 'react';

const useCustomHook = () => {

    const [coinData, setCoinData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

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
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Charts coinData={coinData} />
        </div>
      );
    };

    // custom hooks are essentially Events with State Changes that are kept in a seperate file and imported into the main App for efficiency. 

export default useCustomHook