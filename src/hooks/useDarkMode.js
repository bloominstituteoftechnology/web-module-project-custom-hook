import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', value)
    return [darkMode, setDarkMode];
};
