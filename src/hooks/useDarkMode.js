import { useMediaQuery } from "@material-ui/core";
import React from "react"
import useLocalStorage from "./useLocalStorage"


export default function useDarkMode (initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)

    return [darkMode, setDarkMode]
}