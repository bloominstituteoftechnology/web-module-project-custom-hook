import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = intialValue => {
    const [value, setValue] = useLocalStorage("darkmode", intialValue)
    return [value, setValue];
}