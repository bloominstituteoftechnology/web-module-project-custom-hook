import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // When initializing, check local storage for the value. If it's there, use it to initialize. Otherwise, use initialValue
    const [value, setValue] = useState(() => {
      if (localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
      }
      else {
        return initialValue;
      }
    });
  
    // When updating state, also update local storage
    // Do this by "composing" setValue into a new function that sets the value and local storage
    const setValueAndLocalStorage = (newValue) => {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    }
  
    return [value, setValueAndLocalStorage];
  }

export default useLocalStorage;