import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const item = window.localStorage.getItem(key);

    const [storedValue, setStoredValue] = useState(() => {
        return item ? JSON.parse(item) : initialValue;
    //     if (localStorage.getItem(key)){
    //         return JSON.parse(localStorage.getItem(key));
    //     } else{
    //         localStorage.setItem(key, initialValue);
    //         return initialValue;
    //     }
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }

    return [storedValue, setValue];
};

export default useLocalStorage;