import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)

    return([value, setValue])
}

export default useDarkMode;