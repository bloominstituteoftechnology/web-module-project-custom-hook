import { useLocalStorage } from './useLocalStorage.js'

export const useDarkMode = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkMode', false);

    return [useLocalStorage.storedValue, useLocalStorage.setValue];
}