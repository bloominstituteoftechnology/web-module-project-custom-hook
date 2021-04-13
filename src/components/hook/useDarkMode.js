import React from "react";
import useLocalStorage from "./useLocalStorige";

const useDarkMode = (key, value) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, value);
  return [darkMode, setDarkMode];
};
export default useDarkMode;
