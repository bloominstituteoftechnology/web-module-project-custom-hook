import { useState } from "react"


export const useLocalStorage = (key, initialValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        window.localStorage.getItem(key, value);
        setStoreValue(value);
    }

    return [storeValue, setValue]
}

