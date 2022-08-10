import { useState } from 'react'

const useLocalStorage = (key, value) => {
    const [data, setData] = useState(() => {
        const fromLocalStorage = window.localStorage.getItem(key);
        return fromLocalStorage
        ? JSON.parse(fromLocalStorage)
        : value;
      });
    
      const setState = (dataToSet) => {
        const stringified = JSON.stringify(dataToSet);
        window.localStorage.setItem(key, stringified);
        setData(dataToSet);
    
      };
    
      return [data, setState];
};

export default useLocalStorage;