import useLocalStorage from './useLocalStorage'
const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('')
    return [darkMode, setDarkMode]
}

export default useDarkMode;