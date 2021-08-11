import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialValue => {
    const [ value, setValue ] = useLocalStorage("darkMode", initialValue)
    return [ value, setValue ]
}