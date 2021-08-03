// import { useState } from "react";

// const useLocalStorage = (key, initialValue) => {

//     const [value, setValue] = useState(() => {
//         if (localStorage.getItem(key)) {
//             return (JSON.parse(localStorage.getItem(key)));
//         } else {
//             localStorage.setItem(key, JSON.stringify(initialValue));
//             return initialValue;
//         }
//     });
//     const setStoredValue = (value) => {
//         localStorage.setItem(key, JSON.stringify(value));
//         setValue(value);
//     }

//     return ([value, setStoredValue]);
// }
// export default useLocalStorage;

import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return([storedValue, setValue])
}