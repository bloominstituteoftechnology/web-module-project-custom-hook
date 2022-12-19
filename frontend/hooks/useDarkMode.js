import React, {useState} from "react";
import { useLocalStorage} from "./useLocalStorage"

export const useDarkMode = (key , value) =>{
    const [darkMode, setDarkMode] = useLocalStorage(key, value)
    return(
        [darkMode, useDarkMode]
    )
}