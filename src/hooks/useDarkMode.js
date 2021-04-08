import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', true)
    return [darkMode, setDarkMode]
}
export default useDarkMode