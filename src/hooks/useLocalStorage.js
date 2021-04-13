import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {

        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    });
       

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue]; //Is this in the right spot, any why is this setValue outside of the
};
