import { useState } from "state";

//set up state property
//capture the values
//if local date use that, else use initial data
//update LocalStorage when needed
//Don't forget to parse date from localsotrage and stringify new data getting stored

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setStoredValue, setValue];
};
