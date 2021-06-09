import React, { useState } from "react";

const useLocalStorage = (initialValue) => {
  const [coinData, setCoinData] = useState(initialValue);

  return [coinData, setCoinData];
};

export default useLocalStorage;
