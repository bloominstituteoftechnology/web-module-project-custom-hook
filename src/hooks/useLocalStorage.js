import { useState } from "react";

//updating and checking local storage for the darkmode boolean
const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    let item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  });

  const setNewValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setNewValue];
};

export default useLocalStorage;
