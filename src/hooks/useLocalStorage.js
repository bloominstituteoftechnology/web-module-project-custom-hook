import { useState } from "react";

// An upgraded version of useState, with the same interface but the added functionality of reading to / writing from localStorage
export const useLocalStorage = (key, initialValue) => {
  // If the values are in localStorage already, use them to initialize our useState call
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key)); // parse the string saved in local storage back into a JavaScript object
    }
    return initialValue;
  });

  // Then, each time we update state, also update localStorage (this means we're going to create our own custom "upgraded" setValue function)
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue];
}
