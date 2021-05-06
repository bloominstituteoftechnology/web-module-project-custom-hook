import { useState } from "react";

const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initalValue));
        console.log("Initial Value :", initialValue);
        return [initialValue];
    });
    const setValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };
    return [storedValue, setValue];
}

export default useLocalStorage;