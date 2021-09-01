import  useLocalStorage  from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : JSON.stringify(initialValue)
    })

    const setDark = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setDarkMode(value)

    }
    return [darkMode, setDark]
}

export default useDarkMode;