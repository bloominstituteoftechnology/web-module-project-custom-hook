import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return (JSON.parse(window.localStorage.getItem(key)));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
        }
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
    }

    return [storedValue, setValue]

    
}