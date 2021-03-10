import {useState, useEffect} from 'react'
import axios from 'axios'

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [coinData, setCoinData] = useState([]);
    const [darkMode, setDarkMode] = useLocalStorage("dark mode");



    useEffect(() => {
        axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err));
    }, []);

    return [coinData, darkMode, setDarkMode]
}

export default useDarkMode 