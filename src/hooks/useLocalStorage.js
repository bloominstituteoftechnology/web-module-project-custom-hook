import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    //1. get initialValue
    //2. check to see if a value exists inside of localStorage under key
    //3. If a value exists in localStorage, put that into state.
    //4. If a value does not exist, put initialValue into localStorage
    const [modeValue, setModeValue] = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
  
  
    //5. when we setState, also save value into localStorage under key
    const setStoredValue = (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      setModeValue(value);
    }
  
    return [modeValue, setStoredValue];
}

export default useLocalStorage;