import { useState } from "react";
 
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    // setValue function
    const setValue = value => {
        //Save state
        setStoredValue(value);
        //Save to local storages
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    //returning an array
    return [storedValue, setValue];
}
