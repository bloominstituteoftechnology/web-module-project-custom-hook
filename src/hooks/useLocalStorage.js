import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const localStorageCheck = () => {
        const item = window.localStorage.getItem(key);
        if (item) {
            return (JSON.parse(item))
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return (initialValue);
        }
    }

    const [storedValue, setStoredValue] = useState(localStorageCheck());

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    
    return [storedValue, setValue];
};