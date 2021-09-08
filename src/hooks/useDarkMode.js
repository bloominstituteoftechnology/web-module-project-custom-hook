import { useMediaQuery } from "@material-ui/core";
import React from "react"
import useLocalStorage from "./useLocalStorage"


export default function useDarkMode (key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('key', initialValue)

    return [darkMode, setDarkMode]
}