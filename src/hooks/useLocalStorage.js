import React, { useState, useEffect } from "react";

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState( () => {
      return false;
    });
    return [storedValue, setStoredValue]
  }
  
  export  const useStoreString = () => {
    const [storedValue, setValue] = useLocalStorage('darkMode')
    console.log(storedValue)
    // const [storedValue, setValue] = useLocalStorage('darkMode')
    return[storedValue, setValue];
  }