import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => { //initializing state with a function here

        const item = window.localStorage.getItem(key); //what the function is doing is fetching the data key stored locally

        return item ? JSON.parse(item) : initialValue; //then return this data key if it's a JS object, otherwise return the intialValue
    });
       

    const setValue = value => { // This is the setter function 
        setStoredValue(value); // to set the state here 
        window.localStorage.setItem(key, JSON.stringify(value)); // storing this data locally?
        console.log('what is this?') 
    };

    return [storedValue, setValue]; //what is this returning?
    
};

//This page is complete, just need to review over it, and test