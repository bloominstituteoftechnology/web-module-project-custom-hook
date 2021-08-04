import useLocalStorage from './useLocalStorage'

const useDarkMode = (initValue) => {
    const [storedValue, setValue] = useLocalStorage('darkModeStatus', initValue)

    return [storedValue, setValue]
}

export default useDarkMode