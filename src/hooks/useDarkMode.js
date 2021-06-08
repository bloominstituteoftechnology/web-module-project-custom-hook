import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(useDarkMode, initialValue);
    return [darkMode, setDarkMode];
}