import { useState} from 'react';


export const useLocalStorage = (key, initialValue) =>
{
    const [storedValue, setStoredValue] = useState(
        () =>
        {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
            //long version//
            //              if (localStorage.getItem(key))
            //             {
            //                 return JSON.parse(localStorage(key))
            //             } else
            //             {
            //              localStorage.setItem(key, initialValue);
            //              return initialValue;
        });


    const setValue = (value) => 
    {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    };
    return [storedValue, setValue];
};