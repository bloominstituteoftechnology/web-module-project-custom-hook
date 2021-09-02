import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('screen-mode', initialValue);

    return ([value, setValue])
}

export default useDarkMode;