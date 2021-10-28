import React, { useState, useEffect } from "react";
import {useLocalStorage,  useStoreString} from "./useLocalStorage";

const useDarkMode = (initialValues) =>{
    const [darkMode, setDarkMode] = useStoreString(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return ([darkMode, setDarkMode, toggleMode]);
  }
  export default useDarkMode;