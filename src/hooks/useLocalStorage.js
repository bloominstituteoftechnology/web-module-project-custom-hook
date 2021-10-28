import React, { useState, useEffect } from "react";


export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialvalue;
    });
  
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValue, setValue];
  }
  
  export const useStoreString = () => {
    const [storedValue, setValue] = useLocalStorage('darkMode')
    console.log(storedValue)
    // const [storedValue, setValue] = useLocalStorage('darkMode')
    return[storedValue, setValue];
  }