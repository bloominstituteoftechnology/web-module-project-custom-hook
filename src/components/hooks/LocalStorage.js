import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [ value, setValue ] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }

        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue
    });

    const setLocalStorageValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return [value, setLocalStorageValue]
}

export default useLocalStorage;