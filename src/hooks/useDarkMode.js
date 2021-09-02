import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key, initVal) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initVal);
    useEffect(() => {
        let body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);
    return [darkMode, setDarkMode];
}