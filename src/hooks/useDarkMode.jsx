import { useLocalStorage } from './useLocalStorage.jsx'

export const useDarkMode = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkMode', false);

    return [darkModeEnabled, setDarkModeEnabled];
}