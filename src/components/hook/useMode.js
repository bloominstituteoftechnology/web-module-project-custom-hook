import { useState } from 'react';

const useLocalStorage = (key, initialMode) => {
    const [mode, setMode] = useState(() => {
    if (localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialMode));
            return (initialMode);
        }
    })
    const setStoredMode = (mode) => {
        localStorage.setItem(key, JSON.stringify(mode));
        setMode(mode);
    }
    return ([mode, setStoredMode]);
}

const useMode = (initialToggle) => {
    const [toggle, setToggle] = useLocalStorage('darkmode', initialToggle);

    const toggleMode = e => {
        e.preventDefault();
        setToggle(!toggle);
    };

    return ([toggle, toggleMode])
}

export default useMode;