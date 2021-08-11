import React, { useState } from 'react'
const useLocalStorage = (key, initialValue) => {
    const [value, setStoredValue] = useState(() => {
        if (
            localStorage.getItem(key)
        ) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        else {
            return initialValue
        }

    });

    const setValueAndLocalStorage = (newValue) => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [value, setValueAndLocalStorage];
}

export default useLocalStorage;