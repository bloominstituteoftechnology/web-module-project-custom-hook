import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    //1. When we initialize state, see if a value exists inside of localStorage.
    //2. if a value exists in localStorage, set state to that value.
    //3. if a value does not exist in localStorage, set state to initialValue and set localStorage to initialValue
    //4. Any time we save to state, save to localStorage.
    const [value, setValue] = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    });
  
    const setStoredValue = (value)=> {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    }
  
    return [value, setStoredValue];
  }

  export default useLocalStorage;