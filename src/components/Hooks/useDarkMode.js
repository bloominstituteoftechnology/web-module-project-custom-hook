import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (initialValue) => {
    const [value, setvalue] = useLocalStorage('darkmode', initialValue);

    return [value, setValue];
};