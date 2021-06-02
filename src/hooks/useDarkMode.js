import { useState } from "react";
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode]
};

export default useDarkMode;
