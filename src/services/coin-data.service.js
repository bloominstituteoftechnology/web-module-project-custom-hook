import { useState, useEffect } from 'react'
import axios from 'axios'

const useCoinData = () => {
    const [coinData, setCoinData] = useState([])
    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
          )
          .then(res => setCoinData(res.data))
          .catch(err => console.log(err));
    }, []);

    return [coinData]
}

export default useCoinData