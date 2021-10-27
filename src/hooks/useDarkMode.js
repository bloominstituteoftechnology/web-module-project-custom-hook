import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkModeValue, setDarkModeValue] = useLocalStorage('key', initialValue)

    return ([darkModeValue, setDarkModeValue])
}

export default useDarkMode