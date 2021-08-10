import { useState } from "react";

//callback function passed into useState is just a piece of conditional logic that tells our application whether or not the user has saved data and if they do to intialize state WITH that data
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  //use new setter function to enhance setStoredValue by updating storedValue state AND saving that slice of state to local stored with the key that is passed in
  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
