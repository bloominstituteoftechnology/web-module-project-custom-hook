import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      return window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
  });

  const setValue = (newValue) => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue];
};
