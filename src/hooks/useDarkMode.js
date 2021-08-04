import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage("dark", false);

    return [darkValue, setDarkValue];
};