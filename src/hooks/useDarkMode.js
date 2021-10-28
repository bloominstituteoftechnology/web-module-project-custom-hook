import React, { useState, useEffect } from "react";

const useDarkMode = (initialValues) =>{
    const [darkMode, setDarkMode] = useState(initialValues);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return ([darkMode, setDarkMode, toggleMode]);
  }
  export default useDarkMode;