
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark')
    return [value, setValue];
}

export default useDarkMode;