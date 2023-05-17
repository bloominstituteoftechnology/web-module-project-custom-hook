import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return setValue(JSON.parse(localStorage.getItem(key)));
    }

    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setStoredValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };
};
