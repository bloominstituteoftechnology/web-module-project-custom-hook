import { useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=> {
        const item =  window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
      })
      
      const newValue = (value) => {
          window.localStorage.setItem(key, value)
          setValue(value)
        }
        return [value, newValue];
    }
  