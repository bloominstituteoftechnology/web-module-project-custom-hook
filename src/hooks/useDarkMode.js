import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValue) => {
    const [values, setValues] = useLocalStorage('dark-mode__toggle', initialValue);
    return [values, setValues]
}
export default useDarkMode;