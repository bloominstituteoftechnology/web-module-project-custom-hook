import useLocalStorage from './../hooks/useLocalStorage';
import React, { useState } from "react";
const useDarkMode = (props) =>{
    const [darkMode, setDarkMode] = useState(false);
  
    
    const toggleMode = e => {
        e.preventDefault();
        console.log('toggle mode', e.target, darkMode)
        setDarkMode(!darkMode);
      };
     const onclick = e =>(
         toggleMode
     )
      
    return([darkMode, toggleMode, onclick]);
}

export default useDarkMode;