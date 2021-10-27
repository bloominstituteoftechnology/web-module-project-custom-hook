import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    
    const {storedValue, setStoredValue} = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return storedValue;
      }
    });
  
    const setStoredValue = (value)=> {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }
  
    return [value, setStoredValue];
}

export default useLocalStorage;