import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage("dark", initialValue);

    return [darkValue, setDarkValue];
};