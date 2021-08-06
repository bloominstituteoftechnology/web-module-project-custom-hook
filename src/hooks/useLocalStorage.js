import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
