import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = value => {
    const [mode, setMode] = useLocalStorage( "dark-mode", value );

    return [mode, setMode];
};
