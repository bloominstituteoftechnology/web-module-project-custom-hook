import {useState} from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    const setLocalStoredValue = (value) => {
        setValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [value, setLocalStoredValue];
};

export default useLocalStorage;