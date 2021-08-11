// 2. import state hooks
import React, { useState } from "react";


// 1. this is a hook as it starts with the name 'use' ie useLocalStorage
export const useLocalStorage = (key, initialValue) => {

    // stored value state
    const [storedValue, setStoredValue] = useState(() => {
        // Note: when using localStorage to store objects, arrays, etc you have to 'stringify'
        // JSON.parse() the value. In order to take back out of the local storage you have to json.parse it out. JSON.stringify()
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue; 
    });

    const setValue = (value) => {
        // sets localStorage to key & value
        window.localStorage.setItem(key, JSON.stringify(value));

        setStoredValue(value)
    }
    // this return array is so we can return multiple arrays
    return [storedValue, setValue];

};

