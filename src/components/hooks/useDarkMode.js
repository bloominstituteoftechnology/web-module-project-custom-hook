import useLocalStorage from "./useLocalStorage";

const useDarkMode = (darkModeEnabled) => {
    const [darkMode, setDarkMode] = useLocalStorage('isDarkModeBeingUsed?', darkModeEnabled);

    return [darkMode, setDarkMode]
    
}
export default useDarkMode;