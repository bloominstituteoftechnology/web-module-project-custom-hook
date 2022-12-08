import React, {useState} from "react"
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [darkMode, useDarkMode] = useLocalStorage(key, initialValue)

    return [darkMode, useDarkMode];
}