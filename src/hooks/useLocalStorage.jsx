import { useState, useEffect } from "react";
const localStorage = window.localStorage();

const useLocalStorage = (key, initialValue) => {
  // take in new data object
  // create slice of state to hold data
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  // on component mount or change in data value hold data passed to useLocalStorage in state then update local storage and return new data
  useEffect(() => {
    setStoredValue(initialValue);
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, initialValue, storedValue]);

  return storedValue;
};

export default useLocalStorage;
