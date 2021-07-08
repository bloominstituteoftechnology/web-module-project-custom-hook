import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (param) => {
    const [darkMode, setDarkMode] = useLocalStorage(param, false)

    return([darkMode, setDarkMode])
}